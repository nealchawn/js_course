class Person{
  constructor(fname = '', lname = '', dob){
    this.first_name = fname;
    this.last_name = lname;
    this.dob = new Date(dob);
  }

  greeting(){
    return `the slab, ${this.first_name} ${this.last_name}`;
  }

  calculateAge(){
    const diff = Date.now() - this.dob;
    const ageDate = new Date(diff);
    return(ageDate.getUTCFullYear() - 1970);
  }
  static addNumbers(x, y){
    return(x+y);
  }
}

const mary = new Person('Mary','Jane', '09/22/1996');
console.log(mary);
console.log(mary.greeting());
console.log(mary.calculateAge());

console.log(Person.addNumbers(5,6));