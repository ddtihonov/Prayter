import React from 'react';
import './index.scss';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import { hydrate, render } from "react-dom";

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  hydrate(
  <React.StrictMode>
    <BrowserRouter basename = {process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>    
  </React.StrictMode>, rootElement);
} else {
  render(
  <React.StrictMode>
    <BrowserRouter basename = {process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>    
  </React.StrictMode>, rootElement);
}

reportWebVitals();
