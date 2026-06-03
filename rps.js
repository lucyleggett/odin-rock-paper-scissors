/* 
Create function gameController, and within that:
- initialise score variables
- getComputerChoice, to record the computer's rps choice
- getHumanChoice, to record the player's rps choice
- countRounds, to track the number of turns taken and end the game after 5 rounds
- keepScore, to track points gained
Return all functions

Create function game, and within that:
- playRound, which will call the gameController functions

Create updateDOM to manage the UI
*/

function gameController() {
    let humanScore = 0;
    let computerScore = 0;

    const computerChoice = () => {
        let computerChoiceNum = Math.floor(Math.random() * (4 - 1) + 1);
        // if(computerChoiceNum === 1) return "Rock";
        // if(computerChoiceNum === 2) return "Paper";
        // if(computerChoiceNum === 3) return "Scissors";
        }
    
    const humanChoice = (humanInput) => {}
    
    const roundCount = () => { roundCount += 1; };

    const scoreCount = (roundWinner) => {
        if (roundWinner === "nobody...") return;
        else if (roundWinner === "you!") {
            humanScore += 1;
        } else {
            computerScore += 1;
        }
        return [humanScore, computerScore];
    }

    return { computerChoice, humanChoice, roundCount, scoreCount };
}

function playGame() {
    const playRound = (computerChoice, humanChoice) => {
        let roundWinner;
        if(humanChoice === computerChoice){
            roundWinner = "nobody...";
        } else if((computerChoice === 1 && humanChoice === 2)
        || (computerChoice === 2 && humanChoice === 3)
        || (computerChoice === 3 && humanChoice === 1)){
            roundWinner = "ç";
        } else if((computerChoice === 1 && humanChoice === 3)
        || (computerChoice === 2 && humanChoice === 1)
        || (computerChoice === 3 && humanChoice === 2)){
            roundWinner = "the computer.";
        }
        roundCount();
    }
}

function updateDOM() {
    const printRoundWinner = (computerChoice, humanChoice, roundWinner) => {
        const choiceMap = [null, "Rock", "Paper", "Scissors"];
        [computerChoice, humanChoice] = [choiceMap[computerChoice], choiceMap[humanChoice]];
        const roundResult = document.querySelector(".results");
        roundResult.textContent = `The computer played ${computerChoice} and you played ${humanChoice}. This round goes to ${roundWinner}`
    }

    const printGameWinner = (gameWinner) => {
        const scoreAnnouncement = document.createElement("p");
        const finalResults = document.querySelector(".results")
        if(gameWinner = "human") {
            finalResults.textContent = `You're a winner! Maybe man will keep his dominion over machine for a couple more decades, after all.`;
        } else if(gameWinner = "computer") {
            finalResults.textContent = `The computer said to tell you you're a dumb dumb loser...`
        } else if(gameWinner = "tie") {
            finalScores.textContent = `Damn, so you're really both as useless as each other... That's a tie!`
        }

    const printScores = () => {
        const humanTally = document.createElement("p");
        const computerTally = document.createElement("p");
        humanTally.textContent = `Your score: ${humanScore}`;
        computerTally.textContent = `Computer score: ${computerScore}`;
        }
    } 
}

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
    const roundResult = document.querySelector(".results");
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
    const humanTally = document.createElement("p");
    const computerTally = document.createElement("p");
    humanTally.textContent = `Your score: ${humanScore}`;
    computerTally.textContent = `Computer score: ${computerScore}`;
    if (humanScore > computerScore) {
        humanTally.style.color = "green";
        computerTally.style.color = "red";
    }
    else if (computerScore > humanScore) {
        humanTally.style.color = "red";
        computerTally.style.color = "green";
    }
    else {
        humanTally.style.color = "orange";
        computerTally.style.color = "orange";
    }
    roundResult.appendChild(humanTally);
    roundResult.appendChild(computerTally);
    getComputerChoice();
}

function endGame() {
    const finalScores = document.createElement("p");
    const finalResults = document.querySelector(".results")
    if (humanScore > computerScore) {
        finalScores.textContent = `You're a winner! Maybe man will keep his dominion over machine for a couple more decades, after all.`;
    }
    else if (computerScore > humanScore) {
        finalScores.textContent = `The computer said to tell you you're a dumb dumb loser...`;
    }
    else {
        finalScores.textContent = `Damn, so you're really both as useless as each other... That's a tie!`
    }
    finalResults.appendChild(finalScores);
    finalScores.className = "finalResult";
    rockButton.removeEventListener("click", playRock);
    paperButton.removeEventListener("click", playPaper);
    scissorsButton.removeEventListener("click", playScissors);
}