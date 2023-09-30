const ships = require('./ships.js');

describe('Ship Factory', () => {
    const ship1 = ships(8);
   it('should create a ship with the correct length', () => {
      // Your test assertion here
      expect(ship1.isSunk()).toBe(false);
    });
    it('should create a ship with the correct length', () => {
        // const ship1 = ships(8);
        // Your test assertion here
        expect(ship1.hit()).toBe(0);
      });
      it('should create a ship with the correct length', () => {
        const ship1 = ships(8);
        // Your test assertion here
        expect(ship1.isSunk()).toBe(false);
      });
});
