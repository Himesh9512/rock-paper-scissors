function game() {
    let playerScore = 0;
    let computerScore = 0;

    const playerScoreBoard = document.getElementById('you');
    const computerScoreBoard = document.getElementById('computer');
    const result = document.getElementById('winner');
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {

            let playerChoice = button.innerText;
            let computerChoice = getComputerChoice();
            playerChoice = playerChoice.toLowerCase();

            let winner = playerSelection(playerChoice, computerChoice);
            result.innerText = winner;

            if (playerScore === 5 || computerScore === 5){
                return resetGame();
            }
        })
    })
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
    function resetGame () {
        
    }
}

game();