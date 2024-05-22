function getComputerChoice() {
  let random_number = Math.random() * 3;
  let randomIndex = Math.floor(random_number);
  let choices = ["rock", "paper", "scissors"];  
  let computerChoice = choices[randomIndex];

  return computerChoice;
}

function getHumanChoice() {
  let humanChoice = prompt("Please choose either 'rock', 'paper', or 'scissors': ");
  
  return humanChoice.toLocaleLowerCase;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    console.log("You tie!");
  } 
  else {
    if (humanChoice === "rock") {
      switch (computerChoice) {
        case "paper":
          computerScore++;
          console.log("You lose! Paper beats rock!");
          break;
        case "scissors":
          humanScore++;
          console.log("You win! Rock beats scissors!");
          break;
      } 
    }
    else if (humanChoice === "paper") {
      switch (computerChoice) {
        case "rock":
          humanScore++;
          console.log("You win! Paper beats rock!");
          break;
        case "scissors":
          computerScore++;
          console.log("You lose! Scissors beats paper!");
          break;
      }
    } 
    else if (humanChoice === "scissors") {
      switch (computerChoice) {
        case "rock":
          computerScore++;
          console.log("You lose! Rock beats scissors!");
          break;
        case "paper":
          humanScore++;
          console.log("You win! Scissors beats paper!");
          break;
      }
    }
  }
}

function playGame() {
  let humanChoice;
  let computerChoice;

  for (let round = 0; round < 5; round++) {
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
  }
}

playGame();