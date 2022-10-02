import React from 'react';
import logo from '../../images/header-logo.svg';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header() {
  return (
    <header className='header'>
      <Link to='/'>
        <img className='header__logo' src={logo} alt='Логотип' />
      </Link>
      <Navigation />
    </header>
  );
}

export default Header;
