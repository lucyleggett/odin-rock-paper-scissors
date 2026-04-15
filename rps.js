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

//Returns a value between 1 (inclusive) and 4 (exclusive) at random.

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(4);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

let computerChoice = getComputerChoice();

function getHumanChoice() {
    let humanChoice = prompt("Choose your weapon! Rock, Paper or Scissors?");
    if(humanChoice === "Rock") {
        return 1;}
    else if(humanChoice === "Paper") {
        return 2;}
    else if(humanChoice === "Scissors") {
        return 3;}
    else {
        prompt("Oops! That's not an option. Please try again.")}
}

let humanChoice = getHumanChoice();

function scoring() {
    if(humanChoice === computerChoice) {
        // does nothing
    } else if((computerChoice === 1 && humanChoice === 2) 
        || (computerChoice === 2 && humanChoice === 3)
        || (computerChoice === 3 && humanChoice === 1)) {
            humanScore += 1;
    } else if((computerChoice === 1 && humanChoice === 3)
        || (computerChoice === 2 && humanChoice === 1)
        || (computerChoice === 3 && humanChoice === 2)) {
            computerScore += 1;}
    }

