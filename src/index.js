import './styles.css';
import { player } from './player.js';
import { playersRenderGrid } from './playersGrid.js';
import { updateShipGrids } from './infoShipGrid.js';
import { placeShips } from './placeShips.js';

document.addEventListener('DOMContentLoaded', (event) => {
    // Create player and opponent instances
    const playerInstance = player();
    const opponentInstance = player(true);

    // Initial grid rendering
    playersRenderGrid(playerInstance);
    playersRenderGrid(opponentInstance, 'opponentBoard');

    // Place ships and update the grid
    placeShips(playerInstance);
    placeShips(opponentInstance, 'opponentBoard');

    // Update ship grids to reflect initial placement
    updateShipGrids(playerInstance, true);
    updateShipGrids(opponentInstance, false);

});