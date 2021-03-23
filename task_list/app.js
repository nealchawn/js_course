// Define UI variables
const form = document.querySelector('form#task-form');
const taskList = document.querySelector('ul.collection');
const clearBtn = document.querySelector('a.clear-tasks');
const filter = document.querySelector("input#filter");
const taskInput = document.querySelector('input#task');

loadEventListeners();

// function to Load all event listners
function loadEventListeners(){
  // Add Task Event
  document.addEventListener('DOMContentLoaded', renderTasks);
  form.addEventListener('submit', addTask);
  taskList.addEventListener('click', removeTask);
  filter.addEventListener('input', searchTasks);
  clearBtn.addEventListener('click', removeAllTasks);
}

function removeAllTasks(e){
  e.preventDefault();

  //const node_text = e.target.parentElement.parentElement.innerText;

  // remove li
  if(confirm("Are you sure?")){
    //e.target.parentElement.parentElement.remove();

    // taskList.innerHTML = '';
    // https://jsperf.com/innerhtml-vs-removechild

    // remove all li from ul
    while(taskList.firstChild){
      taskList.removeChild(taskList.firstChild);
    }
    /**
    Array.from(taskList.children).forEach( function(li){
      li.remove();
    });
     */

    // clear localStorage
    //localStorage.setItem('tasks',null);
    localStorage.removeItem('tasks');
    // localStorage.clear();

  }
}

function searchTasks(e){
  console.log(e.target.value);
  searchText = e.target.value.toLowerCase();

  if(!(localStorage.getItem('tasks') == null || localStorage.getItem('tasks') == 'null')){
    // first clear, search, then apply filter, return
    // Search tasks
    tasksString = localStorage.getItem('tasks');
    
    tasks = JSON.parse(tasksString);
    filteredTasks = [];

    document.querySelectorAll('.collection-item').forEach(function(li){
      const item = li.firstChild.textContent;
      if(item.toLowerCase().indexOf(searchText) != -1){
        li.style.display = 'block';
      }else{
        li.style.display = 'none';
      }
    });

    /*
    // Clear Tasks
    taskList.innerHTML = ""; 

    // Filter Tasks
    tasks.forEach(function(task){
      // apply filter and append to filteredTasks
      if (task.toLowerCase().includes(searchText.toLowerCase())){
        filteredTasks.push(task);
      }
    });

    // render
    filteredTasks.forEach(function(li_text){
      li = document.createElement('li');
      li.className = 'collection-item';
      li.innerHTML = `${li_text}<a href="#" class="delete-item secondary-content"><i class="fa fa-remove"></i></a>`;

      taskList.appendChild(li);
    });
    */

  }

  
}


/* remove task from list & localStorage
** Because the list items are dynamically created
** we need to use Event Delegation
*/ 
function removeTask(e){
  
  e.preventDefault();
  if(e.target.className.includes("fa-remove")){
    const node_text = e.target.parentElement.parentElement.innerText;

    // remove li
    if(confirm("Are you sure?")){
      e.target.parentElement.parentElement.remove();

      // remove from localStorage
      tasks = JSON.parse(localStorage.getItem('tasks'));
      index = tasks.indexOf(node_text);
      tasks.splice(index, 1);

      localStorage.setItem('tasks',JSON.stringify(tasks));
    }

  }
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
    a_tag.innerHTML = "<i class='fa fa-remove'></i>";
    li.appendChild(a_tag);
    taskList.appendChild(li);

    if(localStorage.getItem('tasks') == null || localStorage.getItem('tasks') == 'null'){
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
  if(localStorage.getItem('tasks') == null || localStorage.getItem('tasks') == 'null'){
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

// on create render new li