function createTable() {
    // Get the number of rows and columns from user input
    var numRows = parseInt(prompt("Input number of rows"), 10);
    var numCols = parseInt(prompt("Input number of columns"), 10);
    
    // Get the table element
    var table = document.getElementById("myTable");
    
    // Clear any existing content in the table
    table.innerHTML = "";
    
    // Create the table rows and cells
    for (var i = 0; i < numRows; i++) {
        // Create a new table row
        var row = document.createElement("tr");
        
        for (var j = 0; j < numCols; j++) {
            // Create a new table cell
            var cell = document.createElement("td");
            
            // Set the text of the cell
            cell.textContent = `Row-${i} Column-${j}`;
            
            // Append the cell to the row
            row.appendChild(cell);
        }
        
        // Append the row to the table
        table.appendChild(row);
    }
}
