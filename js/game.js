/*----- constants -----*/
//let correctLettersGuessed = 0
//let incorrectLettersGuessed = 0
const restartButton = document.querySelector('#restart-button');
//each letter

const wordList = ['apple', 'forgot', 'listen'];

//the div with class .keyboard-input
const keyboardPlacement = document.querySelector('.keyboard-input');

//create keyboard button with ID of A and innertext of A
const keyboardButton = document.createElement('button');
keyboardButton.innerText = 'A'; //change to function
keyboardButton.id = 'A'; //change to function
keyboardButton.addEventListener('click', function () {
	alert('clicked button A');
});

//create element div with class .keyboard-letter
const letterID = document.createElement('div');
letterID.classList.add('keyboard-letter');
keyboardPlacement.appendChild(letterID).appendChild(keyboardButton);

/*----- app's state (variables) -----*/
//randomCorrectWord (object)
let randomCorrectWord = pickRandomWord();
let CorrectWordArray = randomCorrectWord.split('');

//keyboard values
let keyValues = 'qwertyuiopasdfghjklzxcvbnm';
let arrayOfKeys = keyValues.split('');

class CorrectWordClass {
	constructor(
		firstLetter,
		secondLetter,
		thirdLetter,
		fourthLetter,
		fifthLetter,
		sixthLetter
	) {
		this.firstLetter = firstLetter;
		this.secondLetter = secondLetter;
		this.thirdLetter = thirdLetter;
		this.fourthLetter = fourthLetter;
		this.fifthLetter = fifthLetter;
		this.sixthLetter = sixthLetter;
	}
}

//find a way to code this better, how can I shorten to pass each index of an array using the array length instead of typing it out? for loop?
let CorrectWordObject = new CorrectWordClass(
	CorrectWordArray[0],
	CorrectWordArray[1],
	CorrectWordArray[2],
	CorrectWordArray[3],
	CorrectWordArray[4],
	CorrectWordArray[5],
	CorrectWordArray[6]
);

// CONSOLE LOG CHECKS
console.log(wordList);
console.log(CorrectWordObject);

/*----- cached element references -----*/
//correctLettersGuessed
//incorrectLettersGuessed

/*----- event listeners -----*/
//when Restart button is clicked, refresh cache (refreshing page atm)
restartButton.addEventListener('click', restartGame);
//when letter is pressed, run function

/*----- functions -----*/

//when letter is clicked, check to see if letter is in the randomCorrectWord
//if it's a correct letter

//else if it's not a correct letter function needed

//if correct, change letter-button to green, run function for putting letter in correct blank spot
// function guessedWord(letter) {
// 	let updateLetter = document.querySelector('#letter-01').innerHTML;
// 	updateLetter = CorrectWordArray[randomCorrectWord.indexOf(letter)];
// }

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
