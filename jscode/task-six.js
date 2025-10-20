
const dino = document.querySelector('.dino__one');

const cactus = document.querySelector('.dino__two');

const startBtn = document.querySelector('.dino__start');

const gameOverText = document.querySelector('.dino__game-over');

let isJumping = false;

let isGameOver = false;

let cactusInterval;

let cactusPosition = 600;

function startGame() {

    gameOverText.style.display = 'none';

    cactusPosition = 600;

    cactus.style.right = '-100px';

    dino.style.bottom = '0px';

    isGameOver = false;

    clearInterval(cactusInterval);

    cactusInterval = setInterval(moveCactus, 20);

}

function moveCactus() {

    /*const cactusRight = parseInt(getComputedStyle(cactus).getPropertyValue('right'));*/

    if (isGameOver) return;

    cactusPosition -= 5;

    cactus.style.left = cactusPosition + 'px';

    if (cactusPosition < -100) {
        cactusPosition = 600;
    }

    /*if (cactusRight > 700) {
        cactus.style.right = '-100px';
    }

    else {
        cactus.style.right = cactusRight + 5 + 'px';
    }*/

    const dinoBottom = parseInt(getComputedStyle(dino).getPropertyValue('bottom'));

    if (cactusPosition > 100 && cactusPosition < 160 && dinoBottom < 60) {
        endGame();
    }
}

function jump() {

    if (isJumping) return;

    isJumping = true;

    let up = 0;


    const jumpUp = setInterval(() => {
        if (up >= 120) {
            clearInterval(jumpUp)

            const jumpDown = setInterval(() => {
                if (up <= 0) {
                    clearInterval(jumpDown);
                    isJumping = false;
                } else {
                    up -= 5;
                    dino.style.bottom = up + 'px';
                }

            }, 20);
        } else {
            up += 5;

            dino.style.bottom = up + 'px';
        }
    }, 20)
}

function endGame() {

    clearInterval(cactusInterval);

    isGameOver = true;

    gameOverText.style.display = 'block';
}

startBtn.addEventListener('click', startGame);

document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        e.preventDefault()

        if(!isGameOver) jump();
    }
})