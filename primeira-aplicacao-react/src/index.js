import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/Home'; // Corrigido para o caminho correto do App
import './styles.css';
import { BrowserRouter } from 'react-router-dom'; // Importado corretamente

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> {}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
