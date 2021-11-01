const gridContainer = document.querySelector(".gridContainer");

function newGrid(gridHeight) {
    for (i=0; i<(gridHeight**2); i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        gridContainer.appendChild(square);
    }
    gridContainer.style.gridTemplateColumns = `repeat(${gridHeight}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridHeight}, 1fr)`;
    document.querySelectorAll(".square").forEach((square) => {
        square.addEventListener("mouseover", hover);
        square.addEventListener("mouseout", normal);
        square.addEventListener("mousemove", fill);
    });
}

let gridHeight = 16;
newGrid(gridHeight);

function hover(e) {
    e.target.classList.add("hover");
}

function normal(e) {
    e.target.classList.remove("hover");
}

function fill(e) {
    if (e.buttons == 0) {
        return;
    } else {
        e.target.classList.add("filled");
    }
}

const clear = document.querySelector(".clear");

clear.addEventListener("click", resetGrid);

function resetGrid() {
    document.querySelectorAll(".square").forEach((square) => {
        square.classList.remove("filled");
    });
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    let newGridHeight = prompt("Enter number of squares for height of new grid:", "Height (in squares)")
    newGridHeight = Number(newGridHeight);
    newGrid(newGridHeight);
}
