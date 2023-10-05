import Ships from "./ships";

const gridModule=(playerGameboard,computerGameboard)=>{
    function createRedTable1() {
          const table = document.createElement('table');

          const numRows = 10; // Number of rows
          const numCols = 10; // Number of columns
          
          for (let i = 0; i < numRows; i+=1) {
            const row = document.createElement('tr');
            
            for (let j = 0; j < numCols; j+=1) {
              const cell = document.createElement('td');
              cell.style.height="30px";
              cell.style.width="30px";
              cell.style.borderCollapse = 'collapse';
              cell.style.border='3px solid black'
              row.appendChild(cell);
              
              // Attach the click event listener to the cell
            }
            
            table.appendChild(row);
          }
          return table;
    }
    function tableFirst(maxShipSize, playerGameboard1,player,table) {
        let k = maxShipSize;
      
        while (k > 0) {
          const z = Math.floor(Math.random() * 10);
      
          const x = Math.floor(Math.random() * 10);
          const y = Math.floor(Math.random() * 10);
          let i = 0;
      
          if (z % 2 === 0) {
            // Try placing horizontally
            for (i = 0; i < k; i+=1) {
              if (
                playerGameboard1.checkCollision(x + i, y) ||
                x + i >= 10
              ) {
                i=100;
                break;
              }
            }
      
            if (i === k) {
              const newShip=Ships(k);
              for (i = 0; i < k; i+=1) {
                  playerGameboard1.placeShips(newShip,x+i,y);
                  if(player===1){
                    const rowIndex=x+i;
                    const colIndex=y;
                    const rows = table.rows;
                    if (rowIndex >= 0 && rowIndex < rows.length && colIndex >= 0) {
                    const cells = rows[rowIndex].cells;

                    if (colIndex < cells.length) {
                        cells[colIndex].style.backgroundColor = 'green';
                    }
                    }
                  }
              }
            } else {
              k+=1;
            }
          } else {
            // Try placing vertically
            for (i = 0; i < k; i+=1) {
              if (
                playerGameboard1.checkCollision(x, y + i) ||
                y + i >= 10
              ) {
                break;
              }
            }
      
            if (i === k) {
              const newShip=Ships(k);
              for (i = 0; i < k; i+=1) {
      
                playerGameboard1.placeShips(newShip,x,y+i);
                if(player===1){
                    const rowIndex=x;
                    const colIndex=y+i;
                    const rows = table.rows;
                    if (rowIndex >= 0 && rowIndex < rows.length && colIndex >= 0) {
                    const cells = rows[rowIndex].cells;

                    if (colIndex < cells.length) {
                        cells[colIndex].style.backgroundColor = 'green';
                    }
                    }
                  }
                }
            } else {
              k+=1;
            }
          }
          k-=1;
        }
      }
      async function cellClickAction(rowIndex,colIndex,table1,table2){
        
        // if(computerGameboard.checkCollision(rowIndex,colIndex)!==true){
           
            // if(computerGameboard.checkCollision(rowIndex,colIndex)===false)
            // {
                const row = table1.rows[rowIndex];
                const cell = row.cells[colIndex];
                cell.style.backgroundColor='red';
                const x=rowIndex;
                const y=colIndex;
                const isLegalMove1 = !computerGameboard.missedAttacks.some(
                    (coord) => coord.x === x && coord.y === y
                  );
                if(isLegalMove1){
                    computerGameboard.receiveAttack(x,y);
                    while(true){
                        const X = Math.floor(Math.random() * 10);
                        const Y = Math.floor(Math.random() * 10);
                        const isLegalMove = !playerGameboard.missedAttacks.some(
                            (coord) => coord.x ===X && coord.y === Y
                        );
                        if(isLegalMove) 
                        {
                            const row1 = table2.rows[X];
                            const cell1 = row1.cells[Y];
                            cell1.style.backgroundColor='blue';
                            playerGameboard.receiveAttack(X, Y);
                            break;
                        }
                    }
                }
                else{
                    // alert('select the right one');
                }
        
               
                if (playerGameboard.allShipsSunk(playerGameboard.ships)===true){
                    alert("computer won");
                    window.location.reload();

                }
                if(computerGameboard.allShipsSunk(computerGameboard.ships)===true){
                    alert("player won");
                    // Reload the current page
                    window.location.reload();
                }
    
            // }
            console.log(playerGameboard.ships);
            
        // }
        
      }
      function createRedTable2(table1) {
        const table = document.createElement('table');
      
        const numRows = 10; // Number of rows
        const numCols = 10; // Number of columns
      
        // Define cellClickHandler function at the root of the function body
        function cellClickHandler(i, j) {
          cellClickAction(i, j, table1,table);
        }
      
        for (let i = 0; i < numRows; i += 1) {
          const row = document.createElement('tr');
      
          for (let j = 0; j < numCols; j += 1) {
            const cell = document.createElement('td');
            cell.style.height = '30px';
            cell.style.width = '30px';
            cell.style.borderCollapse = 'collapse';
            cell.style.border = '3px solid black';
      
            cell.addEventListener('click', cellClickHandler.bind(null, i, j));
            row.appendChild(cell);
          }
      
          table.appendChild(row);
        }
        return table;
      }
      return {createRedTable1,
              createRedTable2,      
              tableFirst
             }
}
// module.exports='gridModule';
export default gridModule;