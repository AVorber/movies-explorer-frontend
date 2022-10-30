import React from 'react';
import logo from '../../images/credentials-form-logo.svg';
import { Link } from 'react-router-dom';
import { useFormWithValidation } from '../../utils/FormValidation';
import './CredentialsForm.css';

function CredentialsForm({ type, onRegister, onLogin }) {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation(
    {
      email: '',
      password: '',
    }
  );

  function handleSubmit(e) {
    e.preventDefault();
    if (type === 'register') {
      onRegister(values);
    } else {
      onLogin(values);
    }
    resetForm();
  }

  return (
    <div className='credentials__content'>
      <Link to='/'>
        <img className='credentials__logo' src={logo} alt='Логотип' />
      </Link>
      <h1 className='credentials__title'>
        {type === 'register' ? 'Добро пожаловать!' : 'Рады видеть!'}
      </h1>
      <form className='credentials__form' onSubmit={handleSubmit}>
        <div className='credentials__fieldset-wrapper'>
          {type === 'register' ? (
            <fieldset className='credentials__input-container'>
              <label className='credentials__input-label' htmlFor='name'>Имя</label>
              <input
                className='credentials__input'
                id='name'
                name='name'
                type='text'
                minLength='2'
                maxLength='30'
                pattern='^[A-Za-zА-Яа-я -]+$'
                required
                value={values.name || ''}
                onChange={handleChange}
              />
              <span className='credentials__input-error'>{errors.name}</span>
            </fieldset>
          ) : null}
          <fieldset className='credentials__input-container'>
            <label className='credentials__input-label' htmlFor='email'>E-mail</label>
            <input
              className='credentials__input'
              id='email'
              name='email'
              type='email'
              minLength='2'
              maxLength='30'
              required
              value={values.email || ''}
              pattern='^[a-zA-Z0-9_.+]+(?<!^[0-9]*)@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'
              onChange={handleChange}
            />
            <span className='credentials__input-error'>{errors.email}</span>
          </fieldset>
          <fieldset className='credentials__input-container'>
            <label className='credentials__input-label' htmlFor='password'>Пароль</label>
            <input
              className='credentials__input'
              id='password'
              name='password'
              type='password'
              minLength='8'
              maxLength='30'
              required
              value={values.password || ''}
              onChange={handleChange}
            />
            <span className='credentials__input-error'>{errors.password}</span>
          </fieldset>
        </div>
        <button
          type='submit'
          className={`credentials__form-submit ${!isValid ? 'credentials__form-submit_disabled' : ''}`}
          disabled={!isValid}
        >
          {type === 'register' ? 'Зарегистрироваться' : 'Войти'}
        </button>
      </form>
      <nav className='credentials__nav'>
        <p className='credentials__help'>
          {type === 'register'
            ? 'Уже зарегистрированы?'
            : 'Ещё не зарегистрированы?'}
        </p>
        <Link
          to={type === 'register' ? '/signin' : '/signup'}
          className='credentials__nav-link'
        >
          {type === 'register' ? 'Войти' : 'Регистрация'}
        </Link>
      </nav>
    </div>
  );
}

export default CredentialsForm;
