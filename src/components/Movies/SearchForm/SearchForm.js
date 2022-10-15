import React from 'react';
import searchIcon from '../../../images/search-icon.svg';
import './SearchForm.css';

function SearchForm({ onSubmit, onCheckboxChange, isShortMovie }) {
  const [searchString, setSearchString] = React.useState(localStorage.getItem('searchString') || '');

  function handleChange(e) {
    setSearchString(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem('searchString', searchString);
    onSubmit();
  }

  return (
    <section className='search'>
      <div className='search__form-wrapper'>
        <form className='search__form' onSubmit={handleSubmit}>
          <img
            className='search__form-icon'
            src={searchIcon}
            alt='Поиск'
          />
          <input
            className='search__form-input'
            type='text'
            placeholder='Фильм'
            value={searchString}
            onChange={handleChange}
            required
          />
          <button className='search__form-button' type='submit'>Найти</button>
        </form>
        <dev className='search__checkbox-container'>
          <input
            className='search__checkbox'
            type='checkbox'
            checked={isShortMovie}
            onClick={onCheckboxChange}
          />
          <span className='search__checkbox-label'>Короткометражки</span>
        </dev>
      </div>
    </section>
  );
}

export default SearchForm;
