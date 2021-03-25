/* "single round of play" function. It takes 2 parameters, the player's choice and the computer's choice and determines the winner. It returns a string announcing the result. Both the player and computer choices need to be case insensitive. */

let answer = ["Rock", "Paper", "Scissors"];

function computerPlay() {
  return answer[Math.floor(Math.random() * answer.length)];
}

const computerSelection = computerPlay().toLowerCase;

function playRound(playerSelection, computerSelection) {
    var answer = "";
    switch(answer) {
      case playerSelection === "rock" && computerSelection === "paper":
      case playerSelection ===  "paper" && computerSelection === "scissors":
      case playerSelection === "scissors" && computerSelection === "rock":
        answer = "Unfortunately,YOU LOSE! You may have been defeated this round, but do not give up hope, you must perservere!";
        break;
      case playerSelection === "rock" && computerSelection === "rock":
      case playerSelection === "paper" && computerSelection === "paper":
      case playerSelection === "scissors" && computerSelection === "scissors":
        answer = "You Wiiiii...uhh...nope, it's a tie."
        break;
      case playerSelection === "rock" && computerSelection === "paper":
      case playerSelection === "paper" && computerSelection === "rock":
      case playerSelection === "scissors" && computerSelection === "paper":
          answer = "Congratulations, YOU WIN this round!"
        break; 
    }
    return answer;
  }

const playerSelection = "rock";
console.log(playRound(playerSelection, computerSelection));

