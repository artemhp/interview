type TGrid = { isActive: boolean }[][];

interface IGridConfig {
  rows: number;
  cols: number;
  grid: { isActive: boolean }[][];
}

const generateArea = (rows: number, cols: number): TGrid => {
  return Array(rows)
    .fill(0)
    .map(() => Array(cols).fill({ isActive: false }));
};

const generateTrueOrFalse = (): boolean => Math.random() >= 0.5;

const generatePopulatedGrid = (rows: number, cols: number): TGrid => {
  const emptyGrid = generateArea(rows, cols);
  emptyGrid.forEach((col, indexRow) =>
    col.forEach((row, indexCol) => {
      emptyGrid[indexRow][indexCol] = {
        isActive: generateTrueOrFalse(),
      };
    })
  );
  return emptyGrid;
};

export { generatePopulatedGrid, generateArea };
export type { IGridConfig };
