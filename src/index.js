import './styles.css';
import { player } from './player.js';
import { playersRenderGrid } from './playersGrid.js';
import { updateShipGrids } from './infoShipGrid.js';
import { placeShips } from './placeShips.js';
import { setupPlayerAttack } from './attackModule.js';

document.addEventListener('DOMContentLoaded', (event) => {
    // Create player and opponent instances
    const playerInstance = player();
    const opponentInstance = player(true);

    // Initial grid rendering
    playersRenderGrid(playerInstance, 'playerBoard');
    playersRenderGrid(opponentInstance, 'opponentBoard');

    // Place ships and update the grid
    placeShips(playerInstance, 'playerBoard');
    placeShips(opponentInstance, 'opponentBoard');

    // Update ship grids to reflect initial placement
    updateShipGrids(playerInstance, true);
    updateShipGrids(opponentInstance, false);

    setupPlayerAttack(playerInstance, 'playerBoard', opponentInstance, 'opponentBoard');

    
});