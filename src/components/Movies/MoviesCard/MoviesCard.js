import React, { useState } from 'react';
import {useLocation} from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard({ movie, savedMovies, onMovieLike, onMovieDelete }) {
  const location = useLocation();
  const [isLiked, setIsLiked] = useState(false);
  const likeClass = `card__button ${isLiked ? 'card__button_type_like-active' : 'card__button_type_like'}`;
  const savedMovie = savedMovies?.find(item => item.movieId === movie.id);

  const setSavedMovie = React.useCallback(() => {
    if (savedMovie) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  }, [movie.id, savedMovies]);

  React.useEffect(() => {
    setSavedMovie();
  }, [setSavedMovie]);

  function handleLikeClick() {
    const savedMovie = {
      country: movie.country || '',
      director: movie.director || '',
      duration: movie.duration || 0,
      year: movie.year || '',
      description: movie.description || '',
      image: `https://api.nomoreparties.co${movie.image?.url}` || '',
      trailerLink: movie.trailerLink || '',
      thumbnail: `https://api.nomoreparties.co${movie.image?.formats?.thumbnail?.url}` || '',
      movieId: movie.id,
      nameRU: movie.nameRU || '',
      nameEN: movie.nameEN || '',
    };
    onMovieLike(savedMovie);
    setIsLiked(!isLiked);
  }

  function handleDislikeClick() {
    onMovieDelete(savedMovie._id);
    setIsLiked(!isLiked);
  }

  function handleDeleteMovieClick() {
    onMovieDelete(movie._id);
  }

  return (
    <article className='card'>
      <a
        className='card__trailer-link'
        href={movie.trailerLink}
        target='_blank'
        rel='noreferrer'
      >
        <img
          className='card__image'
          alt={movie.nameRU}
          src={location.pathname === '/movies' ? `https://api.nomoreparties.co${movie.image.url}` : movie.image}
        />
      </a>
      <div className='card__info'>
        <h3 className='card__title'>{movie.nameRU}</h3>
        { location.pathname === '/saved-movies' ? (
          <button
            className='card__button card__button_type_delete'
            aria-label='Удалить фильм'
            type='button'
            onClick={handleDeleteMovieClick}
          >
          </button>
        ) : (
          <button
            className={likeClass}
            aria-label='Лайк'
            type='button'
            onClick={isLiked ? handleDislikeClick : handleLikeClick}
          >
          </button>
        )}
      </div>
      <span className='card__duration'>{movie.duration} мин</span>
    </article>
  );
}

export default MoviesCard;
