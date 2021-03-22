console.log(document.getElementById('task-title'));

console.log(document.getElementById('task-title').style.background = "#333");

const taskTitle = document.getElementById('task-title');

// Styling
document.getElementById('task-title').style.color = "#fff";
document.getElementById('task-title').style.padding = "5px";

// Change element
document.getElementById('task-title').textContent = "Task List";
document.getElementById('task-title').innerText = "Task List";

taskTitle.innerHTML = "<span style='color: red'>Task List</span>";


// querySelector
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';
// css pseudo classes
document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'goldenrod';
document.querySelector('li:nth-child(4)').textContent = 'Hello World';
document.querySelector('li:nth-child(even)').style.background = '#ccc'; // only first
