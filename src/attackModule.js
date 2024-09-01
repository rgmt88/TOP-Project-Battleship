import { playersRenderGrid } from "./playersGrid.js";
import { updateShipGrids } from "./infoShipGrid.js";
import { updateGameMessage } from "./updateGameMsg.js";
import { fireSound, hitSound, missSound, playSound } from "./playSound.js";

function setupPlayerAttack(player, playerBoardId, opponent, opponentBoardId) {
    const opponentBoard = document.getElementById(opponentBoardId);
    opponentBoard.addEventListener('click', (event) => {
        const x = parseInt(event.target.dataset.x, 10);
        const y = parseInt(event.target.dataset.y, 10);
        if (!event.target.classList.contains('hit-cell') && !event.target.classList.contains('miss-cell')) {
            playerAttack(x, y, player, playerBoardId, opponent, opponentBoardId);
        }
    })
}

function playerAttack(x, y, player, playerBoardId, opponent, opponentBoardId) {
    // Play the fire sound when the player attacks
    playSound(fireSound);
    
    // Player performs the attack on the opponent
    const result = player.attack(x, y, opponent.board);

    // Update the opponent's board to reflect the result of the attack
    playersRenderGrid(opponent, opponentBoardId);
    updateShipGrids(opponent, false);

    // Check if the game is over after the player's attack
    if (checkIfGameOver(player, opponent)) return;

    // If the player's attack was a hit, they get another turn
    if (result === 'hit') {
        playSound(hitSound);
        updateGameMessage('Hit! Attack again!');
        // Allow the player to click and attack again
        return; 
    }

    // If the player's attack was a miss, let the PC (opponent) take a turn after a short delay
    if (result === 'miss') {
        playSound(missSound);
        updateGameMessage('Miss! It\'s the computer\'s turn.');
        setTimeout(() => {
            computerTurn(opponent, player, playerBoardId);
        }, 1000); // Give a slight delay before attack
    }
}

function computerTurn(opponent, player, playerBoardId, onTurnEnd = () => {}) {
    updateGameMessage('Computer\'s turn...')
    
    // Play the fire sound when the computer attacks
    playSound(fireSound);    
    
    const result = opponent.randomAttack(player.board);
    
    // Update the player's board to reflect the result of the PC's attack
    playersRenderGrid(player, playerBoardId);
    updateShipGrids(player, true);
    
    // Check if the game is over after the PC's attack
    if (checkIfGameOver(player, opponent)) return;

    // If the PC hits, it gets another turn
    if (result === 'hit') {
        playSound(hitSound);
        updateGameMessage('Computer hit your ship! It attacks again.')
        setTimeout(() => {
            computerTurn(opponent, player, playerBoardId, onTurnEnd);
        }, 1000); // Optional delay to simulate thinking time
    } else if (result === 'miss') {
        playSound(missSound);
        // Allow the player to take their turn
        // SetupPlayerAttack remains active for player input
        updateGameMessage('Computer missed! Your turn.');
        onTurnEnd(); // Call the callback function to set up the player's turn only after a miss
    }
}

function checkIfGameOver(player, opponent) {
    if (player.board.allShipsSunk()) {
        updateGameMessage('Game Over! The PC wins!');
        return true;
    } else if (opponent.board.allShipsSunk()) {
        updateGameMessage('Congratulations! You win!');
        return true;
    }
    return false;
}

export { setupPlayerAttack, playerAttack, computerTurn, checkIfGameOver };