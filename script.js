const cardsArray = [
    {
        name: 'Cuddles', img: 'https://github.com/slothicorn/Pexeso/blob/development/img/Cuddles.webp?raw=true'
    },
    {
        name: 'DiscoBear', img: 'https://github.com/slothicorn/Pexeso/blob/development/img/DiscoBear.webp?raw=true'
    },
    {
        name: 'Flaky', img: 'https://github.com/slothicorn/Pexeso/blob/development/img/Flaky.webp?raw=true'
    },
    {
        name: 'Flippy', img: 'https://github.com/slothicorn/Pexeso/blob/development/img/Flippy.webp?raw=true'
    },
    {
        name: 'Giggles', img: 'https://github.com/slothicorn/Pexeso/blob/development/img/Giggles.webp?raw=true'
    },
    {
        name: 'Handy', img: 'https://github.com/slothicorn/Pexeso/blob/development/img/Handy.webp?raw=true'
    },
    {
        name: 'Lumpy', img: 'https://github.com/slothicorn/Pexeso/blob/development/img/Lumpy.webp?raw=true'
    },
    {
        name: 'Mole', img: 'https://github.com/slothicorn/Pexeso/blob/development/img/Mime.webp?raw=true'
    },
    {
        name: 'Nutty', img: 'https://github.com/slothicorn/Pexeso/blob/development/img/Nutty.webp?raw=true'
    },
    {
        name: 'Petunia', img: 'https://github.com/slothicorn/Pexeso/blob/development/img/Petunia.webp?raw=true'
    },
    {
        name: 'Sniffles', img: 'https://github.com/slothicorn/Pexeso/blob/development/img/Sniffles.webp?raw=true'
    },
    {
        name: 'Toothy', img: 'https://github.com/slothicorn/Pexeso/blob/development/img/Toothy.webp?raw=true'
    }
]

const startNewGame = () => {

    const gameGrid = cardsArray.concat(cardsArray);

    gameGrid.sort(() => {
        return 0.5 - Math.random();
    });

    const game = document.getElementById('game-board');
    const grid = document.createElement('section');

    game.innerHTML = '';

    grid.setAttribute('class', 'grid');
    game.appendChild(grid);

    for (i = 0; i < gameGrid.length; i++) {
        const card = document.createElement('div');
        card.classList.add('card');

        card.dataset.name = gameGrid[i].name;

        const frontSide = document.createElement('div');
        frontSide.classList.add('front');

        const backSide = document.createElement('div');
        backSide.classList.add('back');
        backSide.style.backgroundImage = `url(${gameGrid[i].img})`;

        grid.appendChild(card);
        card.appendChild(frontSide);
        card.appendChild(backSide);
    }

    let firstGuess = '';
    let secondGuess = '';
    let count = 0;
    let previousTarget = null;
    const delay = 1000;

    const match = () => {
        const selected = document.querySelectorAll('.selected');

        for (i = 0; i < selected.length; i++) {
            selected[i].classList.add('match');
        }
    };

    const resetGuesses = () => {
        firstGuess = '';
        secondGuess = '';
        count = 0;
        previousTarget = null;

        const selected = document.querySelectorAll('.selected');
        for (i = 0; i < selected.length; i++) {
            selected[i].classList.remove('selected');
        }
    };

    grid.addEventListener('click', (event) => {
        const clicked = event.target;

        console.log(event.target);
        console.log(previousTarget);

        if (clicked.nodeName == 'SECTION' || clicked.parentNode == previousTarget?.parentNode || clicked.parentNode.classList.contains('match')) {
            return;
        }

        if (count < 2) {
            count++;
            if (count === 1) {
                firstGuess = clicked.parentNode.dataset.name;
                clicked.parentNode.classList.add('selected');
            } else {
                secondGuess = clicked.parentNode.dataset.name;
                clicked.parentNode.classList.add('selected');
            }

            if (firstGuess !== '' && secondGuess !== '') {
                if (firstGuess == secondGuess) {
                    setTimeout(match, delay);
                    setTimeout(resetGuesses, delay);
                } else {
                    setTimeout(resetGuesses, delay);
                }
            }
            previousTarget = clicked;
        }
    });
};

const button = `<button class="play-again-btn" data-play-again>Play again</button>`;

const body = document.querySelector('body');
body.innerHTML += button;

const buttonPlayAgain = document.querySelector('[data-play-again]');

buttonPlayAgain.addEventListener('click', () => {
    startNewGame();
});

startNewGame();