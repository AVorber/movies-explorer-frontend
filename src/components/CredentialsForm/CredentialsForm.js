import React from 'react';
import logo from '../../images/credentials-form-logo.svg';
import { Link } from 'react-router-dom';
import './CredentialsForm.css';

function CredentialsForm({ type }) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
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
                minLength='2'
                maxLength='30'
                required
                value={name}
                onChange={handleNameChange}
              />
            </fieldset>
          ) : null}
          <fieldset className='credentials__input-container'>
            <label className='credentials__input-label' htmlFor='email'>E-mail</label>
            <input
              className='credentials__input'
              id='email'
              type='email'
              minLength='2'
              maxLength='30'
              required
              value={email}
              onChange={handleEmailChange}
            />
          </fieldset>
          <fieldset className='credentials__input-container'>
            <label className='credentials__input-label' htmlFor='password'>Пароль</label>
            <input
              className='credentials__input'
              id='password'
              type='password'
              minLength='2'
              maxLength='30'
              required
              value={password}
              onChange={handlePasswordChange}
            />
          </fieldset>
        </div>
        <button
          type='submit'
          className='credentials__form-submit'
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
          to={type === 'register' ? '/sign-in' : '/sign-up'}
          className='credentials__nav-link'
        >
          {type === 'register' ? 'Войти' : 'Регистрация'}
        </Link>
      </nav>
    </div>
  );
}

export default CredentialsForm;
