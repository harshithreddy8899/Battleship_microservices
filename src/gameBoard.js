const gameBoard=()=>{
    let ships=[];
    let missedAttacks=[];
    function placeShip(ship, x, y, horizontal) {
        if (horizontal) {
          for (let i = 0; i < ship.length; i+=1) {
            if (x + i >= 10) {
              throw new Error('Ship placement out of bounds');
            }
            if (this.checkCollision(x + i, y)) {
              throw new Error('Ship placement collision');
            }
            this.ships.push({ ship, x: x + i, y });
          }
        } else {
          for (let i = 0; i < ship.length; i+=1) {
            if (y + i >= 10) {
              throw new Error('Ship placement out of bounds');
            }
            if (this.checkCollision(x, y + i)) {
              throw new Error('Ship placement collision');
            }
            this.ships.push({ ship, x, y: y + i });
          }
        }
      }
      function  receiveAttack(x, y) {
        // Check if the move is legal (not already attacked)
        const isLegalMove = !this.missedAttacks.some(
          (coord) => coord.x === x && coord.y === y
        );
      
        if (!isLegalMove) {
          return { isHit: false, isSunk: false };
        }
      
        const hitShip = this.ships.find((s) => s.x === x && s.y === y);
        if (hitShip) {
          hitShip.ship.hit();
          return { isHit: true, isSunk: hitShip.ship.isSunk() };
        }
      
        this.missedAttacks.push({ x, y });
        return { isHit: false, isSunk: false };
      }
      function checkCollision(x, y) {
        return this.ships.some((s) => {
          if (s.x === x && s.y === y) {
            return true;
          }
          return false;
        });
      }
      function allShipsSunk() {
        return this.ships.every((s) => s.ship.isSunk());
      }
      return {ships,
              missedAttacks,
              placeShip,
              receiveAttack,
              checkCollision,
              allShipsSunk
            };
}

module.exports=gameBoard;