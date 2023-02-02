const container = document.querySelector('.container');

let gridSize = 4;
for (i = 0; i < gridSize; i++) {
    for (j = 0; j < gridSize; j++) {
        const div = document.createElement('div');
        container.appendChild(div);
    }
}