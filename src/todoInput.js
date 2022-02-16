export function getTodoInputItems() {
  const todoInput = document.querySelector(".todo-input");
  const todoHelper = document.querySelector(".todo-helper");
  const todoButton = document.querySelector(".todo-button");

  return {
    todoInput,
    todoHelper,
    todoButton,
  };
}

export function validateTodoInput() {
  const { todoInput, todoHelper, todoButton } = getTodoInputItems();

  if (todoInput.value.length >= 3) {
    todoButton.classList.remove("todo-button_disabled");
    todoHelper.classList.remove("todo-helper_visible");
  } else {
    todoButton.classList.add("todo-button_disabled");
    todoHelper.classList.add("todo-helper_visible");
  }
}

export function hideHelperText() {
  const { todoHelper } = getTodoInputItems();
  todoHelper.classList.remove("todo-helper_visible");
}

export function showHelperText() {
  const { todoHelper } = getTodoInputItems();
  todoHelper.classList.add("todo-helper_visible");
}

export function clearTodoInput() {
  const { todoInput, todoHelper, todoButton } = getTodoInputItems();

  todoInput.value = "";
  todoButton.classList.add("todo-button_disabled");
  todoHelper.classList.add("todo-helper_visible");
}
