let li_items;

li_items = document.getElementsByClassName('collection-item');
li_items_arr = Array.from(li_items);

console.log(li_items[0]);

li_items[0].style.color = 'red';
li_items_arr[3].textContent = 'Hello There';
//document.querySelectorAll('')

const items = document.querySelector('ul').getElementsByClassName('collection-item');

let lis = document.getElementsByTagName('li');


console.log("Print Array")
li_items_arr.forEach((li, index)=>{
  li.textContent = `${index}: Set by Array`;
});

// console.log(lis);
// console.log(items);
// console.log(li_items_arr);

const lis_items = document.querySelectorAll('ul.collection li.collection-item');
console.log(lis_items);

console.log("Node List Array")
lis_items.forEach((li, index)=>{
  li.style.color = `brown`;
});

let list_again = document.querySelectorAll('ul li.collection-item:nth-child(odd)');

list_again.forEach((li, index)=>{
  li.style.background = '#d3d3d3';
});