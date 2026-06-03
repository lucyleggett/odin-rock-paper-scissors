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

    const getComputerChoice = () => {
        let computerChoiceNum = Math.floor(Math.random() * (4 - 1) + 1);
        }
    
    const roundCount = () => { 
        roundCount += 1;
        return roundCount === 5;
    };

    const scoreCount = (roundWinner) => {
        if (roundWinner === "nobody...") return;
        else if (roundWinner === "you!") {
            humanScore += 1;
        } else {
            computerScore += 1;
        }
        return [humanScore, computerScore];
    }

    const playRound = (computerChoice, humanChoice) => {
        let roundWinner;
        if(humanChoice === computerChoice){
            roundWinner = "nobody...";
        } else if((computerChoice === 1 && humanChoice === 2)
        || (computerChoice === 2 && humanChoice === 3)
        || (computerChoice === 3 && humanChoice === 1)){
            roundWinner = "you!";
        } else if((computerChoice === 1 && humanChoice === 3)
        || (computerChoice === 2 && humanChoice === 1)
        || (computerChoice === 3 && humanChoice === 2)){
            roundWinner = "the computer.";
        }
        roundCount();
        scoreCount(roundWinner);
        printRoundWinner(computerChoice, humanChoice, roundWinner);
        printScores(humanScore, computerScore);

        if (roundCount()) {
            printGameWinner(scoreCount);
        }
    }

    return { getComputerChoice, getHumanChoice, roundCount, scoreCount };
}

function domController() {

    const getHumanInput = (roundCount) => {
        if (!roundCount()){
            const rpsButtons = document.querySelectorAll(".rps");
            const controller = new AbortController();
            rpsButtons.forEach(button => {
                button.addEventListener("click", (event) => {
                    const humanChoice = event.target.id;
                    return humanChoice;
                }, { signal: controller.signal });
            })
        } else {
            controller.abort();
        }
    }
    
    const printRoundWinner = (getComputerChoice, getHumanChoice, roundWinner) => {
        const choiceMap = [null, "Rock", "Paper", "Scissors"];
        [computerChoice, humanChoice] = [choiceMap[computerChoice], choiceMap[humanChoice]];
        const roundResult = document.querySelector(".results");
        roundResult.textContent = `The computer played ${computerChoice} and you played ${humanChoice}. This round goes to ${roundWinner}`;
    }

    const printGameWinner = (scoreCount) => {
        const scoreAnnouncement = document.createElement("p");
        const finalResults = document.querySelector(".results");
        if(scoreCount[0] > scoreCount[1]) {
            finalResults.textContent = `You're a winner! Maybe man will keep his dominion over machine for a couple more decades, after all.`;
        } else if(scoreCount[1] > scoreCount[0]) {
            finalResults.textContent = `The computer said to tell you you're a dumb dumb loser...`
        } else {
            finalScores.textContent = `Damn, so you're really both as useless as each other... That's a tie!`
        }
    }

    const printScores = (humanScore, computerScore) => {
        const humanTally = document.createElement("p");
        const computerTally = document.createElement("p");
        humanTally.textContent = `Your score: ${humanScore}`;
        computerTally.textContent = `Computer score: ${computerScore}`;
        }

    return { getHumanInput, printRoundWinner, printGameWinner, printScores }

}