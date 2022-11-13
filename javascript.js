// default grid number
let input = document.querySelector("#input"),
  gridSize = input.value,
  gridWrapper = document.getElementById("gridWrapper"),
  colorPicker = document.getElementById("colorPicker"),
  cellColor = colorPicker.value,
  eraserButton = document.getElementById("eraser"),
  clearButton = document.getElementById("save"),
  colorsWrapper = document.getElementById("colorsWrapper");

const draw = (e) => (e.target.style.backgroundColor = cellColor);
const createGrid = () => {
  clearGrid();
  gridSize = input.value;
  gridWrapper.style.cssText = `grid-template-rows: repeat(${gridSize}, auto);
    grid-template-columns: repeat(${gridSize}, auto);`;

  // create boxes
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

const erase = () => {
  cellColor !== "#f6f6f6"
    ? (cellColor = "#f6f6f6")
    : (cellColor = colorPicker.value);
  eraserButton.classList.toggle("eraserActive");
};

const clearGrid = () => {
  while (gridWrapper.firstChild)
    gridWrapper.removeChild(gridWrapper.firstChild);
};

// color saver and picker
const colorSet = (e) => {
  e.style.backgroundColor === ""
    ? (e.style.backgroundColor = colorPicker.value)
    : (cellColor = e.style.backgroundColor);
};

// create radios for color slots
for (let i = 1; i <= 10; i++) {
  const colorSlot = document.createElement("input");
  colorSlot.setAttribute("type", "radio");
  colorSlot.setAttribute("id", `color${i}`);

  colorSlot.setAttribute("onclick", "colorSet(this)");
  colorsWrapper.appendChild(colorSlot);
}

const changeColor = () => (cellColor = colorPicker.value);

createGrid();
