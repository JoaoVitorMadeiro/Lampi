const toDoList = document.querySelector('.form_main');
const toDoInput = document.querySelector('#todo');
const toDoButton = document.querySelector('.todo-button');
let todos = [];

// Function to add Todo Item in the list 
function addTodos() {
    // Prevent form from submitting
    event.preventDefault();
    // Todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = toDoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // Add Todo to LocalStorage
    saveLocalTodos(toDoInput.value);
    // Check Mark Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    // Check Trash Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    // Append to List
    toDoList.appendChild(todoDiv);
    // Clear Todo Input Value
    toDoInput.value = '';
}

// Save Todos To Local Storage
function saveLocalTodos(todo) {
    // Check -- Hey Do I already have thing in there?
    let todos;
    if(localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Get Todos From Local Storage and Display Them On The Page
function getTodos() {
    // Check -- Hey Do I already have thing in there?
    let todos;
    if(localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function(todo) {
        // Todo DIV
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
        // Create LI
        const newTodo = document.createElement('li');
        newTodo.innerText = todo;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);
        // Check Mark Button
        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        completedButton.classList.add('complete-btn');
        todoDiv.appendChild(completedButton);
        // Check Trash Button
        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add('trash-btn');
        todoDiv.appendChild(trashButton);
        // Append to List
        toDoList.appendChild(todoDiv);
    });
}

// Delete Todo Item from the list
function deleteTodo(event) {
    const item = event.target;
    // Delete Todo
    if(item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        // Animation
        todo.classList.add('fall');
        removeLocalTodos(todo);
        todo.addEventListener('transitionend', function() {
            todo.remove();
        });
    }
    // Check Mark
    if(item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

// Add a New Todo Item Functionality
function addTodo(e) {
    e.preventDefault();
    if(toDoInput.value) {
        addTodos();
    }
}

// Save To Local Storage
function saveToLocalStorage(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Get From Local Storage
function getFromLocalStorage() {    
    const reference = localStorage.getItem('todos');
    if(reference) {
        todos = JSON.parse(reference);
        todos.forEach(todo => {
            addTodos(todo);
        });
    }
}

// Remove From Local Storage
function removeLocalTodos(todo){
    let todos;
    if(localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Event Listeners
submitBtn.addEventListener('click', addTodo);
closeAllBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});
clearCompletedBtn.addEventListener('click', clearCompleted);
showCompletedChk.addEventListener('change', showCompleted); 