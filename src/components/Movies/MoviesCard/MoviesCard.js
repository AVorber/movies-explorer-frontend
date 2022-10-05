import React, { useState } from 'react';
import movie from '../../../images/movie.svg';
import './MoviesCard.css';

function MoviesCard({ list_type }) {
  const [like, setLike] = useState(false);
  const likeClass = `card__button ${like ? 'card__button_type_like-active' : 'card__button_type_like'}`;

  function handleLike() {
    setLike(!like);
  }

  return (
    <article className='card'>
      <img className='card__image' alt='Фильм' src={movie} />
      <div className='card__info'>
        <h3 className='card__title'>В погоне за Бенкси</h3>
        { list_type === 'saved-movies' ? (
          <button
            className='card__button card__button_type_delete'
            aria-label='Лайк'
            type='button'>
          </button>
        ) : (
          <button
            className={likeClass}
            aria-label='Лайк'
            type='button'>
          </button>
        )}
      </div>
      <span className='card__duration'>1ч 42м</span>
    </article>
  );
}

export default MoviesCard;
