// bring in commonjs
const person1 = require('./mymodule1');
const fullName = "Chawn Neal";
console.log(`${fullName}`);
console.log(person1);


// es2015
// import { person, sayHello } from './mymodule2';
// import * as mod2 from './mymodule2';
import greeting from './mymodule2';
console.log(greeting);
// console.log(mod2.person);
// mod2.sayHello();

const greeting2 = 'Hello World';
console.log(greeting2);

const getData = async (url) => {
  const response = await fetch(url);
  const result = await response.json();
  console.log(result);
};

getData('https://jsonplaceholder.typicode.com/posts');
