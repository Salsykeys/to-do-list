var form = document.getElementById("todo-form");
var input = document.getElementById("todo-input");
var list = document.getElementById("todo-list");
var todos = [];
form.addEventListener("submit", function () {
    e.preventDefault();
    var newTodo = {
        text: input.value,
        completed: false,
    };
    todos.push(newTodo);
    input.value = "";
    renderTodos();
});
function renderTodos() {
    list.innerHTML = ""; 
    todos.forEach(function (todo, index) {
        var li = document.createElement("li");
        li.textContent = todo.text;
        li.style.textDecoration = todo.completed ? "line-through" : "none";
        li.addEventListener("click", function () {
            todos[index].completed = !todos[index].completed;
            renderTodos();
        });
        list.appendChild(li);
    });
}
