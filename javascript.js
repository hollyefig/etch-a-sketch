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
  cellColor === colorPicker.value
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
  function ColorToHex(color) {
    let hexadecimal = color.toString(16);
    return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
  }

  function ConvertRGBtoHex(red, green, blue) {
    return "#" + ColorToHex(red) + ColorToHex(green) + ColorToHex(blue);
  }

  if (e.style.backgroundColor === "") {
    e.style.backgroundColor = colorPicker.value;
  } else {
    console.log("color taken");
    let rgb = e.style.backgroundColor;
    let r = rgb.slice(4, 7);
    let g = rgb.slice(9, 12);
    let b = rgb.slice(14, 17);
    let newValue = ConvertRGBtoHex(Number(r), Number(g), Number(b));
    colorPicker.value = newValue;
  }
};

console.log("original value", colorPicker.value);
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
