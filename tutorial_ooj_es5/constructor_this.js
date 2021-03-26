// Person constructor 
function Person(age, dob){
  this.name;
  this.age = age;
  this.dob = new Date(dob);
  this.getAge = function(){
    const diff = Date.now() - this.dob.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() -1970);
  }
  console.log(this);
}

const chawn = new Person(7,'09/22/96');
chawn.name = "Chawn Neal";
const john = new Person(8, "03/09/1996");
john.name = "John";
console.log(chawn.getAge());

//console.log(chawn);
//console.log(john);
console.log("Outside of person: ");
console.log(this);