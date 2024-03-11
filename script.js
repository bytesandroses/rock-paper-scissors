function getComputerChoice() {
  let random_number = Math.random() * 3;
  random_number = Math.floor(random_number);
  
  let computerChoice;
  if (random_number === 0) {
    computerChoice = "Rock";
  } else if (random_number == 1) {
    computerChoice = "Paper";
  } else {
    computerChoice = "Scissors";
  }

  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  let result;

  if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      result = "You win! Rock beats Scissors";
    } else if (computerSelection === "paper") {
      result = "You lose! Paper beats Rock";
    } else if (computerSelection === "rock") {
      result = "You tie! Rock ties with Rock";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      result = "You win! Paper beats Rock";
    } else if (computerSelection === "scissors") {
      result = "You lose! Scissors beats Paper";
    } else if (computerSelection === "paper") {
      result = "You tie! Paper ties with Paper";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      result = "You win! Scissors beats paper"
    } else if (computerSelection === "rock") {
      result = "You lose! Rock beats Scissors";
    } else if (computerSelection === "scissors") {
      result = "You tie! Scissors ties with Scissors"
    }
  }
  return result;    
}

function playGame() {
  let playerWins = 0;
  let computerWins = 0;
  let result;

  for (let i = 0; i < 5; i++) {
    result = playRound(prompt(), getComputerChoice());
    if (result.includes("win")) {
      playerWins = playerWins + 1;
    } else if (result.includes("lose")) {
      computerWins = computerWins + 1;
    }
    console.log(result);
  }

  if (playerWins === computerWins) {
    return "You tied";
  } else if (playerWins > computerWins) {
    return "You won!";
  } else {
    return "You lose";
  }
}