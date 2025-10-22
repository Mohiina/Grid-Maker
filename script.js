// get main elements from the page

    const grid = document.getElementById("grid");
    const colorPicker = document.getElementById("colorPicker");
  
  
    // add a new row
    function addRow() {
        // make new row
        const row = document.createElement("tr");
        // same num of cols as first row, or 1 if none
        const cols = grid.rows[0]?.cells.length || 1;

        // add cells
        for (let i = 0; i < cols; i++) {
            const cell = document.createElement("td");
            row.appendChild(cell);
        }

        // add row to grid
        grid.appendChild(row);
    }

    function addColumn() {
        // if no rows -> make 1 row + 1 cell
        if (grid.rows.length === 0) {
            const row = document.createElement("tr");
            const cell = document.createElement("td");
            row.appendChild(cell);
            grid.appendChild(row);
            return;
        }
    
        // add 1 cell to each row
        for (let i = 0; i < grid.rows.length; i++) {
            const cell = document.createElement("td");
            grid.rows[i].appendChild(cell);
        }
    }

    function removeRow() {
        // no rows -> nothing to rmv
        if (grid.rows.length === 0) return;
    
        // rmv last row
        grid.deleteRow(-1);
    }

    function removeColumn() {
        // no rows -> nothing to rmv
        if (grid.rows.length === 0) return;
    
        // check col count
        const cols = grid.rows[0].cells.length;
        if (cols === 0) return;
    
        // rmv last cell from each row
        for (let r of grid.rows) {
            r.deleteCell(-1);
        }
    }

    
    
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
    function colorSingleCell() {}
    function colorUncoloredCells() {}
    function colorAllCells() {}
    function clearGrid() {}
  
  