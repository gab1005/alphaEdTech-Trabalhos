import React from 'react';
import { Routes, Route } from 'react-router-dom';

export default () => {
    return(
        <Routes>
            <Route exact path="/" >
                <h1>pagina inicial</h1>
            </Route>

            <Route exact path="/config" >
                <h1>pagina configurações</h1>
            </Route>
        </Routes>
    );
}