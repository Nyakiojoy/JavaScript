"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BowlingGame = void 0;
class BowlingGame {
    constructor() {
        this.rolls = [];
    }
    roll(pins) {
        this.rolls.push(pins);
    }
    score() {
        let score = 0;
        let rollIndex = 0;
        for (let frame = 0; frame < 10; frame++) {
            if (this.isStrike(rollIndex)) { // Strike
                score += 10 + this.strikeBonus(rollIndex);
                rollIndex++;
            }
            else if (this.isSpare(rollIndex)) { // Spare
                score += 10 + this.spareBonus(rollIndex);
                rollIndex += 2;
            }
            else { // Normal frame
                score += this.sumOfPinsInFrame(rollIndex);
                rollIndex += 2;
            }
        }
        return score;
    }
    isStrike(rollIndex) {
        return this.rolls[rollIndex] === 10;
    }
    strikeBonus(rollIndex) {
        return this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
    }
    isSpare(rollIndex) {
        return this.rolls[rollIndex] + this.rolls[rollIndex + 1] === 10;
    }
    spareBonus(rollIndex) {
        return this.rolls[rollIndex + 2];
    }
    sumOfPinsInFrame(rollIndex) {
        return this.rolls[rollIndex] + this.rolls[rollIndex + 1];
    }
}
exports.BowlingGame = BowlingGame;
//# sourceMappingURL=bowlingGame.js.map