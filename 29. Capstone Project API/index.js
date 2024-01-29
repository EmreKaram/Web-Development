import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "https://api.openweathermap.org";
const apiKey = "e4982a616287eae4d4a454f56c187c9d";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "Waiting for data..." });
});

app.post("/get-weather", async (req, res) => {
  const cityName = req.body.city;
  try {
    const result = await axios.get(
      API_URL + `/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`
    );
    console.log(result.data);
    const temperature = result.data.main.temp;
    const nameOfCity = result.data.name;
    res.render("index.ejs", {
      content: JSON.stringify(result.data),
      temperature,
      nameOfCity,
    });
  } catch (error) {
    console.log(error.response.data);
    res.status(500).send("An error occurred");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
