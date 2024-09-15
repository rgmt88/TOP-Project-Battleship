import './styles.css';
import { player } from './player.js';
import { playersRenderGrid } from './playersGrid.js';
import { updateShipGrids } from './infoShipGrid.js';
import { placeShips } from './placeShips.js';
import { setupPlayerAttack, computerTurn } from './attackModule.js';
import { decideFirstPlayer } from './decideFirstPlayer.js';
import { randomShipPlacement } from './randomShipPlacement.js'
import { updateGameMessage } from './updateGameMsg.js';

// Create player and opponent instances
const playerInstance = player();
const opponentInstance = player(true);

// Initial grid rendering
playersRenderGrid(playerInstance, 'playerBoard');
playersRenderGrid(opponentInstance, 'opponentBoard');

// Make the boards visible
document.querySelectorAll('.board').forEach(board => board.classList.add('visible'));

// Get references to the start and reset buttons
const startGameBtn = document.getElementById('startGameBtn');
const abandonGameBtn = document.getElementById('abandonGameBtn');

// Disable the reset button until the game is started
abandonGameBtn.disabled = true;

// Function to start the ship placement phase
function startGame() {
    updateGameMessage('Place your ships. Click on the start and end positions for each ship.');
    startGameBtn.disabled = true;
    abandonGameBtn.disabled = false;

    // Begin ship placement for the player
    placeShips(playerInstance, 'playerBoard', () => {
        // Once all ships are placed, place opponent ships and start the game
        randomShipPlacement(opponentInstance, 'opponentBoard');
        updateShipGrids(opponentInstance, false);

        // Determine who starts first and set up the appropriate turn
        if (decideFirstPlayer() === 'player') {
            setupPlayerAttack(playerInstance, 'playerBoard', opponentInstance, 'opponentBoard');
        } else {
            computerTurn(opponentInstance, playerInstance, 'playerBoard', () => {
                setupPlayerAttack(playerInstance, 'playerBoard', opponentInstance, 'opponentBoard');
            });
        }
    });
}

// Add event listeners to start and reset buttons
startGameBtn.addEventListener('click', startGame);

// Abandon Game logic - Reset everything when implemented
abandonGameBtn.addEventListener('click', () => {
    // Basic approach to reset the game, reload the page
    location.reload();
})
