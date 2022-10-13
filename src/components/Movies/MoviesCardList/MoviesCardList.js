import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({ list_type, movies }) {
  return (
    <section className='cards' aria-label='Список фильмов'>
      {
        movies.map(movie => (
          <MoviesCard
            {...movie}
            key={movie.id}
            list_type={list_type}
          />
        ))
      }
    </section>
  );
}

export default MoviesCardList;
