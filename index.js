import "./todolist.css";

import TodoApp from "./todo/TodoApp";

const todoApp = new TodoApp({
  container: document.querySelector(".todo")
});
