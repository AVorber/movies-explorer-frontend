import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation({loggedIn}) {
  return (
    <>
      { !loggedIn ? (
        <div className='menu'>
          <Link to='/sign-up' className='menu__link menu__link_weigt_m menu__link_color_white'  alt='Регистрация'>
            Регистрация
          </Link>
          <Link to='/sign-in' className='menu__link menu__link_button menu__link_weigt_m' alt='Войти'>
            Войти
          </Link>
        </div>
      ) : (
        <div className='menu menu_logged-in'>
          <Link to='/movies' className='menu__link menu__link_weigt_m menu__link_size_m' alt='Фильмы'>
            Фильмы
          </Link>
          <Link to='/saved-movies' className='menu__link menu__link_size_m' alt='Сохранённые фильмы'>
            Сохранённые фильмы
          </Link>
          <Link to='/profile' className='menu__profile-button' alt='Аккаунт'>
            Аккаунт
            <span className='menu__profile-icon' />
          </Link>
        </div>
      )}
    </>
  );
}

export default Navigation;
