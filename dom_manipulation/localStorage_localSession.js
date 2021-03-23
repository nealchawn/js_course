// set Local Storage item
// persists on window close
localStorage.setItem('name','Chawn');
localStorage.setItem('age','30');
localStorage.setItem('hobby','Study');

// set Local Storage item
// did not persist on window close
//sessionStorage.setItem('name','Neal');

// remove from storage
localStorage.removeItem('name');

console.log(localStorage.getItem('age'));
console.log(localStorage.getItem('hobby'));

//localStorage.clear();

// get from storage
localStorage.setItem('name','Chawn Neal');
const name = localStorage.getItem('name');
console.log(name);

// make form add item to Tasks
form = document.querySelector('form#task-form');
form.addEventListener('submit', addTask);
tasks = document.querySelector('ul');

function addTask(e){
  e.preventDefault();
  inputTask = form.querySelector('input#task');
  taskText = inputTask.value;

  let tasks;
  if(localStorage.getItem('tasks') == null){
    tasks = []
  }else{
    tasks_string = localStorage.getItem('tasks');
    tasks = JSON.parse(tasks_string);
  }

  // render new li, olds are already rendered
  tasks.push(taskText);



  localStorage.setItem('tasks',JSON.stringify(tasks));
  console.log("Tasks: ");
  console.log(JSON.stringify(tasks));
  console.log(JSON.parse(JSON.stringify(tasks)));
  //renderTasks();

  li = document.createElement('li');
  li.className = 'collection-item';
  li.innerHTML = `${taskText}<a href="#" class="delete-item secondary-content"><i class="fa fa-remove"></i></a>`;
  document.querySelector('ul').appendChild(li);
}

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
      //debugger;
      console.log(li)

      document.querySelector('ul').appendChild(li);
    });
  }

}


renderTasks();