import { player } from '../src/player';
import { gameboard } from '../src/gameboard';
import { ship } from '../src/ship';

describe('player factory function', () => {
  
  test('player can place ships on their own gameboard', () => {
    const humanPlayer = player();
    const myShip = ship(3);

    expect(() => {
      humanPlayer.board.placeShip(myShip, [[0, 0], [0, 1], [0, 2]]);
    }).not.toThrow();
    
    expect(humanPlayer.board.getHitCoordinates()).toEqual([]);
    expect(humanPlayer.board.getMissedAttacks()).toEqual([]);
  });

  test('player can attack opponent gameboard', () => {
    const humanPlayer = player();
    const computerPlayer = player(true); // computer player for opponent
    const computerShip = ship(3);

    computerPlayer.board.placeShip(computerShip, [[0, 0], [0, 1], [0, 2]]);
    const attackResult = humanPlayer.attack(0, 0, computerPlayer.board);

    expect(attackResult).toBe("hit");
    expect(computerPlayer.board.getHitCoordinates()).toContainEqual([0, 0]);
  });

  test('computer player makes a valid random attack', () => {
    const humanPlayer = player();
    const computerPlayer = player(true); // computer player for opponent
    const humanShip = ship(3);

    humanPlayer.board.placeShip(humanShip, [[0, 0], [0, 1], [0, 2]]);
    const attackResult = computerPlayer.randomAttack(humanPlayer.board);

    expect(["hit", "miss"]).toContain(attackResult);
    // There should be exactly one recorded attack, whether hit or miss
    expect(humanPlayer.board.getHitCoordinates().length + humanPlayer.board.getMissedAttacks().length).toBe(1);
  });

  test('computer player does not attack the same coordinates twice', () => {
    const humanPlayer = player();
    const computerPlayer = player(true); // computer player for opponent

    const attackResult1 = computerPlayer.randomAttack(humanPlayer.board);
    const attackResult2 = computerPlayer.randomAttack(humanPlayer.board);

    expect(["hit", "miss"]).toContain(attackResult1);
    expect(["hit", "miss"]).toContain(attackResult2);
    expect(humanPlayer.board.getHitCoordinates().length + humanPlayer.board.getMissedAttacks().length).toBe(2);
  });

  test('attack does not affect the player\'s own board', () => {
    const humanPlayer = player();
    const computerPlayer = player(true); // computer player for opponent
    const humanShip = ship(3);

    humanPlayer.board.placeShip(humanShip, [[0, 0], [0, 1], [0, 2]]);
    humanPlayer.attack(0, 0, computerPlayer.board);

    expect(humanPlayer.board.getHitCoordinates()).toEqual([]); // Human's own board should be unaffected
    expect(humanPlayer.board.getMissedAttacks()).toEqual([]);
  });

});

