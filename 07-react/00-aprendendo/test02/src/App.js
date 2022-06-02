import React from 'react';

// para configuração das rotas.
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes.js';

const App = () => {
    return(
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    );
};

export default App;