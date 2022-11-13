import React from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import {
  additionalCardsMax,
  additionalCardsMidle,
  additionalCardsMin,
  largeScreen,
  midleScreen,
  smallScreen,
  startLoadedCardsMax,
  startLoadedCardsMidle,
  startLoadedCardsMin,
} from '../../../utils/constants';
import './MoviesCardList.css';

function MoviesCardList({ movies, savedMovies, onMovieLike, onMovieDelete }) {
  const location = useLocation();
  const [moreCards, setMoreCards] = React.useState(0);
  const [loadedCards, setLoadedCards] = React.useState(0);

  function handleLoadMore() {
    setLoadedCards(loadedCards + moreCards);
  }

  React.useLayoutEffect(() => {
    function updateSize() {
      if (window.innerWidth < smallScreen) {
        setLoadedCards(startLoadedCardsMin);
        setMoreCards(additionalCardsMin);
      } else if (window.innerWidth <= midleScreen) {
        setLoadedCards(startLoadedCardsMidle);
        setMoreCards(additionalCardsMin);
      } else if (window.innerWidth < largeScreen) {
        setLoadedCards(startLoadedCardsMax);
        setMoreCards(additionalCardsMidle);
      } else if (window.innerWidth > largeScreen) {
        setLoadedCards(startLoadedCardsMax);
        setMoreCards(additionalCardsMax);
      }
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const displayMovies = movies => {
    if (location.pathname === '/movies') {
      return movies.slice(0, loadedCards);
    }
    return movies;
  };

  return (
    <>
      <section className='cards' aria-label='Список фильмов'>
        {
          displayMovies(location.pathname === '/movies' ? movies : savedMovies).map(movie => (
            <MoviesCard
              key={movie.id}
              movie={movie}
              savedMovies={savedMovies}
              onMovieLike={onMovieLike}
              onMovieDelete={onMovieDelete}
            />
          ))
        }
      </section>
      { location.pathname !== '/saved-movies' && (
        movies.length > loadedCards
          ? <button className='cards__more-button' onClick={handleLoadMore}>Еще</button>
          : <></>
      )}
    </>
  );
}

export default MoviesCardList;
