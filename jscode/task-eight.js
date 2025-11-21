
document.addEventListener('DOMContentLoaded', () => {

    const inputs = document.querySelectorAll('.guess__input');
    const result = document.querySelector('.guess__text');

    inputs.forEach(input => {
        input.addEventListener('input', () => {
            const values = Array.from(inputs)
                .map(i => Number(i.value))
                .filter(v => !isNaN(v))
            if (values.length > 0){
                const max = Math.max(...values)
                result.textContent = `Найбільше число, яке ви ввели - ${max}`
                result.style.color = 'green';
            }

            else{
                result.textContent = 'insert the numbers!'
            }
        })


    })

})