function ship(length) {
    const shipLength = length;
    let hits = 0;

    return {
        length: shipLength,
        hit() {
            if (hits < shipLength) {
                hits++;
                return hits;
            } else {
                throw new Error("Maximum hits reached");
            };
        },
        getHits() {
            return hits;
        },
        isSunk() {
            return hits === shipLength;
        }
    };
}

export { ship };