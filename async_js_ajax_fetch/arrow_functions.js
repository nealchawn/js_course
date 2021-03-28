// const sayHello = function(){
//   console.log("Hello");
// }

// const sayHello = () => {
//   console.log("Hello");
// }

// one line function does not need braces
// const sayHello = () => (console.log("Hello"));

// one line return
// const sayHello = () => "Hello";

// issue return object literal
// const sayHello = () => ({msg: "Hello"});

//const sayHello = name => ({msg: `Hello ${name}`});

const sayHello = (first_name, last_name) => ({msg: `Hello ${first_name} ${last_name}`});

const users = ['nathan', "john", "chawn"];

const user_lengths = users.map(user => user.length);

console.log(user_lengths);
//console.log( sayHello("Chawn","Neal"));