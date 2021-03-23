// Event bubbling
/**
 * By Clicking the button, the dom parents are also called.
 */
document.querySelector('input[type="submit"]').addEventListener('click',(e)=>{
  e.preventDefault();
  console.log(e.target);
  console.log("input_tag");
});

// document.querySelector('.card-content').addEventListener('click',(e)=>{
//   e.preventDefault();
//   console.log(e.target);
//   console.log("card-content");
// });

// document.querySelector('.container').addEventListener('click',(e)=>{
//   e.preventDefault();
//   console.log(e.target);
//   console.log("card-content");
// });

//event DELEGATION

// without delegation FAIL
const delItem = document.querySelector('.delete-item');

//delItem.addEventListener('click', deleteItem);

function deleteItem(){
  console.log("delete item");
}

// with delegation
document.querySelector('ul')

document.body.addEventListener('click', deleteItemDelegate);

// body delegate to child
// function deleteItemDelegate(e){
//   if(e.target.className === 'fa fa-remove'){
//     console.log('delete Delegate');
//   }
// }

// function deleteItemDelegate(e){
//   if(e.target.parentElement.className.includes("delete-item")){
//     console.log('delete Delegate');
//   }
// }


document.querySelectorAll('li').forEach(function(element, index){
  element.childNodes[0].nodeValue += `${index}`; 
});

function deleteItemDelegate(e){
  if(e.target.parentElement.classList.contains('delete-item')){
    console.log('delete Delegate');
    e.target.parentElement.parentElement.remove();
  }
}

// insert a new item to dom list 