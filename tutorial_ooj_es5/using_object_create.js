// ES6 basically runs on this model as a wrapper 


const personPrototypes = {
  greeting: function(){
    return(`Hi from ${this.first_name} ${this.last_name}`);
  },

  getsMarried: function(other_last_name){
    this.last_name = other_last_name;
  }

}

const mary = Object.create(personPrototypes);

mary.first_name = "Mary";
mary.last_name = "Jane";
mary.age = 30;

console.log(mary);
console.log(mary.greeting());
mary.getsMarried('Osborn');
console.log(mary.greeting());

// Alternative syntax

const jane = Object.create(personPrototypes, {
    first_name: {value: "Jane"}, last_name: {value: "Doe"},
    age: {value: 34}
});

console.log(jane);
console.log(jane.greeting());