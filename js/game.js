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

/*----- constants -----*/
const restartButton = document.querySelector('#restart-button');
const imageCat = document.querySelector('#image-cat-counter');
const letterOne = document.querySelector('#letter-01');
const letterTwo = document.querySelector('#letter-02');
const letterThree = document.querySelector('#letter-03');
const letterFour = document.querySelector('#letter-04');
const letterFive = document.querySelector('#letter-05');
const letterSix = document.querySelector('#letter-06');

/*----- app's state (variables) -----*/
//keyboard values
let wordList = [
	'Better',
	'Beyond',
	'Bishop',
	'Border',
	'Bottle',
	'Bottom',
	'Bought',
	'Branch',
	'Breath',
	'Bridge',
	'Bright',
	'Broken',
	'Budget',
	'Burden',
	'Bureau',
	'Button',
	'Camera',
	'Cancer',
	'Cannot',
	'Carbon',
	'Career',
	'Castle',
	'Casual',
	'Caught',
	'Center',
	'Centre',
	'Chance',
	'Change',
	'Charge',
	'Choice',
	'Choose',
	'Chosen',
	'Church',
	'Circle',
	'Client',
	'Closed',
	'Closer',
	'Coffee',
	'Column',
	'Combat',
	'Coming',
	'Common',
	'Comply',
	'Copper',
	'Corner',
	'Costly',
	'County',
	'Couple',
	'Course',
	'Covers',
	'Create',
	'Credit',
	'Crisis',
	'Custom',
	'Damage',
	'Danger',
	'Dealer',
	'Debate',
	'Decade',
	'Decide',
	'Defeat',
	'Defend',
	'Define',
	'Degree',
	'Demand',
	'Depend',
	'Deputy',
	'Desert',
	'Design',
	'Desire',
	'Detail',
	'Detect',
	'Device',
	'Differ',
	'Dinner',
	'Direct',
	'Doctor',
	'Dollar',
	'Domain',
	'Double',
	'Driven',
	'Driver',
	'During',
	'Easily',
	'Eating',
	'Editor',
	'Effect',
	'Effort',
	'Eighth',
	'Either',
	'Eleven',
	'Emerge',
	'Empire',
	'Employ',
	'Enable',
	'Ending',
	'Energy',
	'Engage',
	'Engine',
	'Enough',
	'Ensure',
	'Entire',
	'Entity',
	'Equity',
	'Escape',
	'Estate',
	'Ethnic',
	'Exceed',
	'Except',
	'Excess',
	'Expand',
	'Expect',
	'Expert',
	'Export',
	'Extend',
	'Extent',
	'Fabric',
	'Facing',
	'Factor',
	'Failed',
	'Fairly',
	'Fallen',
	'Family',
	'Famous',
	'Father',
	'Fellow',
	'Female',
	'Figure',
	'Filing',
	'Finger',
	'Finish',
	'Fiscal',
	'Flight',
	'Flying',
	'Follow',
	'Forced',
	'Forest',
	'Forget',
	'Formal',
	'Format',
	'Former',
	'Foster',
	'Fought',
	'Fourth',
	'French',
	'Friend',
	'Future',
	'Garden',
	'Gather',
	'Gender',
	'German',
	'Global',
	'Golden',
	'Ground',
	'Growth',
	'Guilty',
	'Handed',
	'Handle',
	'Happen',
	'Hardly',
	'Headed',
	'Health',
	'Height',
	'Hidden',
	'Holder',
	'Honest',
	'Impact',
	'Import',
	'Income',
	'Indeed',
	'Injury',
	'Inside',
	'Intend',
	'Intent',
	'Invest',
	'Island',
	'Itself',
	'Jersey',
	'Joseph',
	'Junior',
	'Killed',
	'Labour',
	'Latest',
	'Latter',
	'Launch',
	'Lawyer',
	'Leader',
	'League',
	'Leaves',
	'Legacy',
	'Length',
	'Lesson',
	'Letter',
	'Lights',
	'Likely',
	'Linked',
	'Liquid',
	'Listen',
	'Little',
	'Living',
	'Losing',
	'Lucent',
	'Luxury',
	'Mainly',
	'Making',
	'Manage',
	'Manner',
	'Manual',
	'Margin',
	'Marine',
	'Marked',
	'Market',
	'Martin',
	'Master',
	'Matter',
	'Mature',
	'Medium',
	'Member',
	'Memory',
	'Mental',
	'Merely',
	'Merger',
	'Method',
	'Middle',
	'Miller',
	'Mining',
	'Minute',
	'Mirror',
	'Mobile',
	'Modern',
	'Modest',
	'Module',
	'Moment',
	'Morris',
	'Mostly',
	'Mother',
	'Motion',
	'Moving',
	'Murder',
	'Museum',
	'Mutual',
	'Myself',
	'Narrow',
	'Nation',
	'Native',
	'Nature',
	'Nearby',
	'Nearly',
	'Nights',
	'Nobody',
	'Normal',
	'Notice',
	'Notion',
	'Number',
	'Object',
	'Obtain',
	'Office',
	'Offset',
	'Online',
	'Option',
	'Orange',
	'Origin',
	'Output',
	'Oxford',
	'Packed',
	'Palace',
	'Parent',
	'Partly',
	'Patent',
	'People',
	'Period',
	'Permit',
	'Person',
	'Phrase',
	'Picked',
	'Planet',
	'Player',
	'Please',
	'Plenty',
	'Pocket',
	'Police',
	'Policy',
	'Prefer',
	'Pretty',
	'Prince',
	'Prison',
	'Profit',
	'Proper',
	'Proven',
	'Public',
	'Pursue',
	'Raised',
	'Random',
	'Rarely',
	'Rather',
	'Rating',
	'Reader',
	'Really',
	'Reason',
	'Recall',
	'Recent',
	'Record',
	'Reduce',
	'Reform',
	'Regard',
	'Regime',
	'Region',
	'Relate',
	'Relief',
	'Remain',
	'Remote',
	'Remove',
	'Repair',
	'Repeat',
	'Replay',
	'Report',
	'Rescue',
	'Resort',
	'Result',
	'Retail',
	'Retain',
	'Return',
	'Reveal',
	'Review',
	'Reward',
	'Riding',
	'Rising',
	'Robust',
	'Ruling',
	'Safety',
	'Salary',
	'Sample',
	'Saving',
	'Saying',
	'Scheme',
	'School',
	'Screen',
	'Search',
	'Season',
	'Second',
	'Secret',
	'Sector',
	'Secure',
	'Seeing',
	'Select',
	'Seller',
	'Senior',
	'Series',
	'Server',
	'Settle',
	'Severe',
	'Sexual',
	'Should',
	'Signal',
	'Signed',
	'Silent',
	'Silver',
	'Simple',
	'Simply',
	'Single',
	'Sister',
	'Slight',
	'Smooth',
	'Social',
	'Solely',
	'Sought',
	'Source',
	'Soviet',
	'Speech',
	'Spirit',
	'Spoken',
	'Spread',
	'Spring',
	'Square',
	'Stable',
	'Status',
	'Steady',
	'Stolen',
	'Strain',
	'Stream',
	'Street',
	'Stress',
	'Strict',
	'Strike',
	'String',
	'Strong',
	'Struck',
	'Studio',
	'Submit',
	'Sudden',
	'Suffer',
	'Summer',
	'Summit',
	'Supply',
	'Surely',
	'Survey',
	'Switch',
	'Symbol',
	'System',
	'Taking',
	'Talent',
	'Target',
	'Taught',
	'Tenant',
	'Tender',
	'Tennis',
	'Thanks',
	'Theory',
	'Thirty',
	'Though',
	'Threat',
	'Thrown',
	'Ticket',
	'Timely',
	'Timing',
	'Tissue',
	'Toward',
	'Travel',
	'Treaty',
	'Trying',
	'Twelve',
	'Twenty',
	'Unable',
	'Unique',
	'United',
	'Unless',
	'Unlike',
	'Update',
	'Useful',
	'Valley',
	'Varied',
	'Vendor',
	'Versus',
	'Victim',
	'Vision',
	'Visual',
	'Volume',
	'Walker',
	'Wealth',
	'Weekly',
	'Weight',
	'Wholly',
	'Window',
	'Winner',
	'Winter',
	'Within',
	'Wonder',
	'Worker',
	'Wright',
	'Writer',
	'Yellow',
];

wordList = wordList.map(function (word) {
	return word.toUpperCase();
});

//counters
let counter = 0;
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

let CorrectWordObject = new CorrectWordClass(
	CorrectWordArray[0],
	CorrectWordArray[1],
	CorrectWordArray[2],
	CorrectWordArray[3],
	CorrectWordArray[4],
	CorrectWordArray[5],
	CorrectWordArray[6]
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
		setTimeout(displayLosePage, '3000');
	}
	if (correctGuessCount === 6) {
		setTimeout(displayWinPage, '3000');
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

// function insertBR() {
// 	for (let i = 0; i < arrayOfKeys.length; i++) {
// 		if (arrayOfKeys[i] == 'P') {
// 			let createBR = document.createElement('br');
// 			keyboardLetterClass.appendChild(createBR);
// 		}
// 	}
// }

//delete later
console.log(randomCorrectWord);
console.log(arrayOfKeys[9]);
