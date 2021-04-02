/**
 * map vs object literal
 * anything can be used as a key unlike object literals
 * 
 */

const map1 = new Map();

// set keys
const key1 = 'some string',
      key2 = {},
      key3 = function(){};
      
// set map values by keys
map1.set(key1, 'Value of key1');
map1.set(key2, 'Value of key2');
map1.set(key3, 'Value of key3');
map1.set(function(){}, 'Value of key4');

console.log(map1.get(key1));
console.log(map1.get('some string'));
console.log(map1.get({})); // doesnt work
console.log(map1.get(function(){})); // doesnt work

console.log(map1.size);

// iterating through maps
// loop using for...of get keys and values

for(let [key, value] of map1){
  console.log(`${key} = ${value}`);
}

// keys only
for(let key of map1.keys()){
  console.log(`key = ${key}`);
}

// values only
for(let key of map1.values()){
  console.log(`key = ${key}`);
}

map1.forEach(function(k,v) {
  console.log(`for each (${k},${v})`);
});

const keyValArr = Array.from(map1);
console.log(keyValArr);
