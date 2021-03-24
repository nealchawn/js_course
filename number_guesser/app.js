// guess a number in a certain range
// enter a guess
// right:
// display green and message, lock dom and play again
// wrong:
// lower chances, red message
// gameover play again red, lock dom

// dont penalize bad guesses
// setMessage()

const min_span = document.querySelector('span.min-num'),
      max_span = document.querySelector('span.max-num'),
      guessInput = document.querySelector('#guess-input'),
      submitBtn = document.querySelector('#guess-value'),
      message = document.querySelector('p.message');

let maxGuesses = guessesAvailable = 3;
let randomNumber, min, max;

setGuessAndRange();

/*
Because of hoisting functions are hoisted to the top,
thus they are defined and able to be called from anywhere.
*/

submitBtn.addEventListener('click', gameController);

function gameController(e){
  e.preventDefault();
  userGuess = parseInt(guessInput.value);

  if(isNaN(userGuess) || userGuess < min || userGuess > max ){
    setMessage(`Please enter a number between ${min} and ${max}.`,'red');
  }else if(guessesAvailable > 0){
    guessNumber();
  }else{
    playAgain();
  }
}

function guessNumber(){
  guessesAvailable -= 1;
  

  if(userGuess === randomNumber){
    win(userGuess);
    endGame();
  }else{
    if(guessesAvailable < 1){
      lose(userGuess);
      endGame();
    }else{
      // output wrong
      setMessage(`${userGuess} is wrong. ${guessesAvailable} guesses left.`,'red');
    } 
  }
}

function win(userGuess){
  setMessage(`${userGuess} is correct. You win; gameover.`,'green');
}

function lose(userGuess){
  setMessage(`${userGuess} is wrong. GameOver correct answer is ${randomNumber}.`,'red');
}

function endGame(){
  // deplete guesses for gameController
  guessesAvailable = 0;
  // lock dom
  guessInput.setAttribute('disabled','true');
  // set submit to playAgain
  submitBtn.value = "Play Again";
}

function playAgain(){
  // reset vals
  setMessage();

  submitBtn.value = "Submit";
  // reset submit btn text
  guessesAvailable = maxGuesses;
  setGuessAndRange();
  // re-enable dom
  guessInput.removeAttribute('disabled');

  // alternativly
  // window.location.reload();
}

function setGuessAndRange(){
  min_span.innerHTML = min = 1;
  max_span.innerHTML = max = 10;

  randomNumber = Math.floor(Math.random() * (max-min+1)+min);

}

function setMessage(msg='', color=''){
  message.style.color = color;
  message.innerHTML = msg;
  guessInput.style.borderColor = color;
}