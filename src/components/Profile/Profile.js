import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import './Profile.css';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import {useFormWithValidation} from "../../utils/FormValidation";

function Profile({ onSignOut, onUpdateUser }) {
  const currentUser = React.useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid } = useFormWithValidation({});

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser(values);
  }

  return (
    <>
      <Header loggedIn={true} />
      <section className='profile'>
        <h2 className='profile__title'>{`Привет, ${currentUser.name}!`}</h2>
        <form className='profile__form' onSubmit={handleSubmit}>
          <fieldset className='profile__input-container'>
            <label className='profile__form-title' htmlFor='name'>Имя</label>
            <input
              className='profile__form-input'
              id='name'
              name='name'
              type='text'
              minLength='2'
              maxLength='30'
              placeholder={currentUser.name}
              value={values.name}
              pattern='^[A-Za-zА-Яа-я -]+$'
              onChange={handleChange}
              required
            />
          </fieldset>
          <span className='credentials__input-error'>{errors.name}</span>
          <fieldset className='profile__input-container'>
            <label className='profile__form-title' htmlFor='email'>E-mail</label>
            <input
              className='profile__form-input'
              id='email'
              name='email'
              type='email'
              minLength='2'
              maxLength='30'
              placeholder={currentUser.email}
              value={values.email}
              onChange={handleChange}
              required
            />
          </fieldset>
          <span className='credentials__input-error'>{errors.email}</span>
          <button
            className={`profile__edit-button ${!isValid ? 'profile__edit-button_disabled' : ''}`}
            type='submit'
            disabled={!isValid}
          >
            Редактировать
          </button>
        </form>
        <Link to='/' className='profile__signout-link' onClick={onSignOut}>
          Выйти из аккаунта
        </Link>
      </section>
    </>
  );
}

export default Profile;
