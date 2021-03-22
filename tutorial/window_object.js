// Window methods, objects and properties
// window is the global this prefix not needed
// window.console.log("Hello world");
// window.alert("Hello world");

// const input = window.prompt();
// console.log(input);
// const input = window.confirm("Are you really sure?"); // True and False
// console.log(input); 

let val;

val = window.innerHeight;
val = window.outerHeight;

val = window.innerWidth;
val = window.outerWidth;

val = window.scrollY;
 
val = window.location;


document.onload = function(){
  window.location.href = "/?id=test&name=chawn";
  
  //console.log(val);
};

//window.location.href = "/?id=test&name=chawn";
//window.location.reload();
// hostname == domain.name

val = window.location.search;

//History

//window.history.go(-1);
val = window.history;//.length;

// Navigator

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

val = window.navigator.userAgent;
val = window.navigator.platform;

console.log(val);