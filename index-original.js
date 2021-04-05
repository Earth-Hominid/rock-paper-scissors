

function playRound(playerSelection, computerSelection) {
  if (computerSelection === playerSelection) {
     return result = "It's a tie!"
  } else if (computerSelection === "rock" && playerSelection === "paper") {
     return result = "you win!"
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
     return result = "you lost";
}   else if (computerSelection === "paper" && playerSelection === "rock") {
      return result = "you lost";
}    else if (computerSelection === "paper" && playerSelection === "scissors") {
      return result = "you win!"; 
}     else if (computerSelection === "scissors" && playerSelection === "paper") {
       return result = "you lost";
}      else if (computerSelection === "scissors" && playerSelection === "rock") {
        return result = "you win!";
  }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

function computerPlay() {
  const answer = ['rock', 'paper', 'scissors'];
  const computerSelection = answer[Math.floor(Math.random() * answer.length)];
  return computerSelection;
}

