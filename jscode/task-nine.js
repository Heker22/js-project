
const slides = document.querySelectorAll('.slide__item');

const slideList = document.querySelector('.slide__list');

const btnPrev = document.querySelectorAll('.slide__btn')[0];

const btnNext = document.querySelectorAll('.slide__btn')[1];

let index = 0;

function moveslider() {
    const slideWidth = slides[0].clientWidth;
    slideList.style.transform = `translateX(-${index * slideWidth}px)`;

}

btnPrev.addEventListener('click', () => {

    index--;
    if (index < 0) index = slides.length - 1;
    moveslider();
})

btnNext.addEventListener('click', () => {

    index++;
    if (index >= slides.length ) index = 0;
    moveslider();
})

window.addEventListener('load', moveslider);

window.addEventListener('resize', moveslider);
