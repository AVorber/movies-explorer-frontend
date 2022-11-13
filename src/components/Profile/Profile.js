import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import {useFormWithValidation} from '../../utils/FormValidation';
import './Profile.css';

function Profile({ onSignOut, onSubmit }) {
  const currentUser = React.useContext(CurrentUserContext);

  const { values, handleChange, errors, isValid, setIsValid } = useFormWithValidation(
    {
      name: currentUser.name,
      email: currentUser.email,
    }
  );

  React.useEffect(() => {
    const isNameChanged = values.name !== currentUser.name;
    const isEmailChanged = values.email !== currentUser.email;
    if (isNameChanged || isEmailChanged) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [values]);

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(values);
    setIsValid(false);
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
              placeholder='Имя'
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
              placeholder='E-mail'
              value={values.email}
              pattern='^[a-zA-Z0-9_.+]+(?<!^[0-9]*)@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'
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
