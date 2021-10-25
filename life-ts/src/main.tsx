import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App cols={50} rows={50} tick={1000} />
  </React.StrictMode>,
  document.getElementById('root')
);
