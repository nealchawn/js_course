let val;
val = document.all;
val = document.all[1];
val = document.all.length;
val = document.head;
val = document.body;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;
val = document.forms[0].id;// .method .action // not recommended
val = document.links[0].className;
val = document.links[0].classList;
val = document.scripts[2].getAttribute('src');

// htmlcollection to array
let scripts = document.scripts;
let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script){
  console.log(script.getAttribute('src'));
});

console.log(val);