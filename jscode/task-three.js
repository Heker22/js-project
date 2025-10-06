
const buttons = document.querySelectorAll('.third__click');

const resultText = document.getElementById('resultText');

const computerScoreEl = document.getElementById('computerScore');

const userScoreEl = document.getElementById('userScore');

const computerBtn = document.getElementById('computerChoiceBtn');


const choices = ['камінь', 'ножиці', 'папір'];

let userScore = 0;

let computerScore = 0;

let userChoice = '';

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        userChoice = btn.dataset.choice;
        playRound();
    })
})

function playRound() {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = '';

    if (userChoice === computerChoice) {
        result = 'Нічия';
        resultText.style.color = 'orange'
    }

    else if (
        (userChoice === 'камінь' && computerChoice === 'ножиці') ||
        (userChoice === 'ножиці' && computerChoice === 'папір') ||
        (userChoice === 'папір' && computerChoice === 'камінь')
    ) {
        result = 'Ви виграли раунд!'
        resultText.style.color = 'green'
        userScore++;
    }

    else {
        result = 'Комп’ютер виграв!'
        resultText.style.color = 'red'
        computerScore++;
    }

    resultText.textContent = `${result} (${userChoice} vs ${computerChoice})`
    userScoreEl.textContent = `Ви - ${userScore} `
    computerScoreEl.textContent = `Комп’ютер - ${computerScore}`
    
}

computerBtn.addEventListener('click', () => {
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    resultText.textContent = `Комп’ютер обрав: ${computerChoice}`;
    resultText.style.color = 'blue'
})