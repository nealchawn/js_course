const numbers = [43,56,33,23,44,36,5];
const numbers2 = new Array(43,56,33,23,44,36,5);
const fruit = ['Apple', 'Orange', 'Banana', 'Pear'];
const mixed = [22,'fruit', true, undefined, null, {a:1, b:2}];

let val;

// Get array length
val = numbers.length;

// check if is array
val = Array.isArray(numbers);

// get single value
val = numbers[3];
// set value
numbers[3] = 100;
// find index of value >> indexof
val = numbers.indexOf(36); // 5
// append
numbers.push(250); // push on end
numbers.unshift(120); // push to front
numbers.pop(); // take off back
numbers.shift(); // take off front
// Splice
numbers.splice(1,1) // we cut out 56
//Reverse
numbers.reverse();

// Concatenate array
val = numbers.concat(numbers2);

val = fruit.sort()

// use compare function
val = numbers.sort((x,y) => (x-y));

val = numbers.sort((x,y) => (x-y));

// Find
function under50(num){
  return num < 50;
}

val = numbers.find(under50);


console.log(numbers);
console.log(val);