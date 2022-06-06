import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ClassPage from '../Pages/ClassPage';
import HomePage from '../Pages/HomePage';
import SchedulePage from '../Pages/SchedulePage';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
              <Route exact path='/' element={<HomePage />} />
              <Route path='/home' element={<HomePage />} />
              <Route path='/class' element={<ClassPage />} />
              <Route path='/schedule' element={<SchedulePage />} />
           </Routes>
        </BrowserRouter>
    );
};

export default Router;