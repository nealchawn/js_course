// Function Declaration
// if(typeof(first_name === 'undefined')){ first_name = 'John'} // es5
// function greet(first_name = 'John'){} // es6

// Function expression
// there are benifits to both
const square = function(x){ return x*x };


// Immediately invokable function expressions - IIFEs // Closure
// Modular pattern uses IIFEs

//() // expression 
(function(){
    console.log("IIFE");
})();

// Property Methods

const todo = {
  add: function(){
    console.log("adding todo");
  },
  edit: function(id){
    console.log(`editing todo: ${id}`);
  }
};

todo.delete = function(){
  console.log("deleteing todo..");
};

todo.add();
todo.edit(1);
todo.delete();

console.log(square(8));