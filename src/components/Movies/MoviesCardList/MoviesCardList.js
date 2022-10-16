import React from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
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
      if (window.innerWidth < 604) {
        setLoadedCards(5);
        setMoreCards(2);
      } else if (window.innerWidth <= 944) {
        setLoadedCards(8);
        setMoreCards(2);
      } else if (window.innerWidth < 1280) {
        setLoadedCards(12);
        setMoreCards(3);
      } else if (window.innerWidth > 1280) {
        setLoadedCards(12);
        setMoreCards(4);
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
