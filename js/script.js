// get the input from user and convert into lowercase
function getPlayerChoice() {
    let userInput = prompt("rock,paper or scissors");
    userInput = userInput.toLowerCase();
    return userInput;
}

// generate random choice for computer
function getComputerChoice() {
    randomNum = Math.floor(Math.random() * 3);

    switch (randomNum) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

// check if user has entered valid parameter's
function checkUserInput(player) {
    if (player != "rock" && player != "paper" && player != "scissors") {
        return "Only rock,paper & scissors are allowed"
    } else {
        return playerSelection(playerChoice, computerChoice);
    }
}

// tell us who win!
function playerSelection(player, computer) {
    if (player === computer) {
        return "Tied";
    } else if (player === "rock") {
        if (computer === "paper") {
            return "You Lose! Paper Beats Rock";
        } else {
            return "You Won!";
        }
    } else if (player === "paper") {
        if (computer === "scissors") {
            return "You Lose! Scissor Beats Paper";
        } else {
            return "You Won!";
        }
    } else if (player === "scissors") {
        if (computer === "rock") {
            return "You Lose! Rock Beats Scissors";
        } else {
            return "You Won!";
        }
    } else {
        return null;
    }
}

// run the game for 5 rounds and decide the winner
function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        console.log("This is round" + " " + (i + 1) + ".");

        playerChoice = getPlayerChoice();
        computerChoice = getComputerChoice();

        console.log(`Your choice is ${playerChoice}`);
        console.log(`Computer\'s choice is ${computerChoice}`);

        result = checkUserInput(playerChoice);
        console.log(result);
        if (result === "Tied" || result === "Only rock,paper & scissors are allowed") {
            if (i === 0) {
                continue;
            } else {
                i--;
            }
        } else if (result === "You Won!") {
            playerScore++;
        } else {
            computerScore++;
        }
    } 
    if (playerChoice === computerChoice) {
        return "Match got Tied! Try Again";
    } else if (playerScore > computerScore) {
        return "You Conquered Machine\'s!";
    } else {
        return "Bad Luck! Try again next time";
    }
}

let playerChoice;
let computerChoice;

console.log(game());