import React, { useState, useEffect } from 'react';

import './styles.css';

import Cell from './components/Cell';

import { generatePopulatedGrid } from './functions/grid';
import nextGrid from './functions/nextGrid';

export default function App({
  cols,
  rows,
  tick,
}: {
  cols: number;
  rows: number;
  tick: number;
}) {
  const [grid, setGrid] = useState(() => generatePopulatedGrid(cols, rows));

  useEffect(() => {
    document.documentElement.style.setProperty('--gridColumn', `${cols}`);
    document.documentElement.style.setProperty('--gridRow', `${rows}`);
  }, [cols, rows]);

  useEffect(() => {
    const next = nextGrid({ grid, cols, rows });
    if (JSON.stringify(next) !== JSON.stringify(grid)) {
      const interval = setInterval(() => setGrid(next), tick);
      return () => clearInterval(interval);
    }
  }, [grid, cols, rows, tick]);

  return (
    <div className='grid'>
      {grid.map((row, index) =>
        row.map((column, index) => <Cell key={index} config={column} />)
      )}
    </div>
  );
}
