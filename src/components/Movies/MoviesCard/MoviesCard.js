import React, { useState } from 'react';
import './MoviesCard.css';

function MoviesCard({ nameRU, image, trailerLink, duration, list_type }) {
  const [like, setLike] = useState(false);
  const likeClass = `card__button ${like ? 'card__button_type_like-active' : 'card__button_type_like'}`;

  function handleLike() {
    setLike(!like);
  }

  return (
    <article className='card'>
      <a
        className='card__trailer-link'
        href={trailerLink}
        target='_blank'
        rel='noreferrer'
      >
        <img className='card__image' alt={nameRU} src={`https://api.nomoreparties.co${image.url}`} />
      </a>
      <div className='card__info'>
        <h3 className='card__title'>{nameRU}</h3>
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
      <span className='card__duration'>{duration} мин</span>
    </article>
  );
}

export default MoviesCard;
