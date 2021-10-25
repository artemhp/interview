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
    const interval = setInterval(
      () => setGrid(nextGrid({ grid, cols, rows })),
      tick
    );
    return () => {
      clearInterval(interval);
    };
  }, [grid, cols, rows, tick]);

  return (
    <div className='App'>
      <div className='wrapper'>
        {grid.map((row, index) => {
          return (
            <div key={index}>
              {row.map((column, index) => (
                <div key={index}>
                  <Cell config={column} />
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
