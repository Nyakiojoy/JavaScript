"use strict";
function calculateScore(rolls) {
    let score = 0;
    let rollIndex = 0;
    const isStrike = (roll) => roll === 'X';
    const isSpare = (roll) => roll.includes('/');
    for (let frame = 0; frame < 10; frame++) {
        const roll = rolls[rollIndex];
        if (isStrike(roll)) {
            score += 10 + getPinsFromNextTwoRolls(rolls, rollIndex);
            rollIndex += 1;
        }
        else if (isSpare(roll)) {
            score += 10 + getPinsFromNextRoll(rolls, rollIndex);
            rollIndex += 1;
        }
        else {
            score += getPinsFromRoll(roll.charAt(0)) + getPinsFromRoll(roll.charAt(1));
            rollIndex += 1;
        }
    }
    return score;
}
function getPinsFromRoll(roll) {
    if (roll === 'X')
        return 10;
    if (roll === '-')
        return 0;
    return parseInt(roll, 10);
}
function getPinsFromNextRoll(rolls, rollIndex) {
    return getPinsFromRoll(rolls[rollIndex + 1].charAt(0));
}
function getPinsFromNextTwoRolls(rolls, rollIndex) {
    const nextRoll = rolls[rollIndex + 1];
    if (nextRoll === 'X') {
        return 10 + getPinsFromRoll(rolls[rollIndex + 2].charAt(0));
    }
    return getPinsFromRoll(nextRoll.charAt(0)) + getPinsFromRoll(nextRoll.charAt(1));
}
//# sourceMappingURL=bowling.js.map