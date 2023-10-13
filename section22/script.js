/* script.js */
function addTodo() {
    const todoInput = document.getElementById('todoInput');
    const todoText = todoInput.value.trim();
  
    if (todoText === '') {
      alert('Please enter a valid todo.');
      return;
    }
  
    const todoList = document.getElementById('todoList');
    const listItem = document.createElement('li');
    listItem.textContent = todoText;
    todoList.appendChild(listItem);
  
    // Save the todo to local storage
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.push(todoText);
    localStorage.setItem('todos', JSON.stringify(todos));
  
    todoInput.value = ''; // Clear the input field
  }
  
  function clearLocalStorage() {
    localStorage.removeItem('todos');
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = ''; // Clear the todo list
  }
  
  // Load existing todos from local storage
  window.onload = function() {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    const todoList = document.getElementById('todoList');
  
    todos.forEach(todo => {
      const listItem = document.createElement('li');
      listItem.textContent = todo;
      todoList.appendChild(listItem);
    });
  }
  