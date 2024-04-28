function getComputerChoice () {
    const choiceArray = ["rock", "paper", "scissors"];
    const computerChoice = choiceArray[Math.floor(Math.random()*3)]
    return computerChoice;
}

function getHumanChoice () {
    const humanChoice = prompt('Rock, paper, scissors?', "");
    return humanChoice;
}

function playRound (humanChoice, computerChoice) {
    let isWin;
    let isDraw;
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === "rock") {
        if (computerChoice === "rock"){
            isDraw = true;
        } else if (computerChoice === "paper") {
            isWin = true;
            humanScore ++;
        } else if (computerChoice === "scissors") {
            isWin = false;
            computerScore ++;
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            isWin = true;
            humanScore ++;
        } else if (computerChoice === "paper") {
            isDraw = true;
        } else if (computerChoice === "scissors") {
            isWin = false;
            computerScore ++;
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            isWin = false;
            computerScore ++;
        } else if (computerChoice === "paper") {
            isWin = true;
            humanScore ++;
        } else if (computerChoice === "scissors") {
            isDraw = true;
        }
    }
    if (isDraw) {
        return "Draw! " + humanChoice + " vs " + computerChoice;
    } else {
        if (isWin) {
            return "You won! " + humanChoice + " vs " + computerChoice;
        } else if (!isWin) {
            return "You lost! " + humanChoice + " vs " + computerChoice;
        }
    }
}


function playGame (x){
    console.log("Playing " + x + " rounds!")
    for (let i = x; i > 0; i--) {
        console.log(playRound(getHumanChoice(), getComputerChoice()));
        console.log("Human score: " + humanScore);
        console.log("Computer score: " + computerScore)
    }
}

let humanScore = 0;
let computerScore = 0;

playGame(5);


