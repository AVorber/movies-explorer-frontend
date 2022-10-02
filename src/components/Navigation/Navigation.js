import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <div className='menu'>
      <Link to='/sign-up' className='menu__link'>
        Регистрация
      </Link>
      <Link to='/sign-in' className='menu__link menu__link_button'>
        Войти
      </Link>
    </div>
  );
}

export default Navigation;
