import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import './App.css';

function App() {
  return (
    <div className='page'>
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route path='/sign-up' element={<Register />} />
        <Route path='/sign-in' element={<Login />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/saved-movies' element={<SavedMovies />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
