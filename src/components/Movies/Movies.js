import React from 'react';
import Header from '../Header/Header';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import { filterShortMovies } from '../../utils/MoviesFilters';
import './Movies.css';

function Movies({ loggedIn, movies, savedMovies, onSubmit, onMovieLike, onMovieDelete, isLoading }) {
  const [isShortMovie, setIsShortMovie] = React.useState(false);

  function handleCheckboxChange() {
    localStorage.setItem('shortFilmsToggle', isShortMovie ? "no" : "yes");
    setIsShortMovie(!isShortMovie);
  }

  React.useEffect(() => {
    const checkboxValue = localStorage.getItem('shortFilmsToggle');
    if (checkboxValue === "yes") {
      setIsShortMovie(true);
    } else {
      setIsShortMovie(false);
    }
  }, []);

  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className='movies-content'>
        <SearchForm
          text={localStorage.getItem('searchString')}
          onSubmit={onSubmit}
          onCheckboxChange={handleCheckboxChange}
          isShortMovie={isShortMovie}
        />
        {
          isLoading ? (
            <Preloader />
          ) : (
            <MoviesCardList
              movies={isShortMovie ? filterShortMovies(movies) : movies}
              savedMovies={savedMovies}
              onMovieLike={onMovieLike}
              onMovieDelete={onMovieDelete}
            />
          )
        }
      </main>
      <Footer />
    </>
  );
}

export default Movies;
