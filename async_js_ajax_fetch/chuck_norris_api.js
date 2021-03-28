// form
const form = document.forms[0];
// input number
const inputNumber = document.getElementById('number');
// div.jokes
const outputUl = document.querySelector('ul.jokes');

form.addEventListener('submit', loadJokes);

function loadJokes(e){
  e.preventDefault();
  let numberJokes = parseInt(inputNumber.value);
  const xhr = new XMLHttpRequest();
  xhr.open('get',`http://api.icndb.com/jokes/random/${numberJokes}`,true);

  xhr.onload = function(){
    if(this.status == 200){
      let jokes, outputHtml = "";
      jokes = JSON.parse(this.responseText);
      jokes.value.forEach((joke)=>{
        let jokeText = joke.joke;
        outputHtml += `
        <li>${jokeText}</li>
        `;
      });
      outputUl.innerHTML = outputHtml;
    }
  };
  if(numberJokes > 0){
    xhr.send();
  }else{
    outputUl.innerHTML = "<li>Bad Input. Please enter a number.</li>";
  }
}