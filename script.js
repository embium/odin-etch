const gridElement = document.querySelector(".grid");
const currentSizeElement = document.querySelector(".current-size");
const selectSizeElement = document.querySelector("#select-size");
const applySizeElement = document.querySelector("#apply-size");
let gridSize = 8;

function createGrid(gridSize) {
    for (i = 0; i < gridSize * gridSize; i++) {
        const div = document.createElement("div")
        const size = gridElement.clientWidth / gridSize;
        div.classList.add("box");
        div.style.width = `${size}px`;
        div.style.height = `${size}px`;
        gridElement.appendChild(div);

    }
}

function clear() {
    while (gridElement.firstChild) {
        gridElement.removeChild(gridElement.lastChild);
    }
    createGrid(gridSize);
}

mousedown = false;
document.body.onmousedown = () => mousedown = true;
document.body.onmouseup = () => mousedown = false;

gridElement.addEventListener("mouseover", function (e) {
    if (mousedown) {
        if (e.target.matches(".box")) {
            e.target.classList.add("active");
        }
    }
});

currentSizeElement.textContent = `${gridSize} x ${gridSize}`
selectSizeElement.addEventListener("input", function (e) {
    gridSize = e.target.value;
    currentSizeElement.textContent = `${gridSize} x ${gridSize}`;
});
applySizeElement.addEventListener("click", clear)

createGrid(gridSize)