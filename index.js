const todoList = {
    // it should have a place to store todos
    todos: [], 
    addTodo: function(todoDescription) {
        this.todos.push({
            todoDescription: todoDescription,
            completed: false,
        });
    },
    // it should have a way to change a todo
    changeTodo: function(position, todoDescription) {
        this.todos[position].todoDescription = todoDescription;
    },
    // it should have a way to delete a todo
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
    },
    toggleCompleted: function(position) {
        let todo = this.todos[position];
        todo.completed = !todo.completed;
    },
    toggleCompletedAll: function() {
        let completedTodos = 0;
        let totalTodos = this.todos.length;
        
        // get number of completed todos
        this.todos.forEach(function(todo){
            if(todo.completed === true){
                completedTodos++;
            }
        });

        this.todos.forEach(function(todo){
            // case 1: if all todos are completed, make all todos not completed
            if(totalTodos === completedTodos){
                todo.completed = false;
            // case 2: otherwise, make all todos completed
            } else {
                todo.completed = true;
            }
        });
    },
    getTodosLength: function() {
        return this.todos.length;
    }
}

const handlers = {
    addTodo: function() {
        let addTodoInput = document.getElementById('addTodoInput');
        todoList.addTodo(addTodoInput.value);
        addTodoInput.value = '';
        view.displayTodos();
    },
    changeTodo: function() {
        let changeTodoNumberInput = document.getElementById('changeTodoNumberInput');
        let changeTodoTextInput = document.getElementById('changeTodoTextInput');
        todoList.changeTodo(changeTodoNumberInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoNumberInput.value = '';
        changeTodoTextInput.value = '';
        view.displayTodos();
    },
    deleteTodo: function(position) {
        todoList.deleteTodo(position);
        view.displayTodos();
    },
    toggleCompleted: function() {
        let toggleCompletedInput = document.getElementById('toggleCompletedInput');
        todoList.toggleCompleted(toggleCompletedInput.valueAsNumber);
        toggleCompletedInput.value = '';
        view.displayTodos();
    },
    toggleAll: function() {
        todoList.toggleCompletedAll();
        view.displayTodos();
    }
}

const view = {
    displayTodos: function() {
        let todoListContainer = document.querySelector('#todoListContainer');
        todoListContainer.innerHTML = '';
        this.createListItems();
    },
    createListItems: function() {
        todoList.todos.forEach(function(todo, position){
            let listItem = document.createElement('li');
            listItem.textContent = todo.todoDescription;
            listItem.id = position;
            listItem.appendChild(this.createCheckbox(position));
            listItem.appendChild(this.createDeleteButton());
            todoListContainer.appendChild(listItem);
        }, this);
    },
    createCheckbox: function(i) {
        let checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
                        
        if (todoList.todos[i].completed === true) {
            checkbox.setAttribute('checked', 'checked');
        } else {
            checkbox.removeAttribute('checked');
        }

        return checkbox;
    },
    createDeleteButton: function() {
        let deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener('click', function(event) {
            handlers.deleteTodo(event.target.parentNode.id);
        })

        return deleteButton;
    },
}
