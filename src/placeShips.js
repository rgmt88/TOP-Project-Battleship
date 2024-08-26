import { ship } from './ship.js'
import { playersRenderGrid } from './playersGrid.js';

function placeShips(player, boardId) {
    const carrier = ship(5);
    const battleship = ship(4);
    const cruiser = ship(3);
    const destroyer = ship(2);
    const submarine = ship(1);

    // Place ships on the board
    player.board.placeShip(carrier, [[0, 1], [0, 2], [0, 3], [0, 4], [0, 5]]);
    player.board.placeShip(battleship, [[1, 1], [1, 2], [1, 3], [1, 4]]);
    player.board.placeShip(cruiser, [[2, 1], [2, 2], [2, 3]]);
    player.board.placeShip(destroyer, [[3, 1], [3, 2]]);
    player.board.placeShip(submarine, [[4, 0]]);

    // Display ships on the player's grid
    playersRenderGrid(player, boardId);
}

export { placeShips };