// Importing necessary libraries/modules.
import express from "express"; // Express framework for building web applications.
import bodyParser from "body-parser"; // Middleware for parsing incoming request bodies.
import pg from "pg"; // PostgreSQL database driver.

// Setting up the Express application and defining the port to run on.
const app = express();
const port = 3000;

// Creating a new PostgreSQL client and connecting to the database.
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "1546",
  port: 5432,
});
db.connect();

// Setting up middleware to parse incoming request bodies.
app.use(bodyParser.urlencoded({ extended: true }));

// Serving static files from the "public" directory.
app.use(express.static("public"));

// Function to check visited countries.
async function checkVisited() {
  // Querying the database for country codes from the 'visited_countries' table.
  const result = await db.query("SELECT country_code FROM visited_countries");

  // Initializing an empty array to store country codes.
  let countries = [];

  // Iterating through the rows returned by the query.
  result.rows.forEach((country) => {
    // Pushing country codes into the 'countries' array.
    countries.push(country.country_code);
  });

  // Returning the array of country codes.
  return countries;
}

// Handling GET request to the home page.
app.get("/", async (req, res) => {
  // Calling the checkVisited function to get the list of visited countries.
  const countries = await checkVisited();

  // Rendering the 'index.ejs' template with the list of countries and total count.
  res.render("index.ejs", { countries: countries, total: countries.length });
});

// Handling POST request to add a new country.
app.post("/add", async (req, res) => {
  const input = req.body["country"]; // Getting the country input from the request body.

  try {
    // Querying the database to find the country code for the provided country name.
    const result = await db.query(
      "SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%';",
      [input.toLowerCase()]
    );

    const data = result.rows[0]; // Extracting the data for the first matching country.

    const countryCode = data.country_code; // Extracting the country code.

    try {
      // Inserting the country code into the 'visited_countries' table.
      await db.query(
        "INSERT INTO visited_countries (country_code) VALUES ($1)",
        [countryCode]
      );
      res.redirect("/"); // Redirecting to the home page after successful insertion.
    } catch (err) {
      console.log(err);
      // Handling errors if the country has already been added.
      const countries = await checkVisited();
      res.render("index.ejs", {
        countries: countries,
        total: countries.length,
        error: "Country has already been added, try again.",
      });
    }
  } catch (err) {
    console.log(err);
    // Handling errors if the provided country name does not exist in the database.
    const countries = await checkVisited();
    res.render("index.ejs", {
      countries: countries,
      total: countries.length,
      error: "Country name does not exist, try again.",
    });
  }
});

// Starting the server and logging a message upon successful start.
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
