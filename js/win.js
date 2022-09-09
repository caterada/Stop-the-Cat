let playAgainButton = document.querySelector('#play-again-button');
playAgainButton.addEventListener('click', playAgain);

function playAgain() {
	document.location.href = '/game.html';
}
