const firstInput = document.querySelector('.four__input.first');

const secondInp = document.querySelector('.four__input.second');

const result = document.querySelector('.four__result');

const opButtons = document.querySelectorAll('.four__btn.op');

const resBtn = document.querySelector('.four__btn.res');

let operator = null;

opButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        operator = btn.textContent.trim();
        opButtons.forEach(b => b.style.background = '');
        btn.style.background = '#ccc'
    })
});


resBtn.addEventListener('click', () => {
    const num1 = parseFloat(firstInput.value);
    const num2 = parseFloat(secondInp.value);

    if (isNaN(num1) || isNaN(num2)) {
        result.textContent = 'Please insert a number!'
        return
    }

    if (!operator) {
        result.textContent = 'Please choose the operation!';
        return
    }

    let res;

    switch (operator) {
        case '+':
            res = num1 + num2;
            break;

        case '-':
            res = num1 - num2;
            break;

        case '*':
            res = num1 * num2;
            break;

        case '/':
            res = num2 !== 0 ? num1 / num2 : 'cant divide to 0';
            break;
    }

    result.textContent = res
})





