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