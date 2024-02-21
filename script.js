SCT212-0153/2022
NJENGA BEATRICE WAMBUI
ASSIGNMENT 1
script.js



document.addEventListener('DOMContentLoaded', function() {
  // Query for elements and store them in variables
  const submit = document.getElementById('submitButton');
  const newTask = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  // Listen for input to be typed into the input field
  newTask.addEventListener('input', function() {
    // Enable/disable the submit button based on input field value
    if (newTask.value.trim() !== '') {
      submit.disabled = false;
    } else {
      submit.disabled = true;
    }
  });

  // Listen for submission of form
  document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Find the task the user just submitted
    const task = newTask.value.trim();

    // Create a list item for the new task and add the task to it
    const listItem = document.createElement('li');
    listItem.textContent = task;

    // Add new element to our unordered list
    taskList.appendChild(listItem);

    // Clear input field
    newTask.value = '';

    // Disable the submit button again
    submit.disabled = true;
  });

  // Prevent default form submission behavior
  document.getElementById('taskForm').addEventListener('submit', function() {
    return false;
  });
});
