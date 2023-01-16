const rockPaperScissors = ['rock', 'paper', 'scissors'];
const startButton = document.querySelector('.start');
const playerButtons = document.querySelectorAll('.playerinput');
const computerButtons = document.querySelectorAll('.computerchoice');
const result = document.querySelector('#results');
const scoreDisplay = document.getElementById('score');
const iconAttButton = document.getElementById('icon-attribution-button');
const iconAttDiv = document.getElementById('icon-popup');

let outcome;
let computerScore;
let playerScore;

startNewGame();

iconAttButton.addEventListener('click', displayAttribution);

playerButtons.forEach(function (button) {
    button.addEventListener('click', playRound);
});

startButton.addEventListener('click', startNewGame);

function playRound(event) {
    resetButtonsDisplay();

    let playerSelection = this.id;
    let playerButton = document.getElementById(this.id);
    let computerSelection = rockPaperScissors[(Math.floor(Math.random() * 3))];
    let computerButton = document.getElementById(`computer-${computerSelection}`);

    computerButton.style.cssText = 'background: #3a7470;';
    playerButton.style.cssText = 'background: #3a7470;';

    if (computerSelection == playerSelection) {
        result.textContent = `It's a draw! Try again...`;
        outcome = 'draw'
    }
    else if ((playerSelection == 'rock' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'rock')) {
        result.textContent = `The computer wins this round...`;
        outcome = 'computer'
    } else {
        result.textContent = `You win this round!`;
        outcome = 'player'
    }

    if (outcome == 'computer') {
        computerScore++;
    } else if (outcome == 'player') {
        playerScore++;
    }

    scoreDisplay.style.cssText = 'visibility: visible;';
    scoreDisplay.textContent = `${playerScore} - ${computerScore}`

    playGame();

    return;
}

function playGame() {
    if ((playerScore == 5) || (computerScore == 5)) {
        if (playerScore > computerScore) {
            result.textContent = ` You won the game!`
        } else {
            result.textContent = ` You lost the game!`
        }
        startButton.style.cssText = 'visibility: visible;';
        playerButtons.forEach(function (button) {
            button.removeEventListener('click', playRound);
        });
    }
}

function startNewGame() {
    startButton.style.cssText = 'visibility: hidden;';
    playerButtons.forEach(function (button) {
        button.addEventListener('click', playRound);
    });

    resetButtonsDisplay();

    scoreDisplay.style.cssText = 'visibility: hidden;';

    computerScore = 0;
    playerScore = 0;

    result.textContent = 'Play rock, paper, or scissors to begin...';
}

function resetButtonsDisplay() {
    computerButtons.forEach((button) => {
        button.style.cssText = 'background: #679082;';
    })

    playerButtons.forEach((button) => {
        button.style.cssText = 'background: #679082;';
    })
    return;
}

function displayAttribution() {
    iconAttDiv.classList.toggle('hidden');
}