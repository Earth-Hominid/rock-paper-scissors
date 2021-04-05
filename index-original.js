

function computerPlay() {
      const answer = ['rock', 'paper', 'scissors'];
      const computerSelection = answer[Math.floor(Math.random() * answer.length)];
      return computerSelection;
    };

let compScore = 0;
let playerScore = 0;

function playRound(playerSelection, computerSelection) {
      if (computerSelection === playerSelection) {
         return result = "It's a tie!"
      } else if (computerSelection === "rock" && playerSelection === "paper") {
            playerScore ++;
            return result = "you win!";
      } else if (computerSelection === "rock" && playerSelection === "scissors") {
         compScore ++;   
         return result = "you lost";
      }   else if (computerSelection === "paper" && playerSelection === "rock") {
          compScore ++;
          return result = "you lost";
      }    else if (computerSelection === "paper" && playerSelection === "scissors") {
          playerScore ++;
          return result = "you win!"; 
      }     else if (computerSelection === "scissors" && playerSelection === "paper") {
           compScore ++;
           return result = "you lost";
      }      else if (computerSelection === "scissors" && playerSelection === "rock") {
            playerScore ++;
            return result = "you win!";
      }
};

function game () {
      for (let i = 0; i < 5; i++) {
            let playerSelection = prompt("What is your weapon of choice?").toLowerCase();
            const computerSelection = computerPlay();
            console.log(playRound(playerSelection, computerSelection))
      }
      if (playerScore > compScore) {
                  console.log("You win!");
            } else {
                  console.log("You have lost!");
            }
};

game();
