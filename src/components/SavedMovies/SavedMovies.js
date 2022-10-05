import React from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import ButtonMoreCards from '../Movies/ButtonMoreCards/ButtonMoreCards';
import Footer from '../Footer/Footer';
import './SavedMovies.css';

function SavedMovies() {
  return (
    <>
      <Header loggedIn={true} />
      <main className='saved-movies-content'>
        <SearchForm />
        <MoviesCardList list_type={'saved-movies'} />
        <ButtonMoreCards />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
