// function myFunc(){
//   return 'Hello';
// }

// function myFunc(){
//   return new Promise( (resolve, reject)=> resolve('Hello'));
// }

// async returns a promise
// async function myFunc(){
//   return 'Hello';
// }


// myFunc()
//   .then(data=>console.log(data));


// async function myFunc(){
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Hello'),5000);
//   });

//   let err = true;

//   if(!err){
//     const res = await promise; // wait for promise to be resolved
//     return promise;
//   }else{
//     await Promise.reject(new Error('Something went wrong'));
//   }
// }

// myFunc()
//   .then(res => console.log(res))
//   .catch(err => console.log(err))


async function getUsers(){

  //await response on the fetch call
  const response = await fetch("http://jsonplaceholder.typicode.com/users");

  // only proceed onces its resolved
  const data = response.json();

  // only proceed once the second promise is resolved
  return data;
}

getUsers()
  .then(users => console.log(users))