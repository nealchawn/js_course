// Event Listner
const clear_tasks_btn = document.querySelector('.clear-tasks');


clear_tasks_btn.addEventListener('mouseover', onClick);

function onClick(e){
  e.preventDefault();
  //console.log(arguments);
  let val;


  val = e;

  // Event target
  val = e.target.className;

  // Event type
  val = e.type;

  // Timestamp
  val = e.timeStamp;

  // coords of event
  val = e.clientX;
  val = e.clientY;

  val = e.offsetY;
  val = e.offsetX;

  console.log(val);
}

/**
function man(){
  console.log(arguments);
}

let manny = ()=>{
  console.log(arguments);
}

man();
manny();
**/

// Event Object