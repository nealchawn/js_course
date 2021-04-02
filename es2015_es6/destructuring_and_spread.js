// Destructuring(Spread Operator) Assignment
// array destructuring and object destructuring
let a, b;
[a, b] = [100, 200];
console.log(a);

/**
 * 
 * badJSON = {
    array: [100, 200, 300]
  };
  goodJSON = {
    oxford_array: [100, 200, and 300]
  };
 * 
 * Rest/Spread Pattern:
 *  assign a & b, then anything that follows to rest
 * a == 100; b == 200; rest == [300, 400, 500];
 */

[a,b, ...rest] = [100,200, 300, 400, 500];

console.log(b);console.log(rest);

({a, b, ...rest} = {a: 100, b: 200, c: 300, d: 400});
console.log(a);
console.log(b);
console.log(rest);

// Array Destructuring
// function getPeople(){
//   return ['john', 'beth', 'gary'];
// }

// const [...people] = getPeople();
// const [person1, person2, person3] = people;
// console.log(person2);


// Object destructuring ex: react exporting an object
const person = {
  name: "billy bob",
  age: 22,
  city: "monticello",
  gender: 'male',
  sayHello: () => { return("Hi, Dudes!")}
};

// old es5 way
// const pname = person.name; // ... gender;

// es6 way >> react components
({name, gender, ...props} = person);
console.log(`Name: ${name}, gender: ${gender}`);
console.log(props)
console.log(props.sayHello());

