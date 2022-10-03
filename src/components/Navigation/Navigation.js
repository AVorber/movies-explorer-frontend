import React from 'react';
import { Link } from 'react-router-dom';
import profile_icon from '../../images/profile-icon.svg';
import './Navigation.css';

function Navigation({loggedIn}) {
  return (
    <>
      { !loggedIn ? (
        <div className='menu'>
          <Link to='/sign-up' className='menu__link menu__link_weigt_m menu__link_color_white'>
            Регистрация
          </Link>
          <Link to='/sign-in' className='menu__link menu__link_button menu__link_weigt_m'>
            Войти
          </Link>
        </div>
      ) : (
        <div className='menu menu_logged-in'>
          <Link to='/movies' className='menu__link menu__link_weigt_m menu__link_size_m'>
            Фильмы
          </Link>
          <Link to='/saved-movies' className='menu__link menu__link_size_m'>
            Сохранённые фильмы
          </Link>
          <Link to='/profile' className='menu__profile-button'>
            Аккаунт
            <img className='menu__profile-icon' src={profile_icon} alt='Профиль' />
          </Link>
        </div>
      )}
    </>
  );
}

export default Navigation;
