const TODOS = "todos";

export function removeTodoFromSStorage(todoItem) {
  let todos = getTodosFromSStorage();

  const todoText = Array.from(todoItem.childNodes).find((node) =>
    node.classList.contains("todo-text")
  );

  if (todoText) {
    const filtredTodos = todos.filter(
      (item) => item.value !== todoText.innerText
    );
    sessionStorage.setItem(TODOS, JSON.stringify(filtredTodos));
  }
}

export function saveTodoToSStorage(todoValue) {
  let todos = getTodosFromSStorage();

  todos.push({ id: todos.length + 1, value: todoValue, status: "uncompleted" });

  sessionStorage.setItem(TODOS, JSON.stringify(todos));
}

export function getTodosFromSStorage() {
  const storageTodos = sessionStorage.getItem(TODOS);
  return storageTodos ? JSON.parse(storageTodos) : [];
}

export function toggleTodoStatusSStorage(todoItem) {
  let todos = getTodosFromSStorage();

  const todoText = Array.from(todoItem.childNodes).find((node) =>
    node.classList.contains("todo-text")
  );

  if (todoText) {
    const index = todos.findIndex((todo) => {
      return todo.value === todoText.innerText;
    });
    if (todos[index].status === "uncompleted") {
      todos[index].status = "completed";
    } else {
      todos[index].status = "uncompleted";
    }
    sessionStorage.setItem(TODOS, JSON.stringify(todos));
  }
}
