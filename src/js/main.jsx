import React from 'react';
import ReactDOM from 'react-dom/client';

// Importar el componente principal
import Home from './components/Home';

// Importar Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// Importar estilos globales
import '../styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
);
