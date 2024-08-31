function updateGameMessage(message) {
    const gameMessageElement = document.getElementById('gameMessage');
    gameMessageElement.textContent = message;
}

export { updateGameMessage };