import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import './Profile.css';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile({ onSignOut }) {
  const currentUser = React.useContext(CurrentUserContext);
  return (
    <>
      <Header loggedIn={true} />
      <section className='profile'>
        <h2 className='profile__title'>{`Привет, ${currentUser.name}!`}</h2>
        <form className='profile__form'>
          <fieldset className='profile__input-container'>
            <label className='profile__form-title' htmlFor='name'>Имя</label>
            <input
              required
              className='profile__form-input'
              type='text'
              id='name'
              placeholder='Имя'
              value={currentUser.name}
            />
          </fieldset>
          <fieldset className='profile__input-container'>
            <label className='profile__form-title' htmlFor='email'>E-mail</label>
            <input
              required
              className='profile__form-input'
              type='email'
              name='email'
              placeholder='E-mail'
              value={currentUser.email}
            />
          </fieldset>
          <button className='profile__edit-button' type='submit'>Редактировать</button>
        </form>
        <Link to='/signin' className='profile__signout-link' onClick={onSignOut}>
          Выйти из аккаунта
        </Link>
      </section>
    </>
  );
}

export default Profile;
