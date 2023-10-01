const gridModule=()=>{
    function createRedTable() {
        const table = document.createElement('table');
        const tbody = document.createElement('tbody');
        const gridArray = [];
        // Create a 10x10 table grid with red cells
        table.style.borderSpacing = '0'; 
        
        for (let i = 0; i < 10; i+=1) {
            const row = document.createElement('tr');
            const rows = [];
            for (let j = 0; j < 10; j+=1) {
    
                const cell = document.createElement('td');
                cell.style.height="50px";
                cell.style.width="50px";
                cell.style.border = '1px solid black'
                cell.addEventListener('click', () => {
                cell.style.backgroundColor = 'red';
            });
                row.appendChild(cell);
            rows.push(cell);
            }
            gridArray.push(rows);
            tbody.appendChild(row);
        }
        table.appendChild(tbody);
        return gridArray;
    }
    function gridArrays(){
        return createRedTable()
    }
    return {createRedTable,gridArrays};
}

  module.exports=gridModule;