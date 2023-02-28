import React from 'react';
import ReactDOM from 'react-dom/client';
import Navigation from './Components/Navigation';
import PaginaInicial from './Pages';
import './styles/GlobalStyles.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navigation />
    <PaginaInicial />
  </React.StrictMode>
)

