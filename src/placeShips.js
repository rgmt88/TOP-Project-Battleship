import { ship } from './ship.js'
import { playersRenderGrid } from './playersGrid.js';
import { updateGameMessage } from './updateGameMsg.js';

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
            updateGameMessage('All ships placed! Ready to start.')
            return;
        }

        const { name, length } = ships[currentShipIndex];
        updateGameMessage(`Place your ${name}. Click on the start and end positions`);

        // Initialize placement interaction
        setupPlacementInteraction(player, boardId, length, () => {
            currentShipIndex++;
            placeNextShip();
        });
    }
    
    placeNextShip();
}

function setupPlacementInteraction(player, boardId, length, onComplete) {
    const boardElement = document.getElementById(boardId);
    let start = null;

    function handleClick(event) {
        const x = parseInt(event.target.dataset.x);
        const y = parseInt(event.target.dataset.y);

        if (!start) {
            start = [x, y];
            // Visual feedback for start
            event.target.classList.add('start-point');
        } else {
            const end = [x, y];
            const coords = calculateCoordinates(start, end, length);

            if (coords) {
                // Preview the ship placement
                previewShip(coords, boardElement);

                // Confirm placement
                if (confirm(`Place ship from ${start} to ${end}?`)) {
                    try {
                        const newShip = ship(length);
                        player.board.placeShip(newShip, coords);
                        clearPreview(boardElement);
                        onComplete();
                    } catch (error) {
                        updateGameMessage(error.message);
                        clearPreview(boardElement);
                    }
                } else {
                    clearPreview(boardElement);
                }
            } else {
                updateGameMessage('Invalid placement. Try again!');
            }
            start = null;
        }
    }

    boardElement.addEventListener('click', handleClick);
}

function calculateCoordinates(start, end, length) {
    // Destructure start and end into x, y coordinates
    const [startX, startY] = start;
    const [endX, endY] = end;

    // Calculate the differences between start and end
    const deltaX = Math.abs(endX - startX);
    const deltaY = Math.abs(endY - startY);

    // Check if placement is horizontal or vertical and matches the ship length
    if (deltaX === 0 && deltaY === length - 1) {
        // Vertical placement
        const coordinates = [];
        const minY = Math.min(startY, endY);
        for (let i = 0; i < length; i++) {
            coordinates.push([startX, minY + i]);
        }
        return coordinates;
    } else if (deltaY === 0 && deltaX === length - 1) {
        // Horizontal placement
        const coordinates = [];
        const minX = Math.min(startX, endX);
        for (let i = 0; i < length; i++) {
            coordinates.push([minX + i, startY]);
        }
        return coordinates;
    }

    // Return null if the placement is not valid
    return null;
}

// Helper function to visually preview the ship placement
function previewShip(coords, boardElement) {
    coords.forEach(([x, y]) => {
        const cell = boardElement.querySelector(`[data-x='${x}'][data-y='${y}']`);
        if (cell) {
            cell.classList.add('preview-ship');
        }
    });
}

function clearPreview(boardElement) {
    const cells = boardElement.querySelectorAll('.preview-ship, .start-point');
    cells.forEach(cell => cell.classList.remove('preview-ship', 'start-point'));
}

export { placeShips };