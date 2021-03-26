function Person(fname="", lname= ""){
  this.first_name = fname;
  this.last_name = lname;
  this.full_name = function(){
    return(`${this.first_name} ${this.last_name}`);
  }
}

Person.prototype.greeting = function(){
  return(`Hello I'm ${this.first_name} ${this.last_name}!`);
}

const person1 = new Person("Chawn", "Neal");
console.log(person1.greeting());

function Customer(fname, lname, phone, membership){
  Person.call(this, fname, lname);
  this.phone = phone;
  this.membership = membership;
}

Customer.prototype.getPhone = function(){
  return(this.phone);
};
// inherit the Person prototype methods
// wipes out preceding prototypes: getPhone
Customer.prototype = Object.create(Person.prototype);
// Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

Customer.prototype.getMembership = function(){
  return(this.membership);
};

// Overload Person.greeting
Customer.prototype.greeting = function(){
  return(`Hi, I'm ${this.first_name} ${this.membership}`);
}

const cust1 = new Customer("John", "Doe", "123-456-7890","premium");

console.log(cust1);
console.log(cust1.full_name());

//console.log(cust1.getPhone()); 
console.log(cust1.getMembership()); 

// works after prototype
console.log(cust1.greeting()); 

console.log(person1.greeting());
console.log(cust1.greeting());