
const fiveInput = document.querySelector('.time__input');

const fiveForm = document.querySelector('.time__form');

const fiveText = document.querySelector('.time__text');

fiveForm.addEventListener('submit', (e) =>{

    e.preventDefault();

    const value = parseInt(fiveInput.value.trim());

    if(isNaN(value) || value < 0 ){
        fiveText.textContent = 'Please insert a number'
        fiveText.style.color = 'orange';

        return
    }

    const days = Math.floor(value / 86400);

    const hours = Math.floor((value % 86400) / 3600);

    const minutes = Math.floor((value % 3600) / 60 );

    const seconds = value % 60;

    fiveText.textContent = `${days} days ${hours}:${minutes}:${seconds}`;
})