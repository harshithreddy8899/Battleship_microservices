import gameBoard from "./gameBoard";
import gridModule from "./gridModule";

const playerGameboard=gameBoard();
const computerGameboard=gameBoard();
const grids=gridModule(playerGameboard,computerGameboard);
const table1=grids.createRedTable1();
const table2=grids.createRedTable2(table1);
grids.tableFirst(5,playerGameboard,1,table1);
grids.tableFirst(5,computerGameboard,1,table2);
document.body.appendChild(table1);
document.body.appendChild(table2);

document.body.style.display='flex';
document.body.style.justifyContent='space-between';


// console.log(playerGameboard.ships);
// console.log(computerGameboard.ships);


  
//             // Simulate the game
// console.log(playerGameboard.ships[0].ship.hits);
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
