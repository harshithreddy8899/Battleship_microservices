import ships from './ships';

describe('ships', () => {
  it('should create a ship with the specified length', () => {
    const length = 3;
    const ship = ships(length);
    expect(ship.length).toBe(length);
  });

  it('should initialize hits to 0', () => {
    const ship = ships(4);
    expect(ship.hits).toBe(0);
  });

  it('should increase hits when hit() is called', () => {
    const ship = ships(3);
    ship.hit();
    expect(ship.hits).toBe(1);
    ship.hit();
    expect(ship.hits).toBe(2);
  });

  it('should correctly determine if the ship is not sunk', () => {
    const ship = ships(4);
    expect(ship.isSunk()).toBe(false);
  });

  it('should correctly determine if the ship is sunk', () => {
    const ship = ships(2);
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });
});
