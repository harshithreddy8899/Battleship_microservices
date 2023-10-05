const  gameBoard=require('./gameBoard');
const ships=require('./ships');
const Player=require('./Player');
describe('Gameboard', () => {
  it.only('should place a ship on the board', () => {
    const board = gameBoard(); // Create an instance of the gameBoard
    const ship = ships(3);
    board.placeShips(ship, 2, 2); // Change to placeShips here
    expect(board.ships.length).toBe(1); // Assuming you expect the ship count to be 1 after placement
  });
  
  
  
    // it('should receive an attack and record missed attacks', () => {
    //   const board = gameBoard1().gameBoard();
    //   const ship = Ship(3);
    //   board.placeShip(ship, 2, 2, true);
    //   board.receiveAttack(2, 2);
    //   expect(ship.hits).toBe(1);
    //   board.receiveAttack(3, 3);
    //   expect(board.missedAttacks.length).toBe(1);
    // });
  
    // it('should report all ships as sunk', () => {
    //     const board = gameBoard();
    //     const ship1 = Ship(3);
    //     const ship2 = Ship(2);
    //     board.placeShip(ship1, 0, 0, true);
    //     board.placeShip(ship2, 0, 1, false);
    //     board.receiveAttack(0, 0); // Hit ship1
    //     board.receiveAttack(1, 0); // Hit ship1
    //     board.receiveAttack(2, 0); // Hit ship1
    //     board.receiveAttack(0, 1); // Hit ship2
    //     board.receiveAttack(0, 2); // Missed
    //    expect(board.allShipsSunk()).toBe(true);
    // });
    // it('should create a player with a name', () => {
    //     const player = Player('Player 1');
    //     expect(player.name).toBe('Player 1');
    //   });
    
    //   it('should take a turn and attack the enemy Gameboard', () => {
    //     const playerGameboard = new gameBoard();
    //     const enemyGameboard = new gameBoard();
    //     const player = Player('Player 1');
    //     player.takeTurnComputer(enemyGameboard);
    //     expect(enemyGameboard.missedAttacks.length).toBe(1); // Player made an attack
    //   });
    
    //   it('should not make an illegal move (attacking the same coordinates)', () => {
    //     const playerGameboard = gameBoard();
    //     const enemyGameboard = gameBoard();
    //     const player = Player('Player 1');
    
    //     // Force an illegal move by attacking the same coordinates twice
    //     playerGameboard.receiveAttack(2, 2); // Mark the coordinates as attacked
    //     player.takeTurnComputer(playerGameboard); // Attempt an illegal move
    //     expect(enemyGameboard.missedAttacks.length).toBe(0); // No new attack recorded
    //   });
    //   it('should simulate a complete game without a frontend', () => {
    //         // Create game boards for Player 1 and Player 2
    //         const player1Gameboard =gameBoard();
    //         const player2Gameboard =gameBoard();
        
    //         // Create ships for Player 1 and Player 2
    //         const player1Ship1 = Ship(3);
    //         const player1Ship2 = Ship(2);
    //         const player2Ship1 = Ship(4);
    //         const player2Ship2 = Ship(1);
        
    //         // Place ships on the game boards
    //         player1Gameboard.placeShip(player1Ship1, 0, 0, true);
    //         player1Gameboard.placeShip(player1Ship2, 4, 4, false);
    //         player2Gameboard.placeShip(player2Ship1, 1, 1, true);
    //         player2Gameboard.placeShip(player2Ship2, 7, 7, false);
        
    //         // Create players
    //         const player1 = Player('Player 1');
    //         const player2 = Player('Player 2');
        
    //         // Simulate the game
    //         while (!player1Gameboard.allShipsSunk() && !player2Gameboard.allShipsSunk()) {
    //           // Player 1's turn
    //           const player1TurnResult = player1.takeTurnComputer(player2Gameboard);
        
    //           // Player 2's turn
    //           const player2TurnResult = player2.takeTurnComputer(player1Gameboard);
        
    //           // You can log the results of each turn or perform assertions here if needed
    //         }
        
    //         // Check the game result
    //         if (player1Gameboard.allShipsSunk()) {
    //           console.log('Player 2 wins!');
    //         } else {
    //           console.log('Player 1 wins!');
    //         }
        
    //         // You can add assertions here to validate the game outcome
    //       });
  });


// const Gameboard = require('./gameBoard');
// const Ship = require('./ships');
// const Player = require('./Player');


