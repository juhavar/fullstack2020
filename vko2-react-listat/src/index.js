import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Listswithobjects from './Listswithobjects';
import JSt2 from './JSt2';
import App from './App';


import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Listswithobjects />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
