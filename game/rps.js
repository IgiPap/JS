var newGameBtn = document.getElementById('js-newGameButton');
var	pickRock = document.getElementById('js-playerPick_rock');
var pickPaper = document.getElementById('js-playerPick_paper');
var	pickScissors = document.getElementById('js-playerPick_scissors');
var	newGameBtn = document.getElementById('js-newGameButton');
var	newGameElem = document.getElementById('js-newGameElement');
var	pickElem = document.getElementById('js-playerPickElement');
var	resultsElem = document.getElementById('js-resultsTableElement');
var playerPointsElem = document.getElementById('js-playerPoints');
var	playerNameElem = document.getElementById('js-playerName');
var	computerPointsElem = document.getElementById('js-computerPoints');
var	playerPickElem = document.getElementById('js-playerPick');
var	computerPickElem = document.getElementById('js-computerPick');
var	playerResultElem = document.getElementById('js-playerResult');
var	computerResultElem = document.getElementById('js-computerResult');
var	gameState = 'notStarted',
 		player = {
 			name: '',
 			score: 0
 		},
 		computer = {
 			score: 0
 		};

pickRock.addEventListener('click', function() { playerPick('Rock')});
pickPaper.addEventListener('click', function() { playerPick('Paper')});
pickScissors.addEventListener('click', function() { playerPick('Scissors')});
newGameBtn.addEventListener('click', newGame);

setGameElements();

function setGameElements() {
 	switch(gameState) {
 		case 'started':
 			newGameElem.style.display = 'none';
 			pickElem.style.display = 'block';
 			resultsElem.style.display = 'block';
 			playerPointsElem.display = 'block';
 		break;
 		case 'ended':
 			newGameBtn.innerText = 'Play again';
 		case 'notStarted':
		default:
 			newGameElem.style.display = 'block';
 			pickElem.style.dispaly = 'none';
 			resultsElem.style.display = 'none';
 	}
}

function newGame() {
 	player.name = prompt('Enter your name', 'player name');
 		if (player.name) {
 			player.score = computer.score = 0;
 			gameState = 'started';
 		  setGameElements();
 			playerNameElem.innerHTML = player.name;
			setGamePoints();
		}
}

function playerPick(playerPick) {
 	var computerPick = getComputerPick();

 	playerPickElem.innerHTML = playerPick;
 	computerPickElem.innerHTML = computerPick;

 	checkRoundWinner(playerPick, computerPick);
}

function getComputerPick() {
 	var possiblePicks = ['Rock', 'Paper', 'Scissors'];
 	return possiblePicks[Math.floor(Math.random()*3)];
}

function checkRoundWinner(playerPick, computerPick) {
  playerResultElem.innerHTML = computerResultElem.innerHTML = '';

 	var winnerIs = 'player';

 	if (playerPick == computerPick) {
 		winnerIs = 'noone';
 	} else if (
 		(computerPick == 'Rock' && playerPick == 'Scissors') ||
 		(computerPick == 'Scissors' && playerPick == 'Paper') ||
 		(computerPick == 'Paper' && playerPick == 'Rock')) {

 		winnerIs = 'computer';
 	}

 	if (winnerIs == 'player') {
 		playerResultElem.innerHTML = "Win!";
 		player.score++;
 	} else if (winnerIs == 'computer') {
 		computerResultElem.innerHTML = "Win!";
		computer.score++;
 	} else {
 		playerResultElem.innerHTML = "Draw!";
 		computerResultElem.innerHTML = "Draw!";
 	}
 	setGamePoints();
  checkIfGameEnded();
}

function checkIfGameEnded() {
 	if (player.score == '10') {
 		alert(player.name + ' win! '  +  ' 10 points!')
 		gameState = 'ended'
 		setGameElements();
 	} else if (computer.score == '10' ) {
 		alert('Computer win! 10 points!')
 		gameState = 'ended'
 		setGameElements();
 	}
}

 function setGamePoints() {
 	playerPointsElem.innerHTML = player.score;
 	computerPointsElem.innerHTML = computer.score;
}
