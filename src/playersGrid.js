function playersRenderGrid(player, boardId = 'playerBoard') {
    const boardElement = document.getElementById(boardId);
    // Clear existing grid
    boardElement.innerHTML = ''; 

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            const cell = document.createElement('div');
            cell.dataset.x = i;
            cell.dataset.y = j;

            // Check if there's a ship at this coordinate
            const hasShip = player.board.getShips().some(({ coordinates }) => coordinates.some(([x, y]) => x === i && y === j));

            // Check if there's a hit at this coordinate
            const isHit = player.board.getHitCoordinates().some(([x, y]) => x === i && y === j);

            // Check if there's a missed attack at this coordinate
            const isMiss = player.board.getMissedAttacks().some(([x, y]) => x === i && y === j);

            if (hasShip) {
                // Add ship class
                cell.classList.add('ship-cell');
            }
            if (isHit) {
                // Add hit class
                cell.classList.add('hit-cell');
            }
            if (isMiss) {
                // Add miss class
                cell.classList.add('miss-cell');
            }

            boardElement.appendChild(cell);
        }
    }
}

export { playersRenderGrid };