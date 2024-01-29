// Importing the required module from the 'mongodb' package
const { MongoClient } = require("mongodb");

// Define the connection string to your MongoDB server
const uri = "mongodb://127.0.0.1:27017";

// Create a new instance of the MongoClient with the connection string
const client = new MongoClient(uri, {
  useUnifiedTopology: true, // Use the new Server Discovery and Monitoring engine
});

// Define an asynchronous function named 'run' to handle the database operations
async function run() {
  try {
    // Connect to the MongoDB server
    await client.connect();

    // Access a specific database, in this case 'fruitsDB'
    const database = client.db("fruitsDB");
    console.log("Connected to database " + database.databaseName);

    // Call the function to insert documents into the collection
    //await insertDocuments(database);
    await findDocuments(database);
  } finally {
    // Close the connection when done (whether an error occurred or not)
    await client.close();
  }
}

// Define an asynchronous function named 'insertDocuments' to insert documents into the collection
async function insertDocuments(db) {
  // Access the 'fruits' collection within the specified database
  const collection = db.collection("fruits");

  // Insert an array of documents into the collection
  const result = await collection.insertMany([
    {
      name: "Apple",
      score: 8,
      review: "Great fruit",
    },
    {
      name: "Orange",
      score: 6,
      review: "Kinda sour",
    },
    {
      name: "Banana",
      score: 9,
      review: "Great stuff!",
    },
  ]);

  // Log the number of documents inserted
  console.log(`Inserted ${result.insertedCount} documents into the collection`);
}

async function findDocuments(db) {
  const collection = db.collection("fruits");

  // Find all documents in the collection
  const cursor = collection.find({});

  // Convert the cursor to an array of documents
  const documents = await cursor.toArray();

  // Log the documents
  console.log("Found the following documents:");
  documents.forEach((doc) => {
    console.log(doc);
  });
}
// Call the "run" function to start the database operations
run().catch(console.dir); // Catch and log any errors that may occur during execution
