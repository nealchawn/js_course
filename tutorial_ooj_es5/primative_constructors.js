// These are not used often
// String
const name1 = "Jeff"; // String - Primative
const name2 = new String("Jeff"); // object

console.log(name1);
console.log(name2);
console.log(typeof(name1));
console.log(typeof(name2));
console.log(name2 == "Jeff");
console.log(name2 === "Jeff");

// Boolean
const bool1 = true; // String - Primative
const bool2 = new Boolean(true); // object

console.log(bool1);
console.log(bool2);
console.log(typeof(bool2));
console.log(typeof(bool2));
console.log(bool2 == "Jeff");
console.log(bool2 === "Jeff");

// number, ...

// Function
const getSum1 = function(x,y){
  return x+y;
}

const getSum2 = new Function('x','y','return x+y');

console.log(getSum1(1,1));
console.log(getSum2(1,2));

// Object
const john1 = {name: "John"};
const john2 = new Object({name: "John"});
console.log(john1, john2);

// Regular Expressions
const re1 = /\w+/;
const re2 = new RegExp('\\w+'); // caution must escape \\
console.log(re1, re2);

