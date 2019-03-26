let todoList = {
    // it should have a place to store todos
    todos: [], 
    // it should have a way to display todos
    displayTodos: function(){ 
        console.log('My todos:', this.todos);
    },   
    // it should have a way to add new todos
    addTodo: function(todoDescription){
        this.todos.push({
            todoDescription: todoDescription,
            completed: false,
        });
        this.displayTodos();
    },
    // it should have a way to change a todo
    changeTodo: function(position, todoDescription){
        this.todos[position].todoDescription = todoDescription;
        this.displayTodos();
    },
    toggleCompleted: function(position){
        let todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    },
    // it should have a way to delete a todo
    deleteTodo: function(position){
        this.todos.splice(position, 1);
        this.displayTodos();
    }
}