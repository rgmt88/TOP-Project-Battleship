function createShipGrid(shipGridElement, length, isSunk = false, hitIndexes = [], isPlayer = true, setupPhase = false) {
    // Clear existing grid
    shipGridElement.innerHTML = '';

    for (let i = 0; i < length; i++) {
        const cell = document.createElement('div');
        // Assign a unique index to each cell
        cell.dataset.index = i;
        
        if (isSunk) {
            // Add a class to represent a sunk ship
            cell.classList.add('sunk-cell');
        }

        if (isPlayer && hitIndexes.includes(i)) {
            // Add a class to represent a hit part of the ship, but only for the player
            cell.classList.add('hit-cell');
        }

        if (setupPhase) {
            addSetupInteraction(cell, shipGridElement, i, length);
        }

        shipGridElement.appendChild(cell);
    }
}

// Helper function to add interaction for ship setup phase
function addSetupInteraction(cell, shipGridElement, index, length) {
    cell.classList.add('setup-cell');
    cell.addEventListener('click', () => handleShipPlacement(shipGridElement, index, length));
}

// Function to handle ship placement logic during setup
function handleShipPlacement(shipGridElement, startIndex, length) {

}

function updateShipGrids(player, isPlayer = true, setupPhase = false) {
    const prefix = isPlayer ? 'player' : 'opponent';

    const shipGrids = [
        { elementId: `${prefix}CarrierGrid`, length: 5 },
        { elementId: `${prefix}BattleshipGrid`, length: 4 },
        { elementId: `${prefix}CruiserGrid`, length: 3 },
        { elementId: `${prefix}DestroyerGrid`, length: 2 },
        { elementId: `${prefix}SubmarineGrid`, length: 1 },
    ];

    const ships = player.board.getShips();

    if (setupPhase && ships.length === 0) {
        shipGrids.forEach(({ elementId, length }) => {
            const shipGridElement = document.getElementById(elementId);
            createShipGrid(shipGridElement, length, false, [], isPlayer, setupPhase);
        })
    }

    ships.forEach((shipData, index) => {
        const { ship, coordinates } = shipData;
        const isSunk = ship.isSunk();

        // Determine which parts of the ship have been hit
        const hitIndexes = coordinates.reduce((acc, [x, y], idx) => {
            if (player.board.getHitCoordinates().some(([hitX, hitY]) => hitX === x && hitY === y)) {
                acc.push(idx);    
            }
            return acc;
        }, []);


        const { elementId, length } = shipGrids[index];
        const shipGridElement = document.getElementById(elementId);

        createShipGrid(shipGridElement, length, isSunk, hitIndexes, isPlayer);
    });
}

export { updateShipGrids };