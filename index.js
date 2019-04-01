let todoList = {
    // it should have a place to store todos
    todos: [], 
    addTodo: function(todoDescription){
        this.todos.push({
            todoDescription: todoDescription,
            completed: false,
        });
    },
    // it should have a way to change a todo
    changeTodo: function(position, todoDescription){
        this.todos[position].todoDescription = todoDescription;
    },
    // it should have a way to delete a todo
    deleteTodo: function(position){
        this.todos.splice(position, 1);
    },
    toggleCompleted: function(position){
        let todo = this.todos[position];
        todo.completed = !todo.completed;
    },
    toggleCompletedAll: function(){
        let completedTodos = 0;
        let totalTodos = this.todos.length;
        
        // get number of completed todos
        for(let i = 0; i < totalTodos; i++){
            if(this.todos[i].completed === true){
                completedTodos++;
            }
        }

        // case 1: if all todos are completed, make all todos not completed
        if(totalTodos === completedTodos) {
            for(let i = 0; i < totalTodos; i++){
                this.todos[i].completed = false;
            }
        // case 2: otherwise, make all todos completed
        } else {
            for(let i = 0; i < totalTodos; i++){
                this.todos[i].completed = true;
            }    
        }
    },
    getTodosLength: function(){
        return this.todos.length;
    }
}

let handlers = {
    addTodo: function(){
        let addTodoInput = document.getElementById('addTodoInput');
        todoList.addTodo(addTodoInput.value);
        addTodoInput.value = '';
        view.displayTodos();
    },
    changeTodo: function(){
        let changeTodoNumberInput = document.getElementById('changeTodoNumberInput');
        let changeTodoTextInput = document.getElementById('changeTodoTextInput');
        todoList.changeTodo(changeTodoNumberInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoNumberInput.value = '';
        changeTodoTextInput.value = '';
        view.displayTodos();
    },
    deleteTodo: function(){
        let deleteTodoInput = document.getElementById('deleteTodoInput');
        todoList.deleteTodo(deleteTodoInput.valueAsNumber);
        deleteTodoInput.value = '';
        view.displayTodos();
    },
    toggleCompleted: function(){
        let toggleCompletedInput = document.getElementById('toggleCompletedInput');
        todoList.toggleCompleted(toggleCompletedInput.valueAsNumber);
        toggleCompletedInput.value = '';
        view.displayTodos();
    },
    toggleAll: function(){
        todoList.toggleCompletedAll();
        view.displayTodos();
    }
}

let view = {
    displayTodos: function(){
        let todoListContainer = document.getElementById('todoListContainer');
        todoListContainer.innerHTML = '';

        for(let i=0; i<todoList.getTodosLength(); i++){
            let listItem = document.createElement('li');
            listItem.textContent = todoList.todos[i].todoDescription;
            let checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
                        
            if(todoList.todos[i].completed === true){
                checkbox.setAttribute('checked', 'checked');
            } else {
                checkbox.removeAttribute('checked');
            }

            listItem.appendChild(checkbox);
            todoListContainer.appendChild(listItem);
        }
    }
}