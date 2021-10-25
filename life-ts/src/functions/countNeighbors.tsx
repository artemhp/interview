import { IGridConfig } from './grid';

interface INeighborsConfig extends IGridConfig {
  indexRow: number;
  indexCol: number;
}

export default function countNeighbors({
  grid,
  indexRow,
  indexCol,
  rows,
  cols,
}: INeighborsConfig): number {
  let sum = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      const maybeNeighborRow = i + indexRow;
      const maybeNeighborColumn = j + indexCol;
      if (
        maybeNeighborRow >= 0 &&
        maybeNeighborColumn >= 0 &&
        maybeNeighborRow < rows &&
        maybeNeighborColumn < cols
      ) {
        sum += Number(grid[maybeNeighborRow][maybeNeighborColumn].isActive);
      }
    }
  }
  sum -= Number(grid[indexRow][indexCol].isActive);
  return sum;
}
