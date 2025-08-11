const form = document.getElementById("todo-form") as HTMLFormElement;
const input = document.getElementById("todo-input") as HTMLInputElement;
const list = document.getElementById("todo-list") as HTMLUListElement;


type Todo = {
  text: string;
  completed: boolean;
};

const todos: Todo[] = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const newTodo: Todo = {
    text: input.value,
    completed: false,
  };

  todos.push(newTodo);
  input.value = "";
  renderTodos();
});

function renderTodos() {
  list.innerHTML = ""; 
  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.textContent = todo.text;
    li.style.textDecoration = todo.completed ? "line-through" : "none";

    li.addEventListener("click", () => {
      todos[index].completed = !todos[index].completed;
      renderTodos();
    });

    list.appendChild(li);
  });
}
