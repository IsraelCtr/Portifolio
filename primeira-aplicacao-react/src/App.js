import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Corrigido para importação correta
import Home from './pages/Home'; // Importe corretamente a página Home
import AboutMe from './components/AboutMe'; // Exemplo de outra rota

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} /> {/* Defina as rotas */}
      <Route path="/about" element={<AboutMe />} /> {/* Exemplo de outra rota */}
    </Routes>
  );
}

export default App;
