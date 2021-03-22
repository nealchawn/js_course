// Event Listner
const clear_tasks_btn = document.querySelector('.clear-tasks');
const cardAction = document.querySelector('.card');
const heading = document.querySelector('h5');

// CLICK
//clear_tasks_btn.addEventListener('click', stopEvent);
// Doubleclick
//clear_tasks_btn.addEventListener('dblclick', runEvent);
// Doubleclick
//clear_tasks_btn.addEventListener('mousedown', runEvent);
cardAction.addEventListener('mousemove', runEvent);


function stopEvent(e){
  e.preventDefault();
}

function runEvent(e){
  e.preventDefault();

  console.log(`EVENT TYPE: ${e.type}`);

  heading.innerHTML = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

  let x, y, z;
  x = e.offsetX % 255;
  y = e.offsetY % 255;
  z = (e.offsetX*e.offsetY)% 255;
  document.body.style.backgroundColor = `rgb(${x},${y},${z})`;
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