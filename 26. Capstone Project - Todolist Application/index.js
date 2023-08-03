import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

const todoLists = {
  work: [{ id: 1, task: "Work" }],
  daily: [{ id: 1, task: "Daily" }],
};

function addTodo(listName, task) {
  const newList = todoLists[listName];
  const newTodo = { id: newList.length + 1, task };
  newList.push(newTodo);
}

function deleteTodo(listName, todoId) {
  const list = todoLists[listName];
  todoLists[listName] = list.filter((todo) => todo.id !== todoId);
}

// Work
app.get("/", (req, res) => {
  res.render("index.ejs", { todoList: todoLists.work });
});

app.post("/addWork", (req, res) => {
  addTodo("work", req.body.taskWork);
  res.redirect("/");
});

app.delete("/deleteWork/:id", (req, res) => {
  deleteTodo("work", parseInt(req.params.id));
  res.sendStatus(204);
});

// Daily
app.get("/daily", (req, res) => {
  res.render("daily.ejs", { todoList: todoLists.daily });
});

app.post("/addDaily", (req, res) => {
  addTodo("daily", req.body.taskDaily);
  res.redirect("/daily");
});

app.delete("/deleteDaily/:id", (req, res) => {
  deleteTodo("daily", parseInt(req.params.id));
  res.sendStatus(204);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
