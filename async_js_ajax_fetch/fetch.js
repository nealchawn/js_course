const textBtn = document.getElementById('button1');
const jsonBtn = document.getElementById('button2');
const apiBtn = document.getElementById('button3');

textBtn.addEventListener('click', getText);
jsonBtn.addEventListener('click', getJSON);
apiBtn.addEventListener('click', getAPI);

function getText(e){
  e.preventDefault();

  window.fetch("./data.txt")
    .then(res => res.text())
    .then(response => console.log(response))
    .catch(err => console.log(err));
}

function getJSON(e){
  e.preventDefault();

  window.fetch("./customers.json")
    .then(function(response){
      return(response.json());
    })
    .then(function(response) {console.log(response)})
    .catch(function(){
      console.log(arguments);
    });
}

function getAPI(e){
  e.preventDefault();

  window.fetch(`https://api.github.com/users`)
    .then(function(response){
      return(response.json());
    })
    .then(function(response) {console.log(response)})
    .catch(function(){
      console.log(arguments);
    });
}