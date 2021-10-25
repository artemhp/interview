import nextGrid from './nextGrid';

const beforeTick = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
].map((el) => el.map((el) => ({ isActive: !!el })));

const afterTick = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
].map((el) => el.map((el) => ({ isActive: !!el })));

describe('Tick Transformation', () => {
  let config;

  beforeEach(() => {
    config = { rows: 5, cols: 5 };
  });

  test('One tick', () => {
    expect(nextGrid({ ...config, grid: beforeTick })).toEqual(afterTick);
  });
});
