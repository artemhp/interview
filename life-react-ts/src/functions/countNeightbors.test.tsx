import countNeighbors from './countNeighbors';

const grid = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
].map((el) => el.map((el) => ({ isActive: !!el })));

describe('Count Neighbors', () => {
  let config;

  beforeEach(() => {
    config = { grid, rows: 5, cols: 5 };
  });

  test('Lonely cell in the corner', () => {
    expect(countNeighbors({ ...config, indexRow: 0, indexCol: 0 })).toBe(0);
  });
  test('Cell in the middle of "Stick"', () => {
    expect(countNeighbors({ ...config, indexRow: 2, indexCol: 2 })).toBe(2);
  });
});
