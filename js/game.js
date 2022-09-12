//change key to red when incorrectly pressed
//green when correct and make unclickable
//create new images
//make play again button
//back to rules button

/*----- constants -----*/
const restartButton = document.querySelector('#restart-button');
const imageCat = document.querySelector('#image-cat-counter');
const letterOne = document.querySelector('#letter-01');
const letterTwo = document.querySelector('#letter-02');
const letterThree = document.querySelector('#letter-03');
const letterFour = document.querySelector('#letter-04');
const letterFive = document.querySelector('#letter-05');

/*----- app's state (variables) -----*/
//keyboard values
let wordList = ['apple', 'teary'];

wordList = wordList.map(function (word) {
	return word.toUpperCase();
});

//counters
let incorrectGuessCounter = 0;
let correctGuessCount = 0;

//keyboard
let keyValues = 'QWERTYUIOPASDFGHJKLZXCVBNM';
let arrayOfKeys = keyValues.split('');

for (let i = 0; i < arrayOfKeys.length; i++) {
	//the div with class .keyboard-input
	let keyboardPlacement = document.querySelector('.keyboard-input');
	let keyboardButton = document.createElement('button');
	keyboardButton.type = 'button';
	keyboardButton.innerText = arrayOfKeys[i];
	keyboardButton.classList = 'keyboardButtonClass';
	keyboardButton.id = arrayOfKeys[i];
	keyboardButton.style.width = '2rem';
	keyboardButton.style.height = '2rem';
	keyboardButton.addEventListener('click', clickButton);
	//create element div with class .keyboard-letter
	let createKeyDiv = document.createElement('div');
	createKeyDiv.classList.add('keyboard-letter');

	//put div of .keyboard-letter under .keyboard-input
	let eachKey = keyboardPlacement.appendChild(createKeyDiv);
	eachKey.appendChild(keyboardButton);

	//try to put in a break after p, l, and m
	if (arrayOfKeys[i] == 'P' || arrayOfKeys[i] == 'L' || arrayOfKeys[i] == 'M') {
		let createBreakDiv = document.createElement('div');
		createBreakDiv.classList.add('break');
		let keyboardInputClass = document.querySelector('.keyboard-input');
		keyboardInputClass.appendChild(createBreakDiv);
	}
}

//randomCorrectWord (object)
let randomCorrectWord = pickRandomWord();
let CorrectWordArray = randomCorrectWord.split('');
class CorrectWordClass {
	constructor(
		firstLetter,
		secondLetter,
		thirdLetter,
		fourthLetter,
		fifthLetter
	) {
		this.firstLetter = firstLetter;
		this.secondLetter = secondLetter;
		this.thirdLetter = thirdLetter;
		this.fourthLetter = fourthLetter;
		this.fifthLetter = fifthLetter;
	}
}

let CorrectWordObject = new CorrectWordClass(
	CorrectWordArray[0],
	CorrectWordArray[1],
	CorrectWordArray[2],
	CorrectWordArray[3],
	CorrectWordArray[4]
);

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
	if (incorrectGuessCounter < 6) {
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
		} else {
			counter += 1;
			counterAdd();
		}
	}
	if (incorrectGuessCounter >= 5) {
		setTimeout(displayLosePage, '3000');
	}
	if (correctGuessCount === 5) {
		setTimeout(displayWinPage, '3000');
	}
}

function counterAdd() {
	if (incorrectGuessCounter === 1) {
		imageCat.src = 'images/cat-image01.jpg';
		imageCat.alt = 'cat climbed up 1st flight of stairs';
	}

	if (incorrectGuessCounter === 2) {
		imageCat.src = 'images/cat-image02.jpg';
		imageCat.alt = 'cat climbed up 2nd flight of stairs';
	}

	if (incorrectGuessCounter === 3) {
		imageCat.src = 'images/cat-image03.jpg';
		imageCat.alt = 'cat climbed up 3rd flight of stairs';
	}

	if (incorrectGuessCounter === 4) {
		imageCat.src = 'images/cat-image04.jpg';
		imageCat.alt = 'cat climbed up 4th flight of stairs';
	}

	if (incorrectGuessCounter === 5) {
		imageCat.src = 'images/cat-image05.jpg';
		imageCat.alt = 'cat climbed up 5th flight of stairs';
	}

	if (incorrectGuessCounter === 6) {
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

//delete later
console.log(randomCorrectWord);
