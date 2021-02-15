"use strict";

// selectors
const form = document.querySelector(".form");
const todoInput = document.querySelector(".todo-input");
const submitTodoBtn = document.querySelector(".submit-todo-btn");
const clearAllBtn = document.querySelector(".clear-all-btn");
const checkAndDeleteBtn = document.querySelector("ul");

function submitTodo(e) {
  e.preventDefault();

  if (todoInput.value !== "") {
    addTodo(todoInput.value);
  }

  todoInput.value = "";
}

function addTodo(todo) {
  let ul = document.querySelector("ul");
  let li = document.createElement("li");

  li.innerHTML = `
  <li
    class="todo-item list-group-item d-flex align-item-center justify-content-between"
  >
    <span class="todo-item display-6">${todo}</span>
    <div class="btn-group">
      <button name="check-btn" class="check-btn btn btn-success">
        <i class="fas fa-check text-white"></i>
      </button>
      <button name="delete-btn" class="delete-btn btn btn-danger ms-2">
        <i class="fas fa-trash text-white"></i>
      </button>
    </div>
  </li>
  `;

  ul.appendChild(li);
}

function checkAndDeleteTodos(e) {
  if (e.target.name === "check-btn") {
    checkTodo(e);
  } else if (e.target.name === "delete-btn") {
    deleteTodo(e);
  }
}

function checkTodo(e) {
  let item = e.target.parentNode;

  item.addEventListener("click", item.parentNode.classList.add("cross-out"));
}

function deleteTodo(e) {
  let item = e.target.parentNode;

  item.addEventListener("click", item.parentNode.parentNode.remove());
}

// event listeners
form.addEventListener("submit", submitTodo);
checkAndDeleteBtn.addEventListener("click", checkAndDeleteTodos);
