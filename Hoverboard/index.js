const container = document.getElementById('container')
const SQUARES = 500

for (let index = 0; index < SQUARES; index++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', function () {
        const color = getRandomColor();
        square.style.background = color;
        square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
    });

    square.addEventListener('mouseout', function () {
        square.style.background = '#1d1d1d';
        square.style.boxShadow = `0 0 2px #1d1d1d`;
    });

    container.appendChild(square);
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var colour = '#';

    for (var i = 0; i < 6; i++) {
        colour += letters[Math.floor(Math.random() * 16)];
    }
    return colour;
}