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

function Score() {
    const players = [
        { name: "human", score: 0, },
        { name: "computer", score: 0 },
    ]

    const getScore = (player) => { 
        const specificPlayer = players.find(p => p.name === player);
        return specificPlayer.score;
    };

    const awardPoint = (roundWinner) => {
        if (roundWinner === "nobody...") return;
        else if (roundWinner === "you!") players[0].score =+ 1;
        else players[1].score += 1;
    }
    return { getScore, awardPoint };
}

function Round() {
    let roundCount = 0;
    const getCount = () => roundCount;

    const incrementCount = () => { roundCount += 1; };

    return { getCount, incrementCount };
}

function GameController() {
    const dom = DomController();
    const round = Round();
    const score = Score();
    const rpsButtons = document.querySelectorAll(".rps");

    rpsButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            let humanChoice = event.target.innerText;
            playRound(humanChoice);
        });
    });

    const getComputerChoice = () => {
        const computerChoiceNum = Math.floor(Math.random() * (4 - 1) + 1);
        const choiceMap = [null, "Rock", "Paper", "Scissors"];
        return [choiceMap[computerChoiceNum]];
    }

    const playRound = (humanChoice) => {
        if (round.getCount() >= 5) return;
        let roundWinner;
        const computerChoice = getComputerChoice();

        if(humanChoice === computerChoice){
            roundWinner = "nobody...";
        } else if((computerChoice === "Rock" && humanChoice === "Paper")
        || (computerChoice === "Paper" && humanChoice === "Scissors")
        || (computerChoice === "Scissors" && humanChoice === "Rock")){
            roundWinner = "you!";
        } else if((computerChoice === "Rock" && humanChoice === "Scissors")
        || (computerChoice === "Paper" && humanChoice === "Rock")
        || (computerChoice === "Scissors" && humanChoice === "Paper")){
            roundWinner = "the computer.";
        }
        round.incrementCount();
        score.awardPoint(roundWinner);
        dom.printRoundWinner(computerChoice, humanChoice, roundWinner);
        dom.printScores();
        if (round.getCount() === 5) {
            dom.printGameWinner();
        }
    };
}

function DomController() {
    const score = Score();

    const printRoundWinner = (computerChoice, humanChoice, roundWinner) => {
        const roundResult = document.querySelector(".results");
        roundResult.textContent = `The computer played ${computerChoice} and you played ${humanChoice}. This round goes to ${roundWinner}`;
    }

    const printGameWinner = () => {
        const humanScore = getScore("human");
        const computerScore = getScore("computer");

        const scoreAnnouncement = document.createElement("p");
        const finalResults = document.querySelector(".results");

        if(humanScore > computerScore) {
            finalResults.textContent = `You're a winner! Maybe man will keep his dominion over machine for a couple more decades, after all.`;
        } else if(computerScore > humanScore) {
            finalResults.textContent = `The computer said to tell you you're a dumb dumb loser...`
        } else {
            finalResults.textContent = `Damn, so you're really both as useless as each other... That's a tie!`
        }
    }

    const printScores = () => {
        const humanScore = score.getScore("human");
        const computerScore = score.getScore("computer");
        const tally = document.querySelector(".tally");

        tally.textContent = `Your score: ${humanScore} | Computer score: ${computerScore}`;
        }

    return { printRoundWinner, printGameWinner, printScores };

}

const game = GameController();