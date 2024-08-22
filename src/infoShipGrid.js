function createShipGrid(shipGridElement, length, isSunk = false) {
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

        shipGridElement.appendChild(cell);
    }
}

function updateShipGrids(player, isPlayer = true) {
    const prefix = isPlayer ? 'player' : 'opponent';

    const shipGrids = [
        { elementId: `${prefix}CarrierGrid`, length: 5 },
        { elementId: `${prefix}BattleshipGrid`, length: 4 },
        { elementId: `${prefix}CruiserGrid`, length: 3 },
        { elementId: `${prefix}DestroyerGrid`, length: 2 },
        { elementId: `${prefix}SubmarineGrid`, length: 1 },
    ];

    const ships = player.board.getShips();

    ships.forEach((shipData, index) => {
        const { ship } = shipData;
        const isSunk = ship.isSunk();
        const { elementId, length } = shipGrids[index];
        const shipGridElement = document.getElementById(elementId);

        createShipGrid(shipGridElement, length, isSunk);
    });
}

export { updateShipGrids };