import React from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import { filterShortMovies } from '../../utils/MoviesFilters';
import './SavedMovies.css';

function SavedMovies({ loggedIn, movies, savedMovies, onSubmit, onMovieDelete, isLoading }) {
  const [isShortMovie, setIsShortMovie] = React.useState(false);

  function handleCheckboxChange() {
    setIsShortMovie(!isShortMovie);
  }

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className='saved-movies-content'>
        <SearchForm
          text=''
          onSubmit={onSubmit}
          onCheckboxChange={handleCheckboxChange}
          isShortMovie={isShortMovie}
        />
        {
          isLoading ? (
            <Preloader />
          ) : (
            <MoviesCardList
              movies={movies}
              savedMovies={isShortMovie ? filterShortMovies(savedMovies) : savedMovies}
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
