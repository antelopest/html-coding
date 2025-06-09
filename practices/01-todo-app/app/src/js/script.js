'use strict';

/* Task Status */
const Status = Object.freeze({
  NotCompleted: 'NotCompleted',
  Completed: 'Completed'
});

const Task = Object.freeze({
  status: Status.NotCompleted,
  text: ''
});

/* DOM Elements */
const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

/* EventListener - Form - Submit */
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const taskText = input.value.trim();

  if (taskText !== '') {
    addTask(taskText);
    input.value = '';
    input.focus();
  }
});

// Function addTask
function addTask(text) {
  const li = document.createElement('li');

  const span = document.createElement('span');
  span.textContent = text;
  span.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '×';
  deleteBtn.addEventListener('click', () => {
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(deleteBtn);
  list.appendChild(li);
}
