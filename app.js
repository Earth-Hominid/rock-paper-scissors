let playerSelection
let computerSelection
var result = playRound()

const displayResult = document.getElementById('result')
const computerChoice = document.getElementById('computer-choice')
const randomNumber = Math.round(Math.random() * (3))
const userChoice = document.getElementById('user-choice')
const possibleChoices = document.querySelectorAll('.button')


// get playerSelection
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) =>  {
  playerSelection = e.target.id
  generateComputerChoice()
  playRound()
  userChoice.innerHTML = playerSelection
  computerChoice.innerHTML = computerSelection
  displayResult.innerHTML = result
}))


//get a random computer choice
function generateComputerChoice() {
  if (randomNumber === 1) {
    return computerSelection = "rock"
  } else if (randomNumber === 2) {
    return computerSelection = "paper"
  } else if (randomNumber === 3) {
    return computerSelection = "scissors"
  }
}

// get playRound

function playRound() {
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