import { BowlingGame } from './bowlingGame';

let game: BowlingGame;

beforeEach(() => { 
  game = new BowlingGame();  // Create a new game before each test
});

test('should score 300 for a perfect game (all strikes)', () => {
  rollMany(12, 10);  // 12 rolls, all strikes (10 pins)
  expect(game.score()).toBe(300);  // Total score should be 300
});

test('should score 90 for a game of 9 misses', () => {
  for (let i = 0; i < 10; i++) {
    game.roll(9);
    game.roll(0);
  }
  expect(game.score()).toBe(90);
});

test('should score 150 for a game of all spares with 5 pins', () => {
  for (let i = 0; i < 10; i++) {
    game.roll(5);
    game.roll(5);  // Spare
  }
  game.roll(5);  // Bonus roll
  expect(game.score()).toBe(150);
});

// Helper function to roll multiple times
function rollMany(rolls: number, pins: number) {
  for (let i = 0; i < rolls; i++) {
    game.roll(pins);
  }
}
