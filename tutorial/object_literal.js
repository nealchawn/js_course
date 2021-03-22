const person = {
  first_name: "Chawn",
  last_name: "Neal",
  age: 30,
  email: 'cman@aol.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'Port',
    state: 'NY'
  },
  getBirthYear: function(){
    return 2021 - this.age;
  }
};

let val;

val = person;

val = person.first_name; // recommended
val = person['first_name'];
val = person.hobbies[1];
val = person.address.city;
val = person.address['city'];
val = person['address']['city'];
val = person.getBirthYear();


console.log(val);

const people = [
  {name: 'john', age: 30},
  {name: 'jack', age: 26},
  {name: 'nancy', age: 40}
]

for(let i = 0; i < people.length; i++){
  console.log(people[i].name);
}