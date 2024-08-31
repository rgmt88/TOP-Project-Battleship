function decideFirstPlayer() {
    return Math.random() < 0.5 ? 'player' : 'opponent';
}

export { decideFirstPlayer };