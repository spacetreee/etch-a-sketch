const container = document.querySelector('.container');
const divs = document.createElement('div');


let gridSize = 4;
for (i = 0; i < gridSize; i++) {
    for (j = 0; j < gridSize; j++) {
        const divs = document.createElement('div');
        divs.classList.add('gridCell');
        container.appendChild(divs);
    }
}

const gridCells = document.querySelectorAll('.gridCell');

function mouseEvent(e) {
    e.target.style.color = 'blue';
}

gridCells.forEach( (cell) => {
    cell.addEventListener('mouseover', mouseEvent)
})