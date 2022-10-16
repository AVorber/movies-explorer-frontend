import React from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import './SavedMovies.css';

function SavedMovies({ loggedIn, movies, savedMovies, onSubmit, onMovieDelete }) {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className='saved-movies-content'>
        <SearchForm
          text=''
          onSubmit={onSubmit}
        />
        <MoviesCardList
          movies={movies}
          savedMovies={savedMovies}
          onMovieDelete={onMovieDelete}
        />
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
