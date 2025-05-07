import { v4 as uuidv4 } from "https://jspm.dev/uuid";

import {
  initialTodos,
  validationConfig,
  todoSelector,
} from "../utils/constants.js";

import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";
import Popup from "../components/Popup.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Section from "../components/Section.js";
import ToDoCounter from "../components/TodoCounter.js";

const addTodoButton = document.querySelector(".button_action_add");
const addTodoForm = document.forms["add-todo-form"];
const todosList = document.querySelector(".todos__list");

// class to open & close the popup
const addTodoPopup = new PopupWithForm({
  popupSelector: "#add-todo-popup",
  submitHandler: () => {},
});

// set event listeners on page
addTodoPopup.setEventListeners();

// class to add to-do items to the page
const section = new Section({
  items: initialTodos,
  renderer: (item) => {
    const todo = generateTodo(item);
    section.addItem(todo);
  },
  containerSelector: ".todos__list",
});

// enable page validation
const newTodoValidator = new FormValidator(validationConfig, addTodoForm);
newTodoValidator.enableValidation();

// create to do item
const generateTodo = (data) => {
  const todo = new Todo(data, todoSelector);
  const todoElement = todo.getView();

  return todoElement;
};

// render new to do item
const renderTodo = (item) => {
  const todo = generateTodo(item);
  section.addItem(todo);
};

// open popup
addTodoButton.addEventListener("click", () => {
  addTodoPopup.open();
});

// submit to-do item
addTodoForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const name = evt.target.name.value;
  const dateInput = evt.target.date.value;

  // Create a date object and adjust for timezone
  const date = new Date(dateInput);
  date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

  const id = uuidv4();
  const values = { name, date, id };
  renderTodo(values); // add new to do item
  addTodoPopup.close();
  newTodoValidator.resetValidation();
});

// render the initial to do items
section.renderItems();
