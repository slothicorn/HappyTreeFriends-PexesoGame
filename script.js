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

const gameGrid = cardsArray.concat(cardsArray);

gameGrid.sort(() => {
    return 0.5 - Math.random();
});

const game = document.getElementById('game-board');
const grid = document.createElement('section');

grid.setAttribute('class', 'grid');
game.appendChild(grid);

for (let i = 0; i < gameGrid.length; i++) {
    let card = document.createElement('div');
    card.classList.add('card');

    card.dataset.name = gameGrid[i].name;

    card.style.backgroundImage = `url(${gameGrid[i].img})`;
    grid.appendChild(card);
}