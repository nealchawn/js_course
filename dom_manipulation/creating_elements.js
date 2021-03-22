
const li = document.createElement('li');
li.className = 'collection-item';
li.id = "new-item";

li.setAttribute('title', 'New Item');




li.appendChild(document.createTextNode("List Item"));

const a_tag = document.createElement('a');
a_tag.href = "#";
a_tag.className="delete-item secondary-content";
// a_tag.textContent = "a_tag"; just testing append
a_tag.innerHTML = "<i class=\"fa fa-remove\"></i>";
//const i_tag = document.createElement('i');
//i_tag.className= "fa fa-remove";


// append children
//a_tag.appendChild(i_tag);
li.appendChild(a_tag);

document.querySelector('ul.collection').appendChild(li);

console.log(li);