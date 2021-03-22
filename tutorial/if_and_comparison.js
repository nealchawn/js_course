// ==, !=, ===, !==, >,<
// if, else, else if
// switch
// logical operators

console.log('100' == 100); // true
console.log('100' === 100); // false

// dont use if(id)
if( typeof(id) !== 'undefined'){
  console.log(`The ID is ${id}`)
}else{
  console.log("No ID");
}

// Ternary Operator

console.log( 5 > 6 ? "yes" : "no");


switch(new Date().getDay()){
  case 0:
    console.log("Sunday");
    break;
  case 'blue':
    break;
  default:
    break;
}