const rockButton = document.querySelector("#rock-button");
rockButton.addEventListener("click", () => playRound("rock", getComputerChoice()));

const paperButton = document.querySelector("#paper-button");
paperButton.addEventListener("click", () => playRound("paper", getComputerChoice()));

const scissorsButton = document.querySelector("#scissors-button");
scissorsButton.addEventListener("click", () => playRound("scissors", getComputerChoice()));

const gameResults = document.querySelector("#game-results");

const humanScoreDiv = document.querySelector("#human-score");
const computerScoreDiv = document.querySelector("#computer-score");

const gameWinnerDiv = document.querySelector("#game-winner");

function getComputerChoice() {
  let random_number = Math.random() * 3;
  let randomIndex = Math.floor(random_number);
  let choices = ["rock", "paper", "scissors"];  
  let computerChoice = choices[randomIndex];

  return computerChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    gameResults.innerHTML = ("You tie!");
  } 
  else {
    if (humanChoice === "rock") {
      switch (computerChoice) {
        case "paper":
          computerScore++;
          gameResults.innerHTML = ("You lose! Paper beats rock!");
          break;
        case "scissors":
          humanScore++;
          gameResults.innerHTML = ("You win! Rock beats scissors!");
          break;
      } 
    }
    else if (humanChoice === "paper") {
      switch (computerChoice) {
        case "rock":
          humanScore++;
          gameResults.innerHTML = ("You win! Paper beats rock!");
          break;
        case "scissors":
          computerScore++;
          gameResults.innerHTML = ("You lose! Rock beats scissors!");
          break;
      }
    } 
    else if (humanChoice === "scissors") {
      switch (computerChoice) {
        case "rock":
          computerScore++;
          gameResults.innerHTML = ("You lose! Rock beats scissors!");
          break;
        case "paper":
          humanScore++;
          gameResults.innerHTML = ("You win! Scissors beats paper!");
          break;
      }
    }

    stopGame(); 
    displayWinner();
  }

  humanScoreDiv.innerHTML = (`<strong>Your Score:</strong> ${humanScore}`);
  computerScoreDiv.innerHTML = (`<strong>Computer Score:</strong> ${computerScore}`);
}

function stopGame() {
  if (humanScore === 5 || computerScore === 5) {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
  }
}

function displayWinner() {
  if (humanScore === 5) {
    gameWinnerDiv.innerHTML = ("Congratulations! You won!!! Refresh the page to restart.");
  }
  else if (computerScore === 5) {
    gameWinnerDiv.innerHTML = ("Sorry, you lost this game. Try again by refreshing this page.");
  }
}