// Player.js module
function Player(name) {
    function takeTurnComputer(enemyGameboard) {
      const x = Math.floor(Math.random() * 10);
      const y = Math.floor(Math.random() * 10);
      const isLegalMove = !enemyGameboard.missedAttacks.some(
        (coord) => coord.x === x && coord.y === y
      );
  
      if (isLegalMove) {
        const attackResult = enemyGameboard.receiveAttack(x, y);
        return {
          playerName: name, // Access the player's name directly
          coordinates: { x, y },
          isHit: attackResult.isHit,
          isSunk: attackResult.isSunk,
        };
      }
  
      // Return information about the illegal move
      return {
        playerName: name, // Access the player's name directly
        coordinates: { x, y },
        isIllegalMove: true,
      };
    }
    function takeTurnPlayer(enemyGameboard,x,y) {
    
        // Check if the move is legal (not already attacked)
        const isLegalMove = !enemyGameboard.missedAttacks.some(
          (coord) => coord.x === x && coord.y === y
        );
    
        if (isLegalMove) {
          const attackResult = enemyGameboard.receiveAttack(x, y);
          return {
            playerName: name, // Access the player's name directly
            coordinates: { x, y },
            isHit: attackResult.isHit,
            isSunk: attackResult.isSunk,
          };
        }
    
        // Return information about the illegal move
        return {
          playerName: name, // Access the player's name directly
          coordinates: { x, y },
          isIllegalMove: true,
        };
      }
    return {
      takeTurnComputer,
      takeTurnPlayer,
      name,
    };
  }
  
  module.exports = Player;
  