import React from 'react';
import searchIcon from '../../../images/search-icon.svg';
import './SearchForm.css';

function SearchForm() {
  return (
    <section className='search'>
      <div className='search__form-wrapper'>
        <form className='search__form'>
          <img
            className='search__form-icon'
            src={searchIcon}
            alt='Поиск'
          />
          <input
            className='search__form-input'
            type='text'
            placeholder='Фильм'
          />
          <button className='search__form-button' type='submit'>Найти</button>
        </form>
        <dev className='search__checkbox-container'>
          <input className='search__checkbox' type='checkbox' />
          <span className='search__checkbox-label'>Короткометражки</span>
        </dev>
      </div>
    </section>
  );
}

export default SearchForm;
