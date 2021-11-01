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
        square.addEventListener("click", toggleFill);
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

function toggleFill(e) {
    if (e.target.classList.contains("filled")) {
        e.target.classList.remove("filled");
    } else {
        e.target.classList.add("filled");
    }
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
    let asking = true;
    while (asking) {
        let newGridHeight = prompt("Enter number of squares per side for new grid:", "Number (from 1 to 200)")
        if (newGridHeight > 0 && newGridHeight <= 200 && newGridHeight%1==0) {
            document.querySelectorAll(".square").forEach((square) => {
                square.classList.remove("filled");
            });
            while (gridContainer.firstChild) {
                gridContainer.removeChild(gridContainer.firstChild);
            }
            newGridHeight = Number(newGridHeight);
            newGrid(newGridHeight);
            asking = false;
        } else {
            alert("Invalid input. Make sure to enter a whole number between 1 and 200.")
            break;
        }
    }
}
