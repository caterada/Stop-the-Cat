/*----- constants -----*/
//let correctLettersGuessed = 0
//let incorrectLettersGuessed = 0
let restartButton = document.querySelector('#restart-button');
//each letter

let wordList = ['apple', 'forgot', 'listen'];
console.log(wordList);

/*----- app's state (variables) -----*/
//randomCorrectWord (object)
let randomCorrectWord = pickRandomWord();
console.log(randomCorrectWord);

/*----- cached element references -----*/
//correctLettersGuessed
//incorrectLettersGuessed

/*----- event listeners -----*/
//when Restart button is clicked, refresh cache (refreshing page atm)
restartButton.addEventListener('click', restartGame);
//when letter is pressed, run function

/*----- functions -----*/
//when letter is clicked, check to see if letter is in the randomCorrectWord

//if correct, change letter-button to green, run function for putting letter in correct blank spot
//if incorrect, change letter-button to red, run function to move cat up 1 flight of stairs (change image)
//if all blanks are filled, set a timer of 1sec and change page to win.html
//if incorrect letters == 6, set a timer of 1sec and change page to lose.html
function restartGame() {
	//enter function code here to reset all the values
	location.reload();
}
//when game is complete, change innerHTML of restart button to play again button
function pickRandomWord() {
	let i = Math.floor(Math.random() * wordList.length);
	return wordList[i];
}
