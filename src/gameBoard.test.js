import gameBoard from './gameBoard';

describe('gameBoard', () => {
  let board;

  beforeEach(() => {
    board = gameBoard();
  });

  it('should place ships correctly', () => {
    const ship = { hit: jest.fn(), isSunk: jest.fn().mockReturnValue(false) };
    board.placeShips(ship, 1, 2);
    expect(board.ships).toEqual([{ ship, x: 1, y: 2 }]);
  });

  it('should receive an attack and return hit result', () => {
    const ship = { hit: jest.fn(), isSunk: jest.fn().mockReturnValue(false) };
    board.placeShips(ship, 1, 2);
    const result = board.receiveAttack(1, 2);
    expect(result).toEqual({ isHit: true, isSunk: false });
    expect(ship.hit).toHaveBeenCalled();
  });

  it('should return missed attack result', () => {
    const result = board.receiveAttack(1, 2);
    expect(result).toEqual({ isHit: false, isSunk: false });
  });

  it('should check for collision', () => {
    const ship = { hit: jest.fn(), isSunk: jest.fn().mockReturnValue(false) };
    board.placeShips(ship, 1, 2);
    expect(board.checkCollision(1, 2)).toBe(true);
    expect(board.checkCollision(3, 4)).toBe(false);
  });

  it('should check if all ships are sunk', () => {
    const ship1 = { hit: jest.fn(), isSunk: jest.fn().mockReturnValue(true) };
    const ship2 = { hit: jest.fn(), isSunk: jest.fn().mockReturnValue(true) };
    board.placeShips(ship1, 1, 2);
    board.placeShips(ship2, 3, 4);
    expect(board.allShipsSunk(board.ships)).toBe(true);
  });
});
