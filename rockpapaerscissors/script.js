let playerMoveShow = document.querySelector('#playerScore');
let computerMoveShow = document.querySelector('#computerScore');
let showResult = document.querySelector('#result');

function playGame(playerMove) {
  let randomNumber = Math.random();
  let computerMove = "";

  if (randomNumber > 0 && randomNumber < 1 / 3) {
    computerMove = "Rock";
  } else if (randomNumber > 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "Paper";
  } else {
    computerMove = "Scissors";
  }

  computerMoveShow.innerHTML = computerMove;
  playerMoveShow.innerHTML = playerMove;

  let result = '';

  if (computerMove.toLowerCase() === playerMove.toLowerCase()) {
    result = 'It\'s a tie!';
  } else if (
    (computerMove === "Rock" && playerMove === "scissors") ||
    (computerMove === "Paper" && playerMove === "rock") ||
    (computerMove === "Scissors" && playerMove === "paper")
  ) {
    result = 'You lose!';
  } else {
    result = 'You win!';
  }

  showResult.innerHTML = result;
}