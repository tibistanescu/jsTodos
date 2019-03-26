let todoList = {
    // it should have a place to store todos
    todos: [], 
    // it should have a way to display todos
    displayTodos: function(){ 
        console.log('My todos:', this.todos);
    },   
    // it should have a way to add new todos
    addTodo: function(todo){
        this.todos.push(todo);
        this.displayTodos();
    },
    // it should have a way to change a todo
    changeTodo: function(position, newValue){
        this.todos[position] = newValue;
        this.displayTodos();
    },
    // it should have a way to delete a todo
    deleteTodo: function(position){
        this.todos.splice(position, 1);
        this.displayTodos();
    }
}

console.log(todoList);
todoList.addTodo('test');
todoList.addTodo('test2');
todoList.changeTodo(0, 'test1');
todoList.deleteTodo(1);
