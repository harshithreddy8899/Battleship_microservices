import gameBoard from "./gameBoard";
import Ships from "./ships";
import Player from "./Player";
const playerGameboard=gameBoard();
const computerGameboard=gameBoard();
function handleCellClick(event) {
  const cell = event.target;
  const row = cell.parentElement.rowIndex;
  const column = cell.cellIndex;

  
}

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
    cell.addEventListener('click', handleCellClick);
  }
  
  table.appendChild(row);
}
function changeCellColor(rowIndex, colIndex, color) {
  const rows = table.rows;

  // Check if the rowIndex and colIndex are within valid ranges
  if (rowIndex >= 0 && rowIndex < rows.length && colIndex >= 0) {
    const cells = rows[rowIndex].cells;

    // Check if colIndex is within valid range
    if (colIndex < cells.length) {
      // Change the background color of the specified cell
      cells[colIndex].style.backgroundColor = color;
    }
  }
}
function tableFirst(maxShipSize, playerGameboard1,player) {
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
            if(player===1)
              changeCellColor(x + i, y, 'green');
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
              if(player===1)
                changeCellColor(x, y + i, 'green');
          }
      } else {
        k+=1;
      }
    }
    k-=1;
  }
}

document.body.appendChild(table);
tableFirst(5,playerGameboard,1);
tableFirst(5,computerGameboard,0);
console.log(playerGameboard.ships);
console.log(computerGameboard.ships);

// const player1 = Player('Player 1');
// const player2 = Player('Player 2');
  
//             // Simulate the game
console.log(playerGameboard.ships[0].ship.hits);
// while (!playerGameboard.allShipsSunk(playerGameboard.ships) && !computerGameboard.allShipsSunk(computerGameboard.ships)) {
//               // Player 1's turn
//   const player1TurnResult = player1.takeTurnComputer(computerGameboard);
        
//               // Player 2's turn
//   const player2TurnResult = player2.takeTurnComputer(playerGameboard);
        
//               // You can log the results of each turn or perform assertions here if needed
// }
        
            // Check the game result
  // if (computerGameboard.allShipsSunk()) {
  //     console.log('Player 2 wins!');
  // } else {
  //     console.log('Player 1 wins!');
  // }
























































// const table = document.createElement('table');
// document.body.appendChild(table);

// function handleCellClick(event) {
//   const cell = event.target;
//   const row = cell.parentElement.rowIndex;
//   const column = cell.cellIndex;
  
//   yourFunctionName(row, column);
// }

// const numRows = 10; // Number of rows
// const numCols = 10; // Number of columns

// for (let i = 0; i < numRows; i++) {
//   const row = document.createElement('tr');
  
//   for (let j = 0; j < numCols; j++) {
//     const cell = document.createElement('td');
//     row.appendChild(cell);
    
//     cell.addEventListener('click', handleCellClick);
//   }
  
//   table.appendChild(row);
// }

// function yourFunctionName(row, column) {
//   console.log('Clicked on row:', row, 'Column:', column);
// }
