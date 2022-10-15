import React from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({ list_type, movies }) {
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

  return (
    <>
      <section className='cards' aria-label='Список фильмов'>
        {
          movies.slice(0, loadedCards).map(movie => (
            <MoviesCard
              {...movie}
              key={movie.id}
              list_type={list_type}
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
