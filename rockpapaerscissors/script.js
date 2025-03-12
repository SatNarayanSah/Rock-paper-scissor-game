let playerMoveShow = document.querySelector("#playerScore");
let computerMoveShow = document.querySelector("#computerScore");
let showResult = document.querySelector("#result");

function playGame(playerMove) {
  // Generate a random number to determine the computer's move
  let randomNumber = Math.random();
  let computerMove = "";

  if (randomNumber > 0 && randomNumber < 1 / 3) {
    computerMove = "🪨"; // Rock
  } else if (randomNumber > 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "📄"; // Paper
  } else {
    computerMove = "✂️"; // Scissors
  }

  // Display the player's and computer's moves
  playerMoveShow.innerHTML = playerMove;
  computerMoveShow.innerHTML = computerMove;

  // Determine the result of the game
  let result = "";

  if (computerMove === playerMove) {
    result = "It's a tie! 🤝";
  } else if (
    (computerMove === "🪨" && playerMove === "✂️") ||
    (computerMove === "📄" && playerMove === "🪨") ||
    (computerMove === "✂️" && playerMove === "📄")
  ) {
    result = "You lose! 😢";
  } else {
    result = "You win! 🎉";
  }

  // Display the result
  showResult.innerHTML = result;
}
