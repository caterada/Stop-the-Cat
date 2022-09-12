//change key to red when incorrectly pressed
//green when correct and make unclickable
//create new images
//make play again button
//back to rules button

/*----- constants -----*/
const restartButton = document.querySelector('#restart-button');
const backButton = document.querySelector('#back-button');
const imageCat = document.querySelector('#image-cat-counter');
const letterOne = document.querySelector('#letter-01');
const letterTwo = document.querySelector('#letter-02');
const letterThree = document.querySelector('#letter-03');
const letterFour = document.querySelector('#letter-04');
const letterFive = document.querySelector('#letter-05');

/*----- app's state (variables) -----*/
//keyboard values
let wordList = [
	'actor',
	'acute',
	'admit',
	'adopt',
	'adult',
	'after',
	'again',
	'agent',
	'agree',
	'ahead',
	'alarm',
	'album',
	'alert',
	'alike',
	'alive',
	'allow',
	'alone',
	'along',
	'alter',
	'among',
	'anger',
	'Angle',
	'angry',
	'apart',
	'apple',
	'apply',
	'arena',
	'argue',
	'arise',
	'array',
	'aside',
	'asset',
	'audio',
	'audit',
	'avoid',
	'award',
	'aware',
	'badly',
	'baker',
	'bases',
	'basic',
	'basis',
	'beach',
	'began',
	'begin',
	'begun',
	'being',
	'below',
	'bench',
	'billy',
	'birth',
	'black',
	'blame',
	'blind',
	'block',
	'blood',
	'board',
	'boost',
	'booth',
	'bound',
	'brain',
	'brand',
	'bread',
	'break',
	'breed',
	'brief',
	'bring',
	'broad',
	'broke',
	'brown',
	'build',
	'built',
	'buyer',
	'cable',
	'calif',
	'carry',
	'catch',
	'cause',
	'chain',
	'chair',
	'chart',
	'chase',
	'cheap',
	'check',
	'chest',
	'chief',
	'child',
	'china',
	'chose',
	'civil',
	'claim',
	'class',
	'clean',
	'clear',
	'click',
	'clock',
	'close',
	'coach',
	'coast',
	'could',
	'count',
	'court',
	'cover',
	'craft',
	'crash',
	'cream',
	'crime',
	'cross',
	'crowd',
	'crown',
	'curve',
	'cycle',
	'daily',
	'dance',
	'dated',
	'dealt',
	'death',
	'debut',
	'delay',
	'depth',
	'doing',
	'doubt',
	'dozen',
	'draft',
	'drama',
	'drawn',
	'dream',
	'dress',
	'drill',
	'drink',
	'drive',
	'drove',
	'dying',
	'eager',
	'early',
	'earth',
	'eight',
	'elite',
	'empty',
	'enemy',
	'enjoy',
	'enter',
	'entry',
	'equal',
	'error',
	'event',
	'every',
	'exact',
	'exist',
	'extra',
	'faith',
	'FALSE',
	'fault',
	'fiber',
	'field',
	'fifth',
	'fifty',
	'fight',
	'final',
	'first',
	'fixed',
	'flash',
	'fleet',
	'floor',
	'fluid',
	'focus',
	'force',
	'forth',
	'forty',
	'forum',
	'found',
	'frame',
	'frank',
	'fraud',
	'fresh',
	'front',
	'fruit',
	'fully',
	'funny',
	'giant',
	'given',
	'glass',
	'globe',
	'going',
	'grace',
	'grade',
	'grand',
	'grant',
	'grass',
	'great',
	'green',
	'gross',
	'group',
	'grown',
	'guard',
	'guess',
	'guest',
	'guide',
	'happy',
	'harry',
	'heart',
	'heavy',
	'hence',
	'henry',
	'horse',
	'hotel',
	'house',
	'human',
	'ideal',
	'image',
	'index',
	'inner',
	'input',
	'issue',
	'japan',
	'jimmy',
	'joint',
	'jones',
	'judge',
	'known',
	'label',
	'large',
	'laser',
	'later',
	'laugh',
	'layer',
	'learn',
	'lease',
	'least',
	'leave',
	'legal',
	'level',
	'lewis',
	'light',
	'limit',
	'links',
	'lives',
	'local',
	'logic',
	'loose',
	'lower',
	'lucky',
	'lunch',
	'lying',
	'magic',
	'major',
	'maker',
	'march',
	'maria',
	'match',
	'maybe',
	'mayor',
	'meant',
	'media',
	'metal',
	'might',
	'minor',
	'minus',
	'mixed',
	'model',
	'money',
	'month',
	'moral',
	'motor',
	'mount',
	'mouse',
	'mouth',
	'movie',
	'music',
	'needs',
	'never',
	'newly',
	'night',
	'noise',
	'north',
	'noted',
	'novel',
	'nurse',
	'occur',
	'ocean',
	'offer',
	'often',
	'order',
	'other',
	'ought',
	'paint',
	'panel',
	'paper',
	'party',
	'peace',
	'peter',
	'phase',
	'phone',
	'photo',
	'piece',
	'pilot',
	'pitch',
	'place',
	'plain',
	'plane',
	'plant',
	'plate',
	'point',
	'pound',
	'power',
	'press',
	'price',
	'pride',
	'prime',
	'print',
	'prior',
	'prize',
	'proof',
	'proud',
	'prove',
	'queen',
	'quick',
	'quiet',
	'quite',
	'radio',
	'raise',
	'range',
	'rapid',
	'ratio',
	'reach',
	'ready',
	'refer',
	'right',
	'rival',
	'river',
	'robin',
	'roger',
	'roman',
	'rough',
	'round',
	'route',
	'royal',
	'rural',
	'scale',
	'scene',
	'scope',
	'score',
	'sense',
	'serve',
	'seven',
	'shall',
	'shape',
	'share',
	'sharp',
	'sheet',
	'shelf',
	'shell',
	'shift',
	'shirt',
	'shock',
	'shoot',
	'short',
	'shown',
	'sight',
	'since',
	'sixth',
	'sixty',
	'sized',
	'skill',
	'sleep',
	'slide',
	'small',
	'smart',
	'smile',
	'smith',
	'smoke',
	'solid',
	'solve',
	'sorry',
	'sound',
	'south',
	'space',
	'spare',
	'speak',
	'speed',
	'spend',
	'spent',
	'split',
	'spoke',
	'sport',
	'staff',
	'stage',
	'stake',
	'stand',
	'start',
	'state',
	'steam',
	'steel',
	'stick',
	'still',
	'stock',
	'stone',
	'stood',
	'store',
	'storm',
	'story',
	'strip',
	'stuck',
	'study',
	'stuff',
	'style',
	'sugar',
	'suite',
	'super',
	'sweet',
	'table',
	'taken',
	'taste',
	'taxes',
	'teach',
	'teeth',
	'terry',
	'texas',
	'thank',
	'theft',
	'their',
	'theme',
	'there',
	'these',
	'thick',
	'thing',
	'think',
	'third',
	'those',
	'three',
	'threw',
	'throw',
	'tight',
	'times',
	'tired',
	'title',
	'today',
	'topic',
	'total',
	'touch',
	'tough',
	'tower',
	'track',
	'trade',
	'train',
	'treat',
	'trend',
	'trial',
	'tried',
	'tries',
	'truck',
];

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
	keyboardButton.classList = 'keyboard-button-class';
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
backButton.addEventListener('click', backToRulesPage);

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
				this.style.background = '#DDA448';
				this.disabled = 'true';
			}
			if (CorrectWordArray[1] === this.innerText) {
				letterTwo.innerHTML = this.innerText;
				correctGuessCount += 1;
				this.style.background = '#DDA448';
				this.disabled = 'true';
			}
			if (CorrectWordArray[2] === this.innerText) {
				letterThree.innerHTML = this.innerText;
				correctGuessCount += 1;
				this.style.background = '#DDA448';
				this.disabled = 'true';
			}
			if (CorrectWordArray[3] === this.innerText) {
				letterFour.innerHTML = this.innerText;
				correctGuessCount += 1;
				this.style.background = '#DDA448';
				this.disabled = 'true';
			}
			if (CorrectWordArray[4] === this.innerText) {
				letterFive.innerHTML = this.innerText;
				correctGuessCount += 1;
				this.style.background = '#DDA448';
				this.disabled = 'true';
			}
		} else {
			incorrectGuessCounter += 1;
			this.style.background = '#BB342F';
			this.disabled = 'true';
			counterAdd();
		}
	}
	if (incorrectGuessCounter >= 6) {
		for (i = 0; i < arrayOfKeys.length; i++) {
			document.querySelectorAll('.keyboard-button-class')[i].disabled = 'true';
		}
		setTimeout(displayLosePage, '3000');
	}
	if (correctGuessCount === 5) {
		for (i = 0; i < arrayOfKeys.length; i++) {
			document.querySelectorAll('.keyboard-button-class')[i].disabled = 'true';
		}
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

function backToRulesPage() {
	document.location.href = '/rules.html';
}

//delete later
console.log(randomCorrectWord);
