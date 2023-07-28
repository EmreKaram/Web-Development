import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Me</h1><p>My name is Emre</p>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Me</h1><p>Phone: +9005379973322</p>");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// HTTP Methods
// GET: request data from a specified resource
// POST: submit data to be processed to a specified resource
// PUT: update a specified resource "replace" new bycicle
// PATCH: update a specified resource "patch up a resource" only wheel that is broken
// DELETE: delete a specified resource

// Rawheaders are the headers that are coming from the browser
// Nodemon is a package that restarts the server automatically when we make changes
// End point is the part of the url that comes after the domain name