/*
Create global variables humanScore and computerScore with initial value of 0.
Create variables "Rock", "Paper" and "Scissors" and assign them the values 1, 2 and 3 respectively.
Create function getComputerChoice to generate a random integer between 1 and 3.
Create function getHumanChoice to receive input as "Rock", "Paper" or "Scissors", or else return an error message. 
Define winning logic:
    If computerChoice === 1 and humanChoice === 2, humanScore +1
    If computerChoice === 1 and humanChoice === 3, computerScore +1
    If computerChoice === 2 and humanChoice === 1, computerScore +1
    If computerChoice === 2 and humanChoice === 3, humanScore +1
    If computerChoice === 3 and humanChoice === 1, humanScore +1
    If computerChoice === 3 and humanChoice === 2, computerScore +1
    Else if computerChoice === humanChoice, return nothing
Print humanChoice and computerChoice.
Print message declaring the winner.
Print humanScore and computerScore.
*/

let humanScore = 0;
let computerScore = 0;

//Returns a value between 1 (inclusive) and 4 (exclusive) at random.
function getComputerChoice() {
    let minCeiled = 1;
    let maxFloored = 4;
    let computerChoiceNum = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
    if(computerChoiceNum === 1){
        return "Rock";
    }
    else if(computerChoiceNum === 2){
        return "Paper";
    }
    else if(computerChoiceNum === 3){
        return "Scissors";
    }
}

//Returns the user's input amended to title case as standard.
function getHumanChoice() {
    let humanChoice = prompt("Choose your weapon! Rock, Paper or Scissors?");
    return humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
}

let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();

console.log(computerChoice);
console.log(humanChoice);

function playRound(humanChoice,computerChoice) {
    if(humanChoice === computerChoice){
        console.log(`It's a tie...You and the computer both chose ${humanChoice}.`);
    }
    else if((computerChoice === "Rock" && humanChoice === "Paper")
    || (computerChoice === "Paper" && humanChoice === "Scissors")
    || (computerChoice === "Scissors" && humanChoice === "Rock")){
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`),
        humanScore += 1;
        }
    else if((computerChoice === "Rock" && humanChoice === "Scissors")
    || (computerChoice === "Paper" && humanChoice === "Rock")
    || (computerChoice === "Scissors" && humanChoice === "Paper")){
        console.log(`Tough luck! ${computerChoice} beats ${humanChoice}.`),
        computerScore += 1;
    }
}

console.log(playRound(humanChoice,computerChoice));