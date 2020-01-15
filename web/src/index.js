import React from 'react'; // importação da biblioteca, sempre importar quando vao usar HTML
import ReactDOM from 'react-dom'; // Usando para navegador 

import App from './App'; // Nosso proprio arquivo.

// estamos mandando renderizar nosso app, dentro da div ID = root
ReactDOM.render(<App />, document.getElementById('root'));
