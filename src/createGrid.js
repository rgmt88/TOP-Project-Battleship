function createBoardGrid(boardElement) {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const cell = document.createElement('div');
            cell.dataset.x = i;
            cell.dataset.y = j;
            boardElement.appendChild(cell);
        }
    }
}

function createShipGrid(shipGridElement, length) {
    for (let i = 0; i < length; i++) {
        const cell = document.createElement('div');
        cell.dataset.index = i; // Assign a unique index to each cell
        shipGridElement.appendChild(cell);
    }
}

function createGrid() {
    // Create board grid
    const playerBoard = document.getElementById('playerBoard');
    const opponentBoard = document.getElementById('opponentBoard');

    createBoardGrid(playerBoard);
    createBoardGrid(opponentBoard);

    // Create ships grid
    // Player's ships
    createShipGrid(document.getElementById('playerCarrierGrid'), 5);
    createShipGrid(document.getElementById('playerBattleshipGrid'), 4);
    createShipGrid(document.getElementById('playerCruiserGrid'), 3);
    createShipGrid(document.getElementById('playerDestroyerGrid'), 2);
    createShipGrid(document.getElementById('playerSubmarineGrid'), 1);

    // Opponent's ships
    createShipGrid(document.getElementById('opponentCarrierGrid'), 5);
    createShipGrid(document.getElementById('opponentBattleshipGrid'), 4);
    createShipGrid(document.getElementById('opponentCruiserGrid'), 3);
    createShipGrid(document.getElementById('opponentDestroyerGrid'), 2);
    createShipGrid(document.getElementById('opponentSubmarineGrid'), 1);
}

export { createGrid };




