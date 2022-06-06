import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ClassPage from '../Pages/ClassPage';
import HomePage from '../Pages/HomePage';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
              <Route exact path='/' element={<HomePage />} />
              <Route path='/home' element={<HomePage />} />
              <Route path='/class' element={<ClassPage />} />
           </Routes>
        </BrowserRouter>
    );
};

export default Router;