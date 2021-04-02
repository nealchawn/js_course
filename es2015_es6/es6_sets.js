// SETS a list of unique values >> no duplics 

const set1 = new Set();

// add values
set1.add(1);
set1.add(1);
set1.add(2);
set1.add("a");
set1.add("a");
set1.add(true);
set1.add(true);
set1.add({name: 'John'});
set1.add({name: 'John'}); // reference value vs a primative


console.log(set1);

// const set2 = new Set("Hello People");
// console.log(set2);

// check for values
console.log(set1.has('a'));
console.log(set1.has(1+1));

// delete value
set1.delete(1);

console.log("Iterate")

for(let x of set1){
  console.log(x)
}