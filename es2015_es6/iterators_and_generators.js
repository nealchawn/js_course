function nameIterator(arr){
  let nextIndex =0;
  return{
    next: function(){
      return nextIndex < arr.length ? {value: arr[nextIndex++], done: false} : {done: true} 
    }
  }
}

function iterator(arr){
  let nextIndex =0;
  return{
    next: function(){
      return nextIndex < arr.length ? {value: arr[nextIndex++], index: (nextIndex -1)} : false 
    }
  }
}

let animals = ['lion', 'tiger','zebra', 'deer', 'deerbra'];
const animalsIterator = iterator(animals);

while(i = animalsIterator.next()){
  console.log(i.value);
}
console.log("----- ALT --------")
let names = nameIterator(animals);
x = names.next();
while(!x.done){
  console.log(x.value)
  x = names.next();
}

// Generator
console.log("----- Generators ----");
function* sayNames(){
  yield 'Jack';
  yield 'Jill';
  yield 'John';
}

x = sayNames();

console.log(x.next());
console.log(x.next());

// id creator
function* idGenny(){
  let i=0;
  while(true){
    yield i++;
  }
}

let ids = idGenny();

console.log(ids.next());
console.log(ids.next());
console.log(ids.next());

