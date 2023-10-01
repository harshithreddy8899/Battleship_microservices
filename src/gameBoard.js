import ships from "./ships";

const gameBoard=()=>{
    let ships=[];
    let missedAttacks=[];
    function placeShips(ship, x, y){
        this.ships.push({ship,x,y});
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
      function allShipsSunk(newShips) {
        return newShips.every((s) => s.ship.isSunk());
      }
      return {ships,
              missedAttacks,
              placeShips,
              receiveAttack,
              checkCollision,
              allShipsSunk
            };
}
export default gameBoard;