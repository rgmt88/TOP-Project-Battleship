import { ship } from '../src/ship';  

describe('ship factory function', () => {
  
  test('creates a ship with correct length', () => {
    const myShip = ship(4);
    expect(myShip.length).toBe(4);
  });

  test('ship registers hits correctly', () => {
    const myShip = ship(3);
    expect(myShip.getHits()).toBe(0); // Initially, hits should be 0
    myShip.hit();
    expect(myShip.getHits()).toBe(1); // After one hit, hits should be 1
    myShip.hit();
    expect(myShip.getHits()).toBe(2); // After two hits, hits should be 2
  });

  test('ship should not exceed its maximum hits', () => {
    const myShip = ship(2);
    myShip.hit();
    myShip.hit();
    expect(() => myShip.hit()).toThrow("Maximum hits reached");
  });

  test('ship sinks when hits equal length', () => {
    const myShip = ship(2);
    expect(myShip.isSunk()).toBe(false); // Ship should not be sunk initially
    myShip.hit();
    expect(myShip.isSunk()).toBe(false); // Ship should not be sunk after one hit
    myShip.hit();
    expect(myShip.isSunk()).toBe(true); // Ship should be sunk after two hits
  });

  test('ship does not sink if hits are less than length', () => {
    const myShip = ship(4);
    myShip.hit();
    myShip.hit();
    expect(myShip.isSunk()).toBe(false); // Ship should not be sunk
  });

});
