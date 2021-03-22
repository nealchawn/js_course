const form = document.querySelector('form');
const task_input = document.getElementById('task');
const heading = document.querySelector('h5');

(function clearValues(){
  task_input.value = "";
})();

form.addEventListener('submit', stopEvent);

task_input.addEventListener('input', runEvent)
// keyup
// keydown
// focus - click into focus
// blur - click out of focus
// cut
// copy
// paste
// input
// keypress
// change

function runEvent(e){
  //e.preventDefault();
  //let inputText = document.getElementById('task');

  console.log(e.target.value);

  console.log("EVENT TYPE: "+e.type);
}

function stopEvent(e){
  e.preventDefault();
}