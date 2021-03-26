/*
Each object in js has a prototype. And a prototype is an object itself. All objects inherit their properties and methods from their prototype.

With object literals, then you're inheriting from a prototype called, Object.prototype

Objects created via a constructor then it inherits from `Object`.prototype >> Person.prototype;

Prototype chain and you can move up to the main Object.prototype
*/

// Person.prototype
function Person(firstName="", lastName="", dob){
  this.first_name = firstName;
  this.last_name = lastName;
  this.maiden_name = "";
  this.dob = new Date(dob);
  this.computeAge = function(){
    const diff = Date.now() - this.dob.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() -1970);
  }
}

/**
 * Because function is the same for every object we add to the proto-type.
 */

Person.prototype.getFullName = function(){ return this.first_name +" "+this.last_name ;};

Person.prototype.getsMarried = function(other_person = new Person()){
  this.last_name = other_person.last_name;
  this.maiden_name = this.last_name;
};

const john = new Person('John', 'Doe', '8-12-90');
const jane = new Person('Jane', 'Day', '2-12-78');
console.log(john);
console.log(jane.getFullName());
jane.getsMarried(john);
console.log(jane.getFullName());
console.log(john.hasOwnProperty('toString')); // false
console.log(john.hasOwnProperty('computeAge')); // true
console.log(john.hasOwnProperty('getFullName')); // false