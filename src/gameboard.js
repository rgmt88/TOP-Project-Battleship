function gameboard() {
    const gridSize = 10;
    const ships = [];
    const missedAttacks = [];
    const hitCoordinates = [];
    const occupiedCoordinates = new Set();

    function isWithinBounds(coordinates) {
        return coordinates.every(([x, y]) => x >= 0 && x < gridSize && y >= 0 && y < gridSize);
    }

    function isOverlapping(coordinates) {
        return coordinates.some(([x, y]) => occupiedCoordinates.has(`${x},${y}`));
    }

    return {
        placeShip(ship, coordinates) {
            if (!isWithinBounds(coordinates)) {
                throw new Error("Ship placement is out of bounds");    
            }

            if (isOverlapping(coordinates)) {
                throw new Error("Ship placement overlaps with another ship");
            }

            ships.push({ ship, coordinates });
            coordinates.forEach(([x, y]) => occupiedCoordinates.add(`${x},${y}`));
        },

        receiveAttack(x, y) {
            const alreadyAttacked = hitCoordinates.some(([hitX, hitY]) => hitX === x && hitY === y) ||
                                    missedAttacks.some(([missX, missY]) => missX === x && missY ===y);

            if (alreadyAttacked) {
                return "already attacked";
            }
            
            let hitShip = null;

            for (let { ship, coordinates } of ships) {
                for (let [coordX, coordY] of coordinates) {
                    if (coordX === x && coordY === y) {
                        ship.hit();
                        hitCoordinates.push([x, y]);
                        hitShip = ship;
                        break;    
                    }
                }
                if (hitShip) break;
            }

            if (!hitShip) {
                missedAttacks.push([x, y]);
            }

            return hitShip ? "hit" : "miss";
        },

        allShipsSunk() {
            return ships.every(({ ship }) => ship.isSunk());
        },

        getMissedAttacks() {
            return missedAttacks;
        },

        getHitCoordinates() {
            return hitCoordinates;
        }
    };
}

export { gameboard };