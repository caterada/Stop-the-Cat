/*----- constants -----*/
let startButton = document.querySelector('#start-button');

/*----- app's state (variables) -----*/

/*----- cached element references -----*/

/*----- event listeners -----*/
startButton.addEventListener('click', displayGamePage);

/*----- functions -----*/
function displayGamePage() {
	document.location.href = '/game.html';
}
