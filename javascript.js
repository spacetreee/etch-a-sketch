const container = document.querySelector('.container');
const divs = document.createElement('div');

const slider = document.querySelector('#myRange');
let gridSize = slider.value;
container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
createGrid();
//const gridCells = document.querySelectorAll('.gridCell');


const drawbtn = document.querySelector('#draw');
drawbtn.addEventListener('click', draw);

function draw() {
    const drawGridCells = document.querySelectorAll('.gridCell');
    drawGridCells.forEach( (cell) => { 
        cell.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'black';
        });
    });
}

slider.addEventListener('mouseup', newGrid);

function newGrid() {
    gridSize = slider.value;
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    createGrid();
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    const gridCells = document.querySelectorAll('.gridCell');
    addEvent(gridCells);
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
erasebtn.addEventListener('click', erase);

function erase() {
    const eraseGridCells = document.querySelectorAll('.gridCell');
    eraseGridCells.forEach( (cell) => { 
        cell.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'white';
        });
    });
}