// get main elements from the page
const grid = document.getElementById("grid");
const colorPicker = document.getElementById("colorPicker");

// set up buttons to do stuff when clicked
document.getElementById("addRow").addEventListener("click", addRow);
document.getElementById("addCol").addEventListener("click", addColumn);
document.getElementById("removeRow").addEventListener("click", removeRow);
document.getElementById("removeCol").addEventListener("click", removeColumn);
document.getElementById("colorCell").addEventListener("click", colorSingleCell);
document.getElementById("colorUncolored").addEventListener("click", colorUncoloredCells);
document.getElementById("colorAll").addEventListener("click", colorAllCells);
document.getElementById("clearGrid").addEventListener("click", clearGrid);

// empty funcs for now, will add logic later
function addRow() {}
function addColumn() {}
function removeRow() {}
function removeColumn() {}
function colorSingleCell() {}
function colorUncoloredCells() {}
function colorAllCells() {}
function clearGrid() {}
