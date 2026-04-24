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

function playRound(humanChoice,computerChoice) {
    if(humanChoice === computerChoice){
        console.log(`The computer played ${computerChoice}.`),
        console.log(`You played ${humanChoice}.`),
        console.log(`It's a tie...`);
        console.log(`Your score: ${humanScore}\nComputer score: ${computerScore}`);
    }
    else if((computerChoice === "Rock" && humanChoice === "Paper")
    || (computerChoice === "Paper" && humanChoice === "Scissors")
    || (computerChoice === "Scissors" && humanChoice === "Rock")){
        humanScore += 1,
        console.log(`The computer played ${computerChoice}.`),
        console.log(`You played ${humanChoice}.`),
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`),
        console.log(`Your score: ${humanScore}\nComputer score: ${computerScore}`);
        }
    else if((computerChoice === "Rock" && humanChoice === "Scissors")
    || (computerChoice === "Paper" && humanChoice === "Rock")
    || (computerChoice === "Scissors" && humanChoice === "Paper")){
        computerScore += 1,
        console.log(`The computer played ${computerChoice}.`),
        console.log(`You played ${humanChoice}.`),
        console.log(`Tough luck! ${computerChoice} beats ${humanChoice}.`),
        console.log(`Your score: ${humanScore}\nComputer score: ${computerScore}`);
    }
}

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click",() => {
    return humanChoice = "Rock";
})

paperButton.addEventListener("click",() => {
    return humanChoice = "Paper";
})

scissorsButton.addEventListener("click",() => {
    return humanChoice = "Scissors";
})

// function playGame(){
//     //Round 1
//     let computerChoice = getComputerChoice();
//     let humanChoice = getHumanChoice();
//     playRound(humanChoice,computerChoice);

//     //Round 2
//     computerChoice = getComputerChoice();
//     humanChoice = getHumanChoice();
//     playRound(humanChoice,computerChoice);

//     //Round 3
//     computerChoice = getComputerChoice();
//     humanChoice = getHumanChoice();
//     playRound(humanChoice,computerChoice);

//     //Round 4
//     computerChoice = getComputerChoice();
//     humanChoice = getHumanChoice();
//     playRound(humanChoice,computerChoice);

//     //Round 5
//     computerChoice = getComputerChoice();
//     humanChoice = getHumanChoice();
//     playRound(humanChoice,computerChoice);
    
//     //Works out who is the winner
//     if(humanScore > computerScore){
//         victoryMessage = "Congratulations! You won!";
//     } else {
//         victoryMessage = "Tough luck! The computer won.";
//     }

//     //Announces the winner
//     console.log(`Final scores are ${humanScore} to you and ${computerScore} to the computer. ${victoryMessage}`)
// }

// playGame();