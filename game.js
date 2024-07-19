const checkGuessForm = document.querySelector(".checkGuessForm");
const checkGuessInput = document.querySelector(".checkGuessInput");
const resetButton = document.querySelector(".resetButton");
const statusText = document.querySelector(".status");
const guessNumber = document.querySelector(".guesses");

const NUMBER_OF_GUESSES = 10;

let randomNumber = generateRandomNumber();
let guessesLeft = NUMBER_OF_GUESSES;

guessNumber.innerHTML = guessesLeft;

checkGuessForm.addEventListener("submit", (e) => {
	e.preventDefault();
	const guessedNumber = checkGuessInput.value;
	
    checkGuess(guessedNumber, randomNumber);
	
	checkGuessInput.value = "";
	checkGuessInput.focus();
});

resetButton.addEventListener("click", reset);

function reset(e){
	randomNumber = generateRandomNumber();
	guessesLeft = NUMBER_OF_GUESSES;
	checkGuessInput.value = "";
	checkGuessInput.focus();
	
	console.log(guessesLeft);
	guessNumber.innerHTML = guessesLeft;
	statusText.innerHTML = "Let's Guess The Number";
}

function generateRandomNumber(){
	return Math.floor(Math.random()* 100);
}

function highGuess(){
	statusText.innerHTML = "Oops! Your Guess Is High";
}

function lowGuess(){
	statusText.innerHTML = "Oops! Your Guess Is Low";
}

function correctGuess(){
	statusText.innerHTML = "Congratulations! Your Guess Is Correct";
	
    reset();
}

function checkGuess(guessedNumber, realNumber){
	if(guessesLeft != 0){
		if(guessedNumber == realNumber){
			correctGuess();
		}else{
			if(guessedNumber < realNumber){
				lowGuess();
			}else{
				highGuess();
			}
			guessesLeft--;
			guessNumber.innerHTML = guessesLeft;
		}
	}
	
	if(guessesLeft == 0){
		statusText.innerHTML = " You Have No More Chances Left";
	}
}			