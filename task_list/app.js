// Define UI variables
const form = document.querySelector('form#task-form');
const taskList = document.querySelector('ul.collection');
const clearBtn = document.querySelector('input.clear-tasks');
const filter = document.querySelector("input#filter");
const taskInput = document.querySelector('input#task');

loadEventListeners();

// function to Load all event listners
function loadEventListeners(){
  // Add Task Event
  form.addEventListener('submit', addTask);
  taskList.addEventListener('click', deleteTask);
}

/* delete task from list & localStorage
** Because the list items are dynamically created
** we need to use Event Delegation
*/ 
function deleteTask(e){
  console.log(e.target);
}

// add task to list & localStorage
function addTask(e){
  e.preventDefault();
  let tasks;
  let taskText = taskInput.value;
  if(taskText === ''){
    alert("Add a task");
  }else{

    // create li element
    const li = document.createElement('li');
    // Add class
    li.className = "collection-item";

    // Text Node
    li_text = document.createTextNode(taskText);
    li.appendChild(li_text);
    const a_tag = document.createElement('a');
    a_tag.className = 'delete-item secondary-content';// secondary-content positioning
    a_tag.innerHTML = "<i clas='fa fa-remove'></i>";
    li.appendChild(a_tag);
    taskList.appendChild(li);

    if(localStorage.getItem('tasks') === null){
      tasks = [];
    }else{
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(taskText);

    localStorage.setItem('tasks', JSON.stringify(tasks));

    taskInput.value = "";
  }
}

// on load render li ** MINE **
function renderTasks(){
  let tasks
  if(localStorage.getItem('tasks') == null){
    tasks = []
  }else{
    tasks_string = localStorage.getItem('tasks');
    tasks = JSON.parse(tasks_string);
    tasks.forEach(function(li_text, index){
      li = document.createElement('li');
      li.className = 'collection-item';
      li.innerHTML = `${li_text}<a href="#" class="delete-item secondary-content"><i class="fa fa-remove"></i></a>`;

      document.querySelector('ul').appendChild(li);
    });
  }

}
renderTasks();

// on create render new li