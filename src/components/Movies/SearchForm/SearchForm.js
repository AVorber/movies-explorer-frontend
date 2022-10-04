import React from 'react';
import './SearchForm.css';

function SearchForm() {
  return (
    <section className='search'>
      <form className='search__form'>
        <input
          className='search__form-input'
          type='text'
          placeholder='Фильм'
        />
        <button className='search__form-button' type='submit' />
      </form>
      <dev className='search__checkbox-container'>
        <span className='search__checkbox-label'>Короткометражки</span>
        <input className='search__checkbox' type='checkbox' />
      </dev>
    </section>
  );
}

export default SearchForm;
