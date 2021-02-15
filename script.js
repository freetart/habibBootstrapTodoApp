"use strict";

// selectors
const form = document.querySelector(".form");
const todoInput = document.querySelector(".todo-input");
const submitTodoBtn = document.querySelector(".submit-todo-btn");
const clearAllBtn = document.querySelector(".clear-all-btn");
const checkBtn = document.querySelector(".check-btn");
const deleteBtn = document.querySelector(".delete-btn");

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
      <button class="check-btn btn btn-success">
        <i class="fas fa-check text-white"></i>
      </button>
      <button class="delete-btn btn btn-danger ms-2">
        <i class="fas fa-trash text-white"></i>
      </button>
    </div>
  </li>
  `;

  ul.appendChild(li);
}

form.addEventListener("submit", submitTodo);
