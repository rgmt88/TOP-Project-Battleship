import { ship } from './ship.js'
import { playersRenderGrid } from './playersGrid.js';
import shipPlacement from './shipPlacement.js';

// Function to initiate ship placement process
function placeShips(player, boardId) {
    // Define the ships with their lengths
    const ships = [
        { name: 'Carrier', length: 5 },
        { name: 'Battleship', length: 4 },
        { name: 'Cruiser', length: 3 },
        { name: 'Destroyer', length: 2 },
        { name: 'Submarine', length: 1 },
    ];
    
    // Sequentially place each ship
    let currentShipIndex = 0;

    function placeNextShip() {
        if (currentShipIndex >= ships.length) {
            // All ships placed, render final state
            playersRenderGrid(player, boardId);
            return;
        }

        const { length } = ships[currentShipIndex];
        // Use the shipPlacement module to initialize the setup phase
        const shipGridElement = document.getElementById(`${boardId}${ships[currentShipIndex].name}Grid`);

        // Update game message for user feedback
        shipPlacement.init(shipGridElement, length);

        // Listen for confirmation of the ship placement
        shipGridElement.addEventListener('confirmPlacement', (event) => {
            // Get coordinates from the event detail
            const { coords } = event.detail;

            // Create the ship and place it on the player's board
            const newShip = ship(length);
            player.board.placeShip(newShip, coords);

            // Move to the next ship
            currentShipIndex++;
            placeNextShip();
        });
    }

    // Start placing ships one by one
    placeNextShip();
}

export { placeShips };