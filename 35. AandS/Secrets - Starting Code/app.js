//jshint esversion:6
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const encrypt = require("mongoose-encryption");

const app = express();

console.log(process.env.API_KEY);

mongoose.connect("mongodb://127.0.0.1:27017/userDB", { useNewUrlParser: true });

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

userSchema.plugin(
  encrypt,
  { secret: process.env.SECRET },
  { encryptedFields: ["password"] }
);

const User = new mongoose.model("User", userSchema);

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/login", function (req, res) {
  res.render("login");
});

app.get("/register", function (req, res) {
  res.render("register");
});

app.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

app.post("/register", async function (req, res) {
  try {
    const newUser = new User({
      email: req.body.username,
      password: req.body.password,
    });

    await newUser.save();
    res.render("secrets");
  } catch (error) {
    console.error(error);
  }
});

app.post("/login", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  try {
    const foundUser = await User.findOne({ email: username });

    if (foundUser) {
      if (foundUser.password === password) {
        res.render("secrets");
      } else {
        res.send("Wrong password");
      }
    } else {
      res.send("User not found");
    }
  } catch (error) {
    console.error(error);
    res.send("An error occurred");
  }
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
