import { generateArea } from './grid';
import countNeighbors from './countNeighbors';

interface IGridItem {
  isActive: boolean;
}

type TGrid = IGridItem[][];

interface IGridConfig {
  rows: number;
  cols: number;
  grid: TGrid;
}

const setItemState = (state: IGridItem, neighbors: number): IGridItem => {
  // Any live cell with fewer than two live neighbours dies (underpopulation).
  if (state.isActive && neighbors < 2) {
    return {
      isActive: false,
    };
  }
  // Any live cell with more than three live neighbours dies (overcrowding).
  if (state.isActive && neighbors > 3) {
    return {
      isActive: false,
    };
  }
  // Any dead cell with exactly three live neighbours becomes a live cell (reproduction).
  if (!state.isActive && neighbors === 3) {
    return {
      isActive: true,
    };
  }
  return state;
};

export default function nextGrid({ grid, rows, cols }: IGridConfig): TGrid {
  const next = generateArea(rows, cols);
  next.forEach((col, indexRow) =>
    col.forEach((row, indexCol) => {
      const state = grid[indexRow][indexCol];
      const neighbors = countNeighbors({
        grid,
        rows,
        cols,
        indexRow,
        indexCol,
      });

      next[indexRow][indexCol] = setItemState(state, neighbors);
    })
  );
  return next;
}
