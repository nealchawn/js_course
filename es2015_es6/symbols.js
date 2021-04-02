// not iterable and unique
const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myObj = {};

myObj[KEY1] = "test 1";
myObj[KEY2] = "test 2";

myObj.key3 = "test 3";
myObj.key4 = "test 4";

console.log(myObj[KEY1]);

for(let i in myObj){
  console.log(myObj[i]);
}

console.log(JSON.stringify({key: "value 1"}));
console.log(JSON.stringify({[Symbol('')]: "value 1"})); 