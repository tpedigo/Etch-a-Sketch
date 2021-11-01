const container = document.querySelector(".container");

for (i=0; i<(16*16); i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
}

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

document.querySelectorAll(".square").forEach((square) => {
    square.addEventListener("mouseover", hover);
    square.addEventListener("mouseout", normal);
    square.addEventListener("mousemove", fill);
});