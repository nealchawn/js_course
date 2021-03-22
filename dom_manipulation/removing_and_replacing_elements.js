// Replace element

const new_heading = document.createElement('h2');

new_heading.id = 'task_title';
new_heading.appendChild(document.createTextNode("Task List"));

// get heding we want to replace
const old_heading = document.getElementById('task-title');

//document.replaceChild(new_heading, old_heading);

// parent cardAction
const card_action = old_heading.parentNode;

card_action.replaceChild(new_heading,old_heading);

// create new
// find old
// get parent of old
// from parent.replaceChild(new, old)

const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

lis[0].remove();
list.removeChild(lis[3]);


// Classes & Attr
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

val = link.className;
val = link.classList;
link.classList.add('test');
val = link.className;
link.classList.remove('test');
val = link.className;

// Attributes
val = link.getAttribute('href');
val = link.setAttribute('egg', '#potato');
val = link.getAttribute('egg');
val = link.hasAttribute('href');
val = link.hasAttribute('egg');


console.log(val);
