import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CalculatorStore from "./utils/CalculatorStore"


ReactDOM.render(
  <React.StrictMode>
    <CalculatorStore>
      <App />
    </CalculatorStore>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

