import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from "react-router-dom";
import './index.css';

ReactDOM.createRoot(document.getElementById('space-x-root')).render(
  <BrowserRouter basename="Space_X">
    <App />
  </BrowserRouter>
);
