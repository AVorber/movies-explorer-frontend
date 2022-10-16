import React from 'react';
import Header from '../Header/Header';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { filterShortMovies } from '../../utils/MoviesFilters';
import './Movies.css';

function Movies({ loggedIn, movies, savedMovies, onSubmit, onMovieLike, onMovieDelete }) {
  const [isShortMovie, setIsShortMovie] = React.useState(localStorage.getItem('shortFilmsToggle'));

  function handleCheckboxChange() {
    setIsShortMovie(!isShortMovie);
    localStorage.setItem('shortFilmsToggle', !isShortMovie);
  }

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className='movies-content'>
        <SearchForm onSubmit={onSubmit} onCheckboxChange={handleCheckboxChange} isShortMovie={isShortMovie} />
        <MoviesCardList
          movies={isShortMovie ? filterShortMovies(movies) : movies}
          savedMovies={savedMovies}
          onMovieLike={onMovieLike}
          onMovieDelete={onMovieDelete}
        />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
