// Basic structure
// iffe immediately invoked function expression

// (function(){
//   // Declare private vars and functions

//   return{
//     // declare public var and functions
//   }
// })();

const UICtrl = (function(){

  let text = "Hello World";

  function setHeader(){
    document.querySelector('h1').innerText = text;
  }

  return {
    callSetHeader: function(){setHeader(); console.log(text);}
  }
})();

UICtrl.callSetHeader();


// REVEALING MODULE PATTERN

/**
 * instead of returning our own public functions like above.
 * You basically map via object literal the private functions you want public.
 * 
 */

// some use _vars for here
const ItemCtrl = (function(){
  let data = [];

  function add(item){
    data.push(item);
    console.log("Item added");
  }

  function get(id){
    return data.find(item => {
      return item.id === id;
    });
  }

  return {
    add: add,
    get: get
  }

})()

ItemCtrl.add({name: 'john', id: 1});
ItemCtrl.add({name: 'esmerelda', id: 2});

console.log(ItemCtrl.get(2));



// Some review
function Itr(arr){
  let index = 0;

  return{
    next: function(){
      return index < arr.length ? {value: arr[index++], done: false} : {done: true};
    }
  }
}
names = ["john","dick", "harris", "billy"];
person = {name: 'CMan', age: 23, speed: function(){ return 5;}};

({...props} = person);

console.log(props);

[...arr1] = names;
console.log(arr1);
namesItr = Itr(arr1);
console.log(namesItr.next());
console.log(namesItr.next());
console.log(namesItr.next());