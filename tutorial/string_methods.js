const first_name = "Chawn";
const last_name = "Neal";
const job = "software developer";
const city = "Chicago";
let html;

// a lot of times fetching data via js



const age = 24;
let val;
const str = "Hello there my name is Chawn";


// Concatenation
val = first_name + " "+ last_name;

// Append
val = "Chawn";
val += " ";
val += "Neal";

val = 'Hello my name is '+val+". I am "+age+" years old.";
val = `Hello my name is ${val}. I am ${age} years old.`; // ES6 Template Literal


// Escaping
val = "That's awesome!";
val = 'That\'s awesome!';

val = first_name.length;

// concat

val = first_name.concat(" ",last_name);

val = first_name.toUpperCase();
val = first_name.toLowerCase();

val = first_name[0];

// indexOf -1 if not there
val = (first_name+last_name).toLowerCase().indexOf('n'); // 4
val = (first_name+last_name).toLowerCase().lastIndexOf('n'); // 5

// charAt
val = first_name.charAt(0);
// get last character
val = first_name.charAt(first_name.length - 1);

val = first_name.substr(0,3); // Cha

val = first_name.slice(0,3); // Cha >> normal arrays
val = first_name.slice(-3); // awn

val = str.split(""); // split by char
val = str.split(" "); // split by space

val = str.replace(first_name, last_name);

// includes
val = str.includes("Hello");

// Template Literal es6

// Without Template Strings aka es5
html = "<ul><li>Name: "+first_name+" </li><li>Age: "+age+" </li><li>Job: "+job+" </li> <li>City: "+city+" </li></ul>";

html =  "<ul>"+
          "<li>Name: "+first_name+" "+last_name+" </li>"+
          "<li>Age: "+age+" </li>"+
          "<li>Job: "+job+" </li>"+
          "<li>City: "+city+" </li>"+
        "</ul>";

// With Template String(literals) ES6

html = `<ul>
          <li>Name: ${first_name} ${last_name}</li>
          <li>Age: ${age} </li>
          <li>Job: ${job} </li>
          <li>City: ${city} </li>
          <li>City: ${1+2} </li>
          <li>${(() => ("hello"))() } </li>
          <li>${age > 30 ? 'over 30' : 'under 30'} </li>
        </ul>`;

document.body.innerHTML += html;


console.log(val);


