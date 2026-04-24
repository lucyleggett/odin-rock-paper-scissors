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
let roundCount = 0;

let humanChoice;

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

function playRock() {
    humanChoice = "Rock";
    let computerChoice = getComputerChoice();
    roundCount += 1;
    roundCount < 5 ? playRound(humanChoice, computerChoice): endGame();
}

function playPaper() {
    humanChoice = "Paper";
    let computerChoice = getComputerChoice();
    roundCount += 1;
    roundCount < 5 ? playRound(humanChoice, computerChoice): endGame();
}

function playScissors() {
    humanChoice = "Scissors";
    let computerChoice = getComputerChoice();
    roundCount += 1;
    roundCount < 5 ? playRound(humanChoice, computerChoice): endGame();
}

rockButton.addEventListener("click", playRock);
paperButton.addEventListener("click", playPaper);
scissorsButton.addEventListener("click", playScissors);

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

function playRound(humanChoice,computerChoice) {
    const roundResult = document.querySelector("#results");
    roundResult.style.whiteSpace = "pre-line";
    if(humanChoice === computerChoice){
        roundResult.textContent = `The computer played ${computerChoice} and you played ${humanChoice}. It's a tie...`;
    }
    else if((computerChoice === "Rock" && humanChoice === "Paper")
    || (computerChoice === "Paper" && humanChoice === "Scissors")
    || (computerChoice === "Scissors" && humanChoice === "Rock")){
        humanScore += 1;
        roundResult.textContent = `The computer played ${computerChoice} and you played ${humanChoice}. You win!`
        }
    else if((computerChoice === "Rock" && humanChoice === "Scissors")
    || (computerChoice === "Paper" && humanChoice === "Rock")
    || (computerChoice === "Scissors" && humanChoice === "Paper")){
        computerScore += 1;
        roundResult.textContent = `The computer played ${computerChoice} and you played ${humanChoice}. Tough luck, the computer wins!`
    }
    const scores = document.createElement("p");
    scores.style.whiteSpace = "pre-line";
    scores.textContent = `Your score: ${humanScore}\nComputer score: ${computerScore}`;
    roundResult.appendChild(scores);
    getComputerChoice();
}

function endGame() {
    const finalScores = document.createElement("h2");
    finalScores.style.whiteSpace = "pre-line";
    if (humanScore > computerScore) {
        finalScores.textContent = `You're a winner! Maybe man will keep his dominion over machine for a couple more decades, after all.`;
    }
    else if (computerScore < humanScore) {
        finalScores.textContent = `The computer said to tell you you're a dumb dumb loser...`;
    }
    results.appendChild(finalScores);
    rockButton.removeEventListener("click", playRock);
    paperButton.removeEventListener("click", playPaper);
    scissorsButton.removeEventListener("click", playScissors);
}