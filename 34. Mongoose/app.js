const mongoose = require("mongoose");

async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB", {
      useNewUrlParser: true,
    });

    const fruitsSchema = new mongoose.Schema({
      name: String,
      rating: Number,
      review: String,
    });

    const Fruit = mongoose.model("Fruit", fruitsSchema);

    const fruit = new Fruit({
      name: "Apple",
      rating: 7,
      review: "Pretty solid as a fruit.",
    });

    await fruit.save();

    console.log("Fruit saved successfully!");
  } catch (error) {
    console.error("Error! connecting to MongoDB:", error);
  }
}

main();
