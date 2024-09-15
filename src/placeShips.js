import { ship } from './ship.js'
import { playersRenderGrid } from './playersGrid.js';
import { updateGameMessage } from './updateGameMsg.js';
import { updateShipGrids } from './infoShipGrid.js';

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
        const gameInfoElement = document.querySelector('.game-info');

        // Apply the highlight styles during ship placement
        gameInfoElement.style.border = '1px solid #4dabf7';
        gameInfoElement.style.backgroundColor = '#e0f7fa';

        if (currentShipIndex >= ships.length) {
            // All ships placed, render final state
            playersRenderGrid(player, boardId);
            updateGameMessage('All ships placed! Ready to start.')

            // Revert the .game-info styling to its original state
            gameInfoElement.style.border = '1px solid 3cccccc';
            gameInfoElement.style.backgroundColor = '#f9f9f9';
            return;
        }

        const { name, length } = ships[currentShipIndex];
        updateGameMessage(`Place your ${name} (${length} squares). Click on the start and end positions`);

        // Initialize placement interaction
        setupPlacementInteraction(player, boardId, name, length, () => {
            currentShipIndex++;
            placeNextShip();
        });
    }
    
    placeNextShip();
}

function setupPlacementInteraction(player, boardId, name, length, onComplete) {
    const boardElement = document.getElementById(boardId);
    let start = null;

    function handleClick(event) {
        const x = parseInt(event.target.dataset.x);
        const y = parseInt(event.target.dataset.y);

        if (length === 1) {
            // Handle single-click placement for ships of length 1
            const coords = [[x, y]];

            // Preview the ship placement
            previewShip(coords, boardElement);

            // Delay the confirmation prompt to allow time for the preview to render
            setTimeout(() => {
                const userConfirmed = confirm(`Confirm placement of your ${name}?`);

                if (userConfirmed) {
                    try {
                        const newShip = ship(length);
                        player.board.placeShip(newShip, coords);
                        clearPreview(boardElement);

                        // Update the ship grids after placement
                        updateShipGrids(player, true);

                        // Re-render the player's main board to show the placed ship
                        playersRenderGrid(player, boardId);

                        // Remove event listener after placement
                        boardElement.removeEventListener('click', handleClick);

                        onComplete();
                    } catch (error) {
                        updateGameMessage(error.message);
                        clearPreview(boardElement);
                    }
                } else {
                    clearPreview(boardElement);
                }
            }, 100);
        } else {
            if (!start) {
                start = [x, y];
                event.target.classList.add('start-point');
            } else {
                const end = [x, y];
                const coords = calculateCoordinates(start, end, length);

                if (coords && coords.length === length) {
                    previewShip(coords, boardElement);

                    setTimeout(() => {
                        const userConfirmed = confirm(`Confirm placement of your ${name}?`);

                        if (userConfirmed) {
                            try {
                                const newShip = ship(length);
                                player.board.placeShip(newShip, coords);
                                clearPreview(boardElement);

                                // Update the ship grids after placement
                                updateShipGrids(player, true);

                                // Re-render the player's main board to show the placed ship
                                playersRenderGrid(player, boardId);

                                // Remove event listener after placement
                                boardElement.removeEventListener('click', handleClick);

                                onComplete();
                            } catch (error) {
                                updateGameMessage(error.message);
                                clearPreview(boardElement);
                            }
                        } else {
                            clearPreview(boardElement);
                        }
                    }, 100);
                } else {
                    updateGameMessage('Invalid placement. Try again!');
                    clearPreview(boardElement);
                }
                // Reset the start point after attempting placement
                start = null;
                // Remove visual feedback for start point
                const startPointElement = boardElement.querySelector('.start-point');
                if (startPointElement) {
                    startPointElement.classList.remove('start-point');
                }
            }
        }
    }

    // Before adding a new event listener, remove any existing one to prevent duplicates
    boardElement.removeEventListener('click', handleClick);
    boardElement.addEventListener('click', handleClick);
}


function calculateCoordinates(start, end, length) {
    const [startX, startY] = start;
    const [endX, endY] = end;

    const deltaX = Math.abs(endX - startX);
    const deltaY = Math.abs(endY - startY);

    // Prevent zero-length movement unless length is 1
    if (deltaX === 0 && deltaY === 0 && length > 1) {
        return null;
    }

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
    console.log('Previewing ship at:', coords); // Debug log
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