import { gameboard } from '../src/gameboard';
import { ship } from '../src/ship';

describe('gameboard factory function', () => {

  test('places ships within bounds', () => {
    const board = gameboard();
    const myShip = ship(3);

    expect(() => {
      board.placeShip(myShip, [[0, 0], [0, 1], [0, 2]]);
    }).not.toThrow();
  });

  test('throws an error when placing a ship out of bounds', () => {
    const board = gameboard();
    const myShip = ship(3);

    expect(() => {
      board.placeShip(myShip, [[9, 9], [9, 10], [9, 11]]);  // Out of bounds
    }).toThrow("Ship placement is out of bounds");
  });

  test('throws an error when placing a ship overlapping another ship', () => {
    const board = gameboard();
    const ship1 = ship(3);
    const ship2 = ship(3);

    board.placeShip(ship1, [[0, 0], [0, 1], [0, 2]]);  // First ship is placed

    expect(() => {
      board.placeShip(ship2, [[0, 1], [0, 2], [0, 3]]);  // Overlaps with the first ship
    }).toThrow("Ship placement overlaps with another ship");
  });

  test('registers a hit on a ship', () => {
    const board = gameboard();
    const myShip = ship(3);

    board.placeShip(myShip, [[0, 0], [0, 1], [0, 2]]);
    const result = board.receiveAttack(0, 1);

    expect(result).toBe("hit");
    expect(myShip.getHits()).toBe(1);  // Ship should have one hit registered
  });

  test('registers a miss when no ship is at the attacked coordinates', () => {
    const board = gameboard();
    const myShip = ship(3);

    board.placeShip(myShip, [[0, 0], [0, 1], [0, 2]]);
    const result = board.receiveAttack(1, 1);  // No ship at (1, 1)

    expect(result).toBe("miss");
    expect(board.getMissedAttacks()).toContainEqual([1, 1]);
  });

  test('tracks hit coordinates correctly', () => {
    const board = gameboard();
    const myShip = ship(3);

    board.placeShip(myShip, [[0, 0], [0, 1], [0, 2]]);
    board.receiveAttack(0, 1);  // Hit
    board.receiveAttack(0, 2);  // Hit

    expect(board.getHitCoordinates()).toContainEqual([0, 1]);
    expect(board.getHitCoordinates()).toContainEqual([0, 2]);
  });

  test('allShipsSunk returns true when all ships are sunk', () => {
    const board = gameboard();
    const myShip = ship(2);

    board.placeShip(myShip, [[0, 0], [0, 1]]);
    board.receiveAttack(0, 0);
    board.receiveAttack(0, 1);

    expect(board.allShipsSunk()).toBe(true);
  });

  test('allShipsSunk returns false when not all ships are sunk', () => {
    const board = gameboard();
    const myShip = ship(2);

    board.placeShip(myShip, [[0, 0], [0, 1]]);
    board.receiveAttack(0, 0);  // Only one hit

    expect(board.allShipsSunk()).toBe(false);
  });

  test('does not allow multiple hits on the same coordinates', () => {
    const board = gameboard();
    const myShip = ship(3);

    board.placeShip(myShip, [[0, 0], [0, 1], [0, 2]]);
    board.receiveAttack(0, 1);  // Hit

    const secondAttack = board.receiveAttack(0, 1);  // Attempt to hit the same spot again

    expect(secondAttack).toBe("already attacked");  // Should return "already attacked"
    expect(board.getHitCoordinates().length).toBe(1);  // Only one hit should be registered
  });

});

