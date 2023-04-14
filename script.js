const header = document.querySelector('h1.header');
const grid = document.querySelector('div.grid');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    var input = Number(prompt("Enter the number of squares per a side: "));
    if (valid(input)){
        clearGrid();
        drawGrid(input);
    } else{
        alert("Input was invalid");
    }
});

function valid(input){
    return input !== NaN && input > 0 && input <= 100;
}

function clearGrid(){
    const rows = document.querySelectorAll('div.row');
    rows.forEach(row => {
        const cells = row.querySelectorAll('div.cell');
        cells.forEach(cell => {row.removeChild(cell)});
        grid.removeChild(row);
    });

}

function drawGrid(squaresPerSide) {
    for (let i = 0; i < squaresPerSide; i++){
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < squaresPerSide; j++){
            const cell = document.createElement('div');
            cell.addEventListener("mouseover", (event) => {cell.classList.add('hover')});
            cell.classList.add('cell');
            row.appendChild(cell);
        }
        grid.appendChild(row);
    }
}

drawGrid(64);
