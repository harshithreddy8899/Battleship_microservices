import { JSDOM } from 'jsdom';
import gridModule from './gridModule';
import gameBoard from './gameBoard';

// Mocking the Ships module for testing purposes
jest.mock('./Ships', () => {
    return (size) => ({
      size,
      hits: 0, // Initialize hits to 0
      isSunk: function () {
        return this.hits >= this.size;
      },
      hit: jest.fn(),
    });
  });
  

const { window } = new JSDOM('<!DOCTYPE html><html><body></body></html>');
global.document = window.document;
global.window = window;

describe('gridModule', () => {
  let playerGameboard;
  let computerGameboard;
  let table1;
  let table2;

  beforeEach(() => {
    playerGameboard = gameBoard();
    computerGameboard = gameBoard();
    table1 = document.createElement('table');
    table2 = document.createElement('table');
  });

  describe('createRedTable1', () => {
    it('should create a table with 10 rows and 10 columns', () => {
      const table = gridModule(playerGameboard, computerGameboard).createRedTable1();
      expect(table.tagName).toBe('TABLE');
      expect(table.rows.length).toBe(10);
      expect(table.rows[0].cells.length).toBe(10);
    });

//     // Add more test cases as needed

  describe('createRedTable2', () => {
    it('should create a table with 10 rows and 10 columns', () => {
      const table = gridModule(playerGameboard, computerGameboard).createRedTable2(table1);
      expect(table.tagName).toBe('TABLE');
      expect(table.rows.length).toBe(10);
      expect(table.rows[0].cells.length).toBe(10);
    });

        });
  });

  describe('tableFirst', () => {
    it('should place ships on the playerGameboard', () => {
      const playerGameboard1  = playerGameboard; // Adjust the structure based on your actual playerGameboard implementation
      const maxShipSize = 5;
      const table = document.createElement('table');
      gridModule(playerGameboard, computerGameboard).tableFirst(maxShipSize, playerGameboard1, 1, table);

      // Check if ships are placed correctly on the gameboard
      // You can access the gameboard and check its state here
      expect(playerGameboard1.allShipsSunk(playerGameboard.ships)).toBe(false);
        });
    });

//     // Add more test cases as needed
afterAll(() => {
    delete global.document;
    delete global.window;
  });
 });