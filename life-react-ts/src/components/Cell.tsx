import React from 'react';

export default function Cell({ config }: any) {
  return <div className={config.isActive ? 'alive' : 'dead'}></div>;
}
