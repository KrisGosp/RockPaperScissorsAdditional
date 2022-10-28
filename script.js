const buttons = document.querySelectorAll('button');
const currentPlay = document.querySelector('.current-play');
const player = document.querySelector('.player');
const computer = document.querySelector('.computer');
const playAgain = document.querySelector('.play-again');

const computerPlay = () => {
    let random = Math.floor(Math.random() * 3);

    switch (random) {
        case 0: return 'Rock';
        case 1: return 'Paper';
        case 2: return 'Scissors';
    };
};

const playSingleHand = (playerChoice, computerChoice) => {
    let score = 0;

    if (playerChoice === 'Paper' && computerChoice === 'Scissors') {
        computer.innerText = Number(computer.innerText) + 1;
        currentPlay.innerText = 'Paper loses to Scissors!'
        score--;
    } else if (playerChoice === 'Scissors' && computerChoice === 'Rock') {
        computer.innerText = Number(computer.innerText) + 1;
        currentPlay.innerText = ' Scissors loses to Rock!';
        score--;
    } else if (playerChoice === 'Rock' && computerChoice === 'Paper') {
        computer.innerText = Number(computer.innerText) + 1;
        currentPlay.innerText = 'Rock loses to Paper!'
        score--;
    } else if (playerChoice === 'Rock' && computerChoice === 'Scissors') {
        player.innerText = Number(player.innerText) + 1;
        currentPlay.innerText = ' Rock beats Scissors!';
        score++;
    } else if (playerChoice === 'Paper' && computerChoice === 'Rock') {
        player.innerText = Number(player.innerText) + 1;
        currentPlay.innerText = 'Paper beats Rock!';
        score++;
    } else if (playerChoice === 'Scissors' && computerChoice === 'Paper') {
        player.innerText = Number(player.innerText) + 1;
        currentPlay.innerText = 'Scissors beats Paper!';
        score++;
    } else if (playerChoice === computerChoice) {
        currentPlay.innerText = 'Tie! Keep on playing...';
    };
    return score;
};

let playerScore = 0;
let computerScore = 0;

const checkForWin = (score) => {

    if (score === -1) {
        console.log('-1')
        computerScore++;
    } else if (score === 1) {
        console.log('1')
        playerScore += 1;
    };

    if (computerScore === 5) {
        currentPlay.innerText = `Computer wins: ${computerScore} to ${playerScore}`;
        playAgain.style.display = 'block';
        buttons.forEach(button => button.style.display = 'none');
    } else if (playerScore === 5) {
        currentPlay.innerText = `You win: ${playerScore} to ${computerScore}`;
        playAgain.style.display = 'block';
        buttons.forEach(button => button.style.display = 'none');
    };

};

buttons.forEach(button => {
    let score;
    button.addEventListener('click', (e) => {
        currentPlay.innerText = 'Playing...';
        setTimeout(() => {
            score = playSingleHand(e.target.innerText, computerPlay());
            checkForWin(score);
        }, 400)
    });
});