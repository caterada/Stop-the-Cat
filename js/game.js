//put more words in word list
//adjust keys to all caps
//change key to red when incorrectly pressed
//green when correct
//create new images
//align buttons correctly
//make play again button
//put break in the keyboard layout
//put timer on win condition
//make sure restart game button works correctly and is refreshing through words
//use init() and render()

/*----- constants -----*/
const restartButton = document.querySelector('#restart-button');
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
let correctGuessCount = 0;

for (let i = 0; i < arrayOfKeys.length; i++) {
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

/*----- event listeners -----*/
restartButton.addEventListener('click', restartGame);

/*----- functions -----*/
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
	if (counter < 6) {
		if (randomCorrectWord.includes(this.innerText)) {
			//could be a for loop?
			if (CorrectWordArray[0] === this.innerText) {
				letterOne.innerHTML = this.innerText;
				correctGuessCount += 1;
			}
			if (CorrectWordArray[1] === this.innerText) {
				letterTwo.innerHTML = this.innerText;
				correctGuessCount += 1;
			}
			if (CorrectWordArray[2] === this.innerText) {
				letterThree.innerHTML = this.innerText;
				correctGuessCount += 1;
			}
			if (CorrectWordArray[3] === this.innerText) {
				letterFour.innerHTML = this.innerText;
				correctGuessCount += 1;
			}
			if (CorrectWordArray[4] === this.innerText) {
				letterFive.innerHTML = this.innerText;
				correctGuessCount += 1;
			}
			if (CorrectWordArray[5] === this.innerText) {
				letterSix.innerHTML = this.innerText;
				correctGuessCount += 1;
			}
		} else {
			counter += 1;
			counterAdd();
		}
	}
	if (counter >= 6) {
		setTimeout(displayLosePage, '6000');
	}
	if (correctGuessCount === 6) {
		displayWinPage();
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
