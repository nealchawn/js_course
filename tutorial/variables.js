// var, let and const

// var name = 'Chawn Neal';
// console.log(name);

// name = "John Doe";
// console.log(name);

// // init var
// var greeting;
// console.log(greeting);

// Camel case


let name;
name = "Chawn Neal";
console.log(name);
name = "Bob lag";
console.log(typeof(name));

const sym = Symbol();
console.log(sym);



const person = {
  name: "Chawn",
  title: "Student"
};

console.log(person);
person.title = "Master";
console.log(person);

const arr = [1,2,3];
arr.push(4);
console.log(typeof(arr));

// Use Const it's robust
// typeof null == object err

// SCOPE FOR let & var

var a = 1;
let b = 2;
const c = 3;
console.log("--------------------");
console.log("Global Scope: ",a,b,c);
console.log("--------------------");
(function test(){
  var a =4;
  let b = 5;
  const c = 6;

  console.log("Function Scope: ",a,b,c);
})();
console.log("Global Scope: ",a,b,c);
console.log("--------------------");

if(1){
  var a =4; // var does not respect block scope
  let b = 5;
  const c = 6;

  console.log("Block Scope: ",a,b,c);
}

console.log("Global Scope: ",a,b,c);