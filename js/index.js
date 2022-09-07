/*----- constants -----*/
let playGameButton = document.querySelector('#play-game-button');

/*----- app's state (variables) -----*/

/*----- cached element references -----*/

/*----- event listeners -----*/

playGameButton.addEventListener('click', displayRulesPage);

/*----- functions -----*/
function displayRulesPage() {
	document.location.href = '/rules.html';
}
