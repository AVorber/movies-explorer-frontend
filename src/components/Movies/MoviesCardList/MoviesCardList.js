import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({ list_type }) {
  return (
    <section className='cards' aria-label='Список фильмов'>
      <MoviesCard list_type={list_type} />
      <MoviesCard list_type={list_type} />
      <MoviesCard list_type={list_type} />
      <MoviesCard list_type={list_type} />
    </section>
  );
}

export default MoviesCardList;
