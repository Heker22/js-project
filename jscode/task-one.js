
const form = document.querySelector('.form');

const input = document.querySelector('.hero__input');

const text = document.querySelector('.hero__text');

function isYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
};


form.addEventListener('submit', function (e) {
    e.preventDefault()

    const year = parseInt(input.value.trim());

    if (isNaN(year)) {

        text.textContent = 'Please insert your birth date';
        text.style.color = 'orange';
        return;
    }

    if (isYear(year)) {
        text.textContent = 'Ви народилися у високосний рік!';
        text.style.color = 'green';
    }

    else{
        text.textContent = 'Ви народилися не у високосний рік!';
        text.style.color = 'red';
    }
})


