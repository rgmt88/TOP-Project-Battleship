import { gameboard } from "./gameboard";

function player(isComputer = false) {
    const board = gameboard();
    
    function attack(x, y, opponentGameboard) {
        return opponentGameboard.receiveAttack(x, y);
    }

    function randomAttack(opponentGameboard) {
        let x, y, attackResult;

        do {
            x = Math.floor(Math.random() * 10);
            y = Math.floor(Math.random() * 10);
            attackResult = attack(x, y, opponentGameboard);
        } while (attackResult === "already attacked");

        return attackResult;
    }

    return {
        board,
        attack,
        randomAttack: isComputer ? randomAttack : null
    };
}

export { player };