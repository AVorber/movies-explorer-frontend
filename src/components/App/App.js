import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import './App.css';

function App() {
  return (
    <div className='page'>
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
