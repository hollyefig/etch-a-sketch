// default grid number
let input = document.querySelector("#input"),
  gridSize = input.value,
  gridWrapper = document.getElementById("gridWrapper"),
  colorPicker = document.getElementById("colorPicker"),
  cellColor = colorPicker.value,
  eraserButton = document.getElementById("eraser"),
  clearButton = document.getElementById("save");

const draw = (e) => (e.target.style.backgroundColor = cellColor);
const createGrid = () => {
  clearGrid();
  gridSize = input.value;
  gridWrapper.style.cssText = `grid-template-rows: repeat(${gridSize}, auto);
    grid-template-columns: repeat(${gridSize}, auto);`;

  // create box and array to hold boxes
  let cells = gridSize * gridSize;
  for (i = 0; i < cells; i++) {
    const square = document.createElement("div");
    square.addEventListener("mouseenter", draw);
    gridWrapper.appendChild(square);
  }
};

const changeGridSize = (n) => {
  gridSize = n;
  createGrid();
};

const changeColor = () => (cellColor = colorPicker.value);

const erase = () => {
  cellColor === colorPicker.value
    ? (cellColor = "#f6f6f6")
    : (cellColor = colorPicker.value);
  eraserButton.classList.toggle("eraserActive");
};

const clearGrid = () => {
  while (gridWrapper.firstChild)
    gridWrapper.removeChild(gridWrapper.firstChild);
};

createGrid();
