const rockButton = document.querySelector("#rock-button");
rockButton.addEventListener("click", () => playRound("rock", getComputerChoice()));

const paperButton = document.querySelector("#paper-button");
paperButton.addEventListener("click", () => playRound("paper", getComputerChoice()));

const scissorsButton = document.querySelector("#scissors-button");
scissorsButton.addEventListener("click", () => playRound("scissors", getComputerChoice()));

const gameResults = document.querySelector("#game-results");

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
  }
}

function playGame() {
  let humanChoice;
  let computerChoice;

/*  for (let round = 0; round < 5; round++) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }

  if (humanScore > computerScore) {
    console.log("Great job! You've won the game!");
  }
  else if (humanScore < computerScore) {
    console.log("Sorry, you lose!");
  }
  else if (humanScore == computerScore) {
    console.log("You tied!");
  } */
}

// playGame(); 