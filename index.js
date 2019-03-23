// it should have a place to store todos
let todos = [];

// it should have a way to display todos
function displayTodos() {
    console.log(todos);
}

// it should have a way to add new todos
function addTodo() {
    todos.push(todo);
    displayTodos();    
}

// it should have a way to change a todo
function changeTodo(position, newValue) {
    todo[position] = newValue;
    displayTodos();
}

// it should have a way to delete a todo
function deleteTodo(position) {
    todos.splice(position, 1);
}

