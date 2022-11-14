// defining player scores
let playerScore = 0;
let computerScore = 0;

const playerScoreBoard = document.getElementById('you');
const computerScoreBoard = document.getElementById('computer');
const result = document.getElementById('result');
const buttons = document.querySelectorAll('button');
const afterGameOver = document.getElementById('reset');

// listen for player click and start game
buttons.forEach(button => {
    button.addEventListener('click', () => {

        let playerChoice = button.innerText;
        let computerChoice = getComputerChoice();
        playerChoice = playerChoice.toLowerCase();

        let winner = playerSelection(playerChoice, computerChoice);
        result.innerText = winner;

        if (playerScore === 5) {
            return afterWin(playerScoreBoard.id);
        } else if (computerScore === 5) {
            return afterWin(computerScoreBoard.id);
        }
    })
})

// compare both value and return results
function playerSelection(player, computer) {
    if (player === computer) {
        return "Tied";
    } else if (player === "rock") {
        if (computer === "paper") {
            computerScore++;
            computerScoreBoard.textContent = computerScore;
            return "Paper Beats Rock!";
        } else {
            playerScore++;
            playerScoreBoard.textContent = playerScore;
            return "You Won!";
        }
    } else if (player === "paper") {
        if (computer === "scissors") {
            computerScore++;
            computerScoreBoard.textContent = computerScore;
            return "Scissor Beats Paper!";
        } else {
            playerScore++;
            playerScoreBoard.textContent = playerScore;
            return "You Won!";
        }
    } else if (player === "scissors") {
        if (computer === "rock") {
            computerScore++;
            computerScoreBoard.textContent = computerScore;
            return "Rock Beats Scissors!";
        } else {
            playerScore++;
            playerScoreBoard.textContent = playerScore;
            return "You Won!";
        }
    } else {
        return 'ERROR';
    }
}

// get random value for computer
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

// process after winner declared
function afterWin(winner) {

    if (winner === 'you') {
        result.innerText = "You conquered machines!";
    } else {
        result.innerText = "Machines Win! Try Again";
    }
    createResetBtn();
    btnDisable();

    // reset the page
    function resetPage(){
        window.location.reload();
    }
    // disable all buttons so player cant play further
    function btnDisable() {
        buttons.forEach(button => {
            button.disabled = true;
        })
    }
    // create reset button after winning match
    function createResetBtn() {
        const resetBtn = document.createElement('button');

        resetBtn.classList.add('resetBtn');
        resetBtn.textContent = "Play Again";
        afterGameOver.appendChild(resetBtn);

        resetBtn.disabled = false;
        resetBtn.addEventListener('click', resetPage)
    }
}
