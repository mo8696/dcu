
// intilaze our variables here.
let randomNumber = Math.floor(Math.random()*100);
const guessField = document.querySelector('.guessField');
const guessSubmit = document.querySelector('.guessSubmit');

const guesses = document.querySelector('.guesses');
const lowOrHi = document.querySelector('.lowOrHi');
const lastResult = document.querySelector('.lastResult');
let guessCount = 1;
let restButton;
//check the guesses. 

function checkGuess(){
   // get the user guess.
   let userGuess = Number(guessField.value)
 ;
   
   if(guessCount === 1){
      lastResult.textContent = 'previous result: ';
   }
   
   guesses.textContent += userGuess +' ';
   if(userGuess == randomNumber){
      lastResult.textContent = 'congratulations! you guessed';
      lastResult.style.backgroundColor = 'green';
      lowOrHi.textContent = ' ';
      
      
      setGameOver();
   } else if(guessCount === 10){
    
    lastResult.textContent = '!Game over';
    lowOrHi.textContent = ' ';
    setGameOver();
   }else{
    lastResult.textContent= '!wrong';
    lastResult.style.backgroundColor = 'red';
    if(userGuess > randomNumber){
      lowOrHi.textContent = 'your guess is too high';
    }else if(userGuess < randomNumber){
     lowOrHi.textContent = 'your guess is too small.';
    }
    
   guessCount++
   guessField.value =' ';
   guessField.focus();
    
   }
 
 
 
}
//invoke checkGuess function.
guessSubmit.addEventListener('click', checkGuess);

//end the game.
function setGameOver(){
   guessField.disabled = true;
   guessSubmit.disabled = true;
   resetButton = document.createElement('button');
   resetButton.textContent = 'restar the game';
   document.body.append(resetButton);
   resetButton.addEventListener('click',resetGame);
}

// reset the Game  

function resetGame(){
   
   guessCount = 1;
   const resultParas = document.querySelectorAll('.resultParas');
   for(let i = 0 ; i < resultParas.length; i++){
    resultParas[i].textContent = ' ';
   }
   
   resetButton.parentNode.removeChild(resetButton);
   
   guessField.disabled = false;
   guessSubmit.disabled = false;
   guessField.value = ' ';
   lastResult.style.backgroundColor = 'white';
   guessField.focus();
   
   randomNumber = Math.floor(Math.random()*100);
   
}


