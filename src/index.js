import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter } from "react-router-dom"
import HomePage from './App2';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <HomePage/>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
