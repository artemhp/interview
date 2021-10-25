import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test("Make sure it loads and doesn't fail", () => {
  render(<App />);
});
