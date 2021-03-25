/* "single round of play" function. It takes 2 parameters, the player's choice and the computer's choice and determines the winner. It returns a string announcing the result. Both the player and computer choices need to be case insensitive. */

let answer = ["Rock", "Paper", "Scissors"];

function computerPlay() {
  return answer[Math.floor(Math.random() * answer.length)];
}

const computerSelection = computerPlay().toLowerCase;

let playerSelection = prompt("What is your weapon of choice?").toLowerCase();

    switch(playerSelection) {
      case "rock":
        console.log("You choose a solid mass of minerals. Good luck!");
        break;
      case "paper":
        console.log("You choose lignocellulosic fibrous material prepared by chemically or mechanically separating cellulose fibers from wood. Good luck!");
        break;
      case "scissors":
        console.log("You choose a cutting instrument consisting of two blades. Good luck!");
        break;
        default:
          console.log("Our apologies, we do not accept answers such as this. If you wish to play, please pick either Rock, Paper, or Scissors.");
};

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


console.log(playRound(playerSelection, computerSelection));

