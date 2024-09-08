import { ship } from './ship.js';
import { playersRenderGrid } from './playersGrid.js'; // Function to update the visual board

// Function to generate random coordinates for ship placement
function generateRandomCoordinates(length, gridSize = 10) {
    // Determine random direction: horizontal or vertical
    const direction = Math.random() < 0.5 ? 'horizontal' : 'vertical';

    let x, y;
    if (direction === 'horizontal') {
        x = Math.floor(Math.random() * gridSize);
        y = Math.floor(Math.random() * (gridSize - length + 1)); // Ensure ship fits horizontally
    } else {
        x = Math.floor(Math.random() * (gridSize - length + 1)); // Ensure ship fits vertically
        y = Math.floor(Math.random() * gridSize);
    }

    // Generate coordinates based on direction and length
    const coordinates = [];
    for (let i = 0; i < length; i++) {
        coordinates.push(direction === 'horizontal' ? [x, y + i] : [x + i, y]);
    }

    return coordinates;
}

// Function to place a single ship randomly on the board
function placeRandomShip(board, length) {
    let coordinates;
    let placedSuccessfully = false;

    // Attempt to find valid coordinates for the ship
    while (!placedSuccessfully) {
        coordinates = generateRandomCoordinates(length);
        try {
            // Try placing the ship; if invalid, it will throw an error
            const newShip = ship(length);
            board.placeShip(newShip, coordinates);
            placedSuccessfully = true; // If no error, placement was successful
        } catch (error) {
            // Ignore error and retry if placement failed
        }
    }
}

// Main function to handle random placement of all ships for a player
function randomShipPlacement(player, boardId) {
    const { board } = player; // Extract the board from the player object
    const shipLengths = [5, 4, 3, 2, 1]; // Carrier, Battleship, Cruiser, Destroyer, Submarine

    // Place each ship randomly on the board
    shipLengths.forEach(length => placeRandomShip(board, length));

    // Render the board to reflect the placements
    playersRenderGrid(player, boardId);
}

export { randomShipPlacement };
