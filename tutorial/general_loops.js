// for(let i = 0; i <  10; i++){
//    if(i === 2){ continue; }
//    if(i === 6){ break; }
//    console.log(i);

// }

const cars = ['ford', 'honda', 'chevy', 'toyota'];

// for(let i = 0; i< cars.length; i++){
//   console.log(cars[i]);
// }

// forEach
cars.forEach(function(car, index, array){
  console.log(`${index}: ${car}`);
  //console.log(arguments);
});


// const users = [
//   {id: 1, user: 'jack'},
//   {id: 2, user: 'jill'},
//   {id: 3, user: 'john'},
// ];

// const user_ids = users.map(function(user){return user.id});

// console.log(user_ids);

const user = {
  first_name: "Chawn",
  last_name: "Neal",
  age: 40
}

for(let x in user){
  console.log(`${x}: ${user[x]}`);
}