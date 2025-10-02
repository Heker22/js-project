
const secretNumber = Math.floor(Math.random() * 10) + 1;

const secondForm = document.querySelector('.second-form');

const secondInput = document.querySelector('.second__input');

const secondText = document.querySelector('second__text');

secondForm.addEventListener('submit', function(e){
    e.preventDefault();

    const guess = parseInt(secondInput.value.trim());

    if(isNaN(guess) || guess < 1 || guess > 10 ){

        secondText.textContent = 'Please insert a number from 1 to 10';
        secondText.style.color = 'orange';
        return;
    }

    if(guess === secretNumber ){

        secondText.textContent = `Вітаю, ви вгадали число ${secretNumber}! `;
        secondText.style.color = 'green';
    }

    else{
        secondText.textContent = `Ви програли, комп’ютер загадав ${secretNumber}! `;
        secondText.style.color = 'red';
    }
})




