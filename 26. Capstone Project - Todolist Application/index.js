import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// Work
let todoWorkList = [{ idWork: 1, taskWork: "Work" }];

app.get("/", (req, res) => {
  res.render("index.ejs", { todoWorkList });
});

app.post("/addWork", (req, res) => {
  const newTodoWork = {
    idWork: todoWorkList.length + 1,
    taskWork: req.body.taskWork,
  };
  todoWorkList.push(newTodoWork);
  res.redirect("/");
});

app.delete("/deleteWork/:idWork", (req, res) => {
  const todoWorkId = parseInt(req.params.idWork);
  todoWorkList = todoWorkList.filter((todoW) => todoW.idWork !== todoWorkId);
  res.sendStatus(204);
});

// Daily
let todoDailyList = [{ idDaily: 1, taskDaily: "Daily" }];

app.get("/daily", (req, res) => {
  res.render("daily.ejs", { todoDailyList });
});

app.post("/addDaily", (req, res) => {
  const newTodoDaily = {
    idDaily: todoDailyList.length + 1,
    taskDaily: req.body.taskDaily,
  };
  todoDailyList.push(newTodoDaily);
  res.redirect("/daily");
});

app.delete("/deleteDaily/:idDaily", (req, res) => {
  const todoDailyId = parseInt(req.params.idDaily);
  todoDailyList = todoDailyList.filter(
    (todoD) => todoD.idDaily !== todoDailyId
  );
  res.sendStatus(204);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
