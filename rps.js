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
        return "rock";
    }
    else if(computerChoiceNum === 2){
        return "paper";
    }
    else if(computerChoiceNum === 3){
        return "scissors";
    }
}

let computerChoice = getComputerChoice();

//Returns the user's input
function getHumanChoice() {
    return prompt("Choose your weapon! Rock, Paper or Scissors?");
}

let humanChoice = getHumanChoice()

console.log(computerChoice);
console.log(humanChoice);