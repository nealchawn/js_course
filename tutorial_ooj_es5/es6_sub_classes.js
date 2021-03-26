class Person{
  constructor(fname = "", lname = ""){
    this.firstName = fname;
    this.lastName = lname;
  }

  fullName(){
    return(`${this.firstName} ${this.lastName}`);
  }

  greeting(){
    return(`Hi from, ${this.firstName} ${this.lastName}`);
  }
}

class Customer extends Person{
  constructor(fname, lname, phone, membership) {
    super(fname, lname);
    this.phone = phone;
    this.membership = membership;
  }

  greeting(){
    return(`Howdy, I'm ${this.firstName} a ${this.membership}. Lookin' to buy!`);
  }
}

const p1 = new Person("Chawn", "Neal");

console.log(p1.greeting());

const c1 = new Customer("John", "Doe", '111-222-3333','premium')
console.log(c1.greeting());
console.log(c1);