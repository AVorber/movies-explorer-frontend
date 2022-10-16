import React from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import './SavedMovies.css';

function SavedMovies({ loggedIn, movies, savedMovies, onSubmit, onMovieDelete, isLoading }) {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className='saved-movies-content'>
        <SearchForm
          text=''
          onSubmit={onSubmit}
        />
        {
          isLoading ? (
            <Preloader />
          ) : (
            <MoviesCardList
              movies={movies}
              savedMovies={savedMovies}
              onMovieDelete={onMovieDelete}
            />
          )
        }
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
