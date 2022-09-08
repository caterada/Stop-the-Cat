/*----- constants -----*/
//let correctLettersGuessed = 0
//let incorrectLettersGuessed = 0
const restartButton = document.querySelector('#restart-button');
//each letter

const wordList = ['apples', 'forgot', 'listen'];

const imageCat = document.querySelector('#image-cat-counter');

const letterOne = document.querySelector('#letter-01');
const letterTwo = document.querySelector('#letter-02');
const letterThree = document.querySelector('#letter-03');
const letterFour = document.querySelector('#letter-04');
const letterFive = document.querySelector('#letter-05');
const letterSix = document.querySelector('#letter-06');

//keyboard values
let keyValues = 'qwertyuiopasdfghjklzxcvbnm';
let arrayOfKeys = keyValues.split('');

let counter = 0;

for (let i = 0; i < arrayOfKeys.length; i++) {
	//create keyboard button with ID of A and innertext of A
	//the div with class .keyboard-input
	const keyboardPlacement = document.querySelector('.keyboard-input');
	const keyboardButton = document.createElement('button');
	keyboardButton.type = 'button';
	keyboardButton.innerText = arrayOfKeys[i];
	keyboardButton.id = arrayOfKeys[i];
	keyboardButton.style.width = '2rem';
	keyboardButton.style.height = '2rem';
	keyboardButton.addEventListener('click', clickButton);
	//create element div with class .keyboard-letter
	const letterID = document.createElement('div');
	letterID.classList.add('keyboard-letter');

	//put div of .keyboard-letter under .keyboard-input
	let eachKey = keyboardPlacement.appendChild(letterID);
	eachKey.appendChild(keyboardButton);

	// //try to put in a break after p, l, and m
	// if (arrayOfKeys[i] === 'p') {
	// 	eachKey.appendChild(document.createElement('br'));
	// }
}

/*----- app's state (variables) -----*/
//randomCorrectWord (object)
let randomCorrectWord = pickRandomWord();
let CorrectWordArray = randomCorrectWord.split('');
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

// find a way to code this better, how can I shorten to pass each index of an array using the array length instead of typing it out? for loop?
let CorrectWordObject = new CorrectWordClass(
	CorrectWordArray[0],
	CorrectWordArray[1],
	CorrectWordArray[2],
	CorrectWordArray[3],
	CorrectWordArray[4],
	CorrectWordArray[5],
	CorrectWordArray[6]
);

/*----- cached element references -----*/
//correctLettersGuessed
//incorrectLettersGuessed

/*----- event listeners -----*/
//when Restart button is clicked, refresh cache (refreshing page atm)
restartButton.addEventListener('click', restartGame);
//when letter is pressed, run function

/*----- functions -----*/

//if correct, change letter-button to green, run function for putting letter in correct blank spot

//if incorrect, change letter-button to red, run function to move cat up 1 flight of stairs (change image)
//if all blanks are filled, set a timer of 1sec and change page to win.html

function restartGame() {
	//enter function code here to reset all the values
	location.reload();
}
//when game is complete, change innerHTML of restart button to play again button
function pickRandomWord() {
	let i = Math.floor(Math.random() * wordList.length);
	return wordList[i];
}

//if button ID = a letter in the array of correct word, replace innertext with that letter. if not, move the incorrect counter up (image changes)
function clickButton() {
	if (randomCorrectWord.includes(this.innerText)) {
		//make for loop later
		if (CorrectWordArray[0] === this.innerText) {
			//replace 1 - 6 with innerText that matches
			letterOne.innerHTML = this.innerText;
		}
		if (CorrectWordArray[1] === this.innerText) {
			//replace 1 - 6 with innerText that matches
			letterTwo.innerHTML = this.innerText;
		}
		if (CorrectWordArray[2] === this.innerText) {
			//replace 1 - 6 with innerText that matches
			letterThree.innerHTML = this.innerText;
		}
		if (CorrectWordArray[3] === this.innerText) {
			//replace 1 - 6 with innerText that matches
			letterFour.innerHTML = this.innerText;
		}
		if (CorrectWordArray[4] === this.innerText) {
			//replace 1 - 6 with innerText that matches
			letterFive.innerHTML = this.innerText;
		}
		if (CorrectWordArray[5] === this.innerText) {
			//replace 1 - 6 with innerText that matches
			letterSix.innerHTML = this.innerText;
		}
	} else {
		counter += 1;
		counterAdd();
		if (counter === 6) {
			setTimeout(displayLosePage, '6000');
		}
	}
}

function counterAdd() {
	if (counter === 1) {
		imageCat.src = 'images/cat-image01.jpg';
		imageCat.alt = 'cat climbed up 1st flight of stairs';
	}

	if (counter === 2) {
		imageCat.src = 'images/cat-image02.jpg';
		imageCat.alt = 'cat climbed up 2nd flight of stairs';
	}

	if (counter === 3) {
		imageCat.src = 'images/cat-image03.jpg';
		imageCat.alt = 'cat climbed up 3rd flight of stairs';
	}

	if (counter === 4) {
		imageCat.src = 'images/cat-image04.jpg';
		imageCat.alt = 'cat climbed up 4th flight of stairs';
	}

	if (counter === 5) {
		imageCat.src = 'images/cat-image05.jpg';
		imageCat.alt = 'cat climbed up 5th flight of stairs';
	}

	if (counter === 6) {
		imageCat.src = 'images/cat-image06.jpg';
		imageCat.alt = 'cat climbed up 6th flight of stairs';
	}
}

function displayLosePage() {
	document.location.href = '/lose.html';
}

function displayWinPage() {
	document.location.href = '/win.html';
}

// CONSOLE LOG CHECKS
console.log(wordList);
console.log(CorrectWordObject);
console.log(counter);
