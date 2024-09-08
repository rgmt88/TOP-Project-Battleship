// shipPlacement.js
import { updateGameMessage } from './updateGameMsg.js'; // Import the message update function

// Factory function for ship placement logic
function createShipPlacement() {
    let currentShipLength = null;
    let placingShip = false;
    let currentShipCoords = [];

    // Function to initialize ship placement on the grid
    function init(shipGridElement, length) {
        if (placingShip) return; // Prevent placing another ship until the current one is confirmed

        currentShipLength = length;
        placingShip = true;
        currentShipCoords = [];

        clearShipPreview(shipGridElement);
        addSetupInteraction(shipGridElement, length);
    }

    // Helper function to add interaction for ship setup phase
    function addSetupInteraction(shipGridElement, length) {
        for (let i = 0; i < length; i++) {
            const cell = shipGridElement.querySelector(`[data-index='${i}']`);
            if (cell) {
                cell.classList.add('setup-cell');
                cell.addEventListener('click', handleShipPlacement.bind(null, shipGridElement, i, length));
            }
        }
    }

    // Function to handle ship placement logic during setup
    function handleShipPlacement(shipGridElement, startIndex, length) {
        clearShipPreview(shipGridElement); // Clear preview from any previous attempts
        currentShipCoords = [];

        // Populate coordinates based on selected start index and length
        for (let i = 0; i < length; i++) {
            const index = startIndex + i;
            const cell = shipGridElement.querySelector(`[data-index='${index}']`);
            if (cell) {
                cell.classList.add('preview-ship');
                currentShipCoords.push(index);
            }
        }

        // Add click listener for confirming placement
        shipGridElement.addEventListener('click', confirmPlacement);
    }

    // Function to clear any ship preview classes
    function clearShipPreview(shipGridElement) {
        const cells = shipGridElement.querySelectorAll('.preview-ship, .invalid-placement');
        cells.forEach(cell => cell.classList.remove('preview-ship', 'invalid-placement'));
    }

    // Function to confirm the placement of the ship
    function confirmPlacement(event) {
        if (!isValidPlacement(currentShipCoords)) {
            currentShipCoords.forEach(index => {
                const cell = event.currentTarget.querySelector(`[data-index='${index}']`);
                if (cell) cell.classList.add('invalid-placement');
            });
            updateGameMessage('Invalid placement. Try again!');
            return;
        }

        currentShipCoords.forEach(index => {
            const cell = event.currentTarget.querySelector(`[data-index='${index}']`);
            if (cell) {
                cell.classList.remove('preview-ship');
                cell.classList.add('final-ship');
            }
        });

        updateGameStateWithShip(currentShipCoords, currentShipLength);

        // Emit a custom event with the ship placement details
        const placementEvent = new CustomEvent('confirmPlacement', {
            detail: { coords: currentShipCoords },
        });
        event.currentTarget.dispatchEvent(placementEvent);

        resetPlacement(event.currentTarget);
    }

    // Function to validate ship placement
    function isValidPlacement(coordinates) {
        // Example validation: Check for boundaries and overlapping ships (if further developed)
        return coordinates.every(index => index < 10); 
    }

    // Function to update game state after ship placement
    function updateGameStateWithShip(coords, length) {
        updateGameMessage(`Placed a ship of length ${length}. Ready for the next ship.`);
        // Additional game state updates can be implemented here if needed
    }

    // Function to reset the placement state after confirming or canceling
    function resetPlacement(shipGridElement) {
        placingShip = false;
        currentShipCoords = [];
        currentShipLength = null;

        // Clear setup interaction and any preview classes left over
        clearShipPreview(shipGridElement);
        shipGridElement.removeEventListener('click', confirmPlacement);
    }

    // Return an object with the public methods for external use
    return {
        init,
        handleShipPlacement,
        confirmPlacement,
        clearShipPreview,
        isValidPlacement,
        updateGameStateWithShip,
        resetPlacement,
    };
}

// Export the factory function
const shipPlacement = createShipPlacement();
export default shipPlacement;

