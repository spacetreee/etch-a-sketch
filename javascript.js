const container = document.querySelector('.container');
const divs = document.createElement('div');

//cursor code
const slider = document.querySelector('#myRange');
let gridSize = slider.value;
container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
createGrid();
const gridCells = document.querySelectorAll('.gridCell');
addEvent(gridCells);

slider.addEventListener('mouseup', newGrid);

function newGrid() {
    gridSize = slider.value;
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    createGrid();
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    const gridCells2 = document.querySelectorAll('.gridCell');
    addEvent(gridCells2);
}

function createGrid() {
    for (i = 0; i < gridSize; i++) {
        for (j = 0; j < gridSize; j++) {
            const divs = document.createElement('div');
            divs.classList.add('gridCell');
            container.appendChild(divs);
        }
    };
}

function addEvent(grid) {
    grid.forEach( (cell) => {
    cell.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'black';
    })
});
}

const erasebtn = document.querySelector('#erase');
erasebtn.addEventListener('click', () => {
    console.log('click');
    gridCells.forEach( (cell) => {
        cell.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'white';
        })
    })
})
