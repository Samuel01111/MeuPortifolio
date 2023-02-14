import React from 'react';
import { Routes, Route } from 'react-router-dom'

import Contato from '../pages/contato/Contato'
import Inicio from '../pages/inicio/Inicio'
import Projetos from '../pages/projetos/Projetos'

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Inicio/>} />
            <Route path='/Contato' element={<Contato/>} />
            <Route path='/Projetos' element={<Projetos/>} />
        </Routes>
    )
}

export default Router;