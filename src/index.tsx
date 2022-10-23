import React from 'react';
import ReactDOM from 'react-dom/client';
import AppBody from './components/AppBody';
import AppHeader from './components/AppHeader';

import './global.css';

const root = ReactDOM.createRoot(
  document.getElementById('password-generator') as HTMLElement
);

root.render(
  <React.StrictMode>
    <AppHeader />
    <AppBody />
  </React.StrictMode>
);
