// get main elements from the page

    const grid = document.getElementById("grid");
    const colorPicker = document.getElementById("colorPicker");

    // adds a new row to the table
    function addRow() 
    {
      
        // make new row
        const row = document.createElement("tr");
        
        const cols = grid.rows[0]?.cells.length || 1; // get num of cols (same as first row or 1 if none)

        //add the cells
        for (let i = 0; i < cols; i++) {
          const cell = document.createElement("td");
          row.appendChild(cell);
        }

        grid.appendChild(row);
    }

    //set up buttons to do stuff when clicked
    document.getElementById("addRow").addEventListener("click", addRow);
    document.getElementById("addCol").addEventListener("click", addColumn);
    document.getElementById("removeRow").addEventListener("click", removeRow);
    document.getElementById("removeCol").addEventListener("click", removeColumn);
    document.getElementById("colorCell").addEventListener("click", colorSingleCell);
    document.getElementById("colorUncolored").addEventListener("click", colorUncoloredCells);
    document.getElementById("colorAll").addEventListener("click", colorAllCells);
    document.getElementById("clearGrid").addEventListener("click", clearGrid);

    

    //empty funcs for now, will add logic later
    function addColumn() {}
    function removeRow() {}
    function removeColumn() {}
    function colorSingleCell() {}
    function colorUncoloredCells() {}
    function colorAllCells() {}
    function clearGrid() {}


