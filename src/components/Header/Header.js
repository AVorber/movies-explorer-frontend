import React from 'react';
import logo from '../../images/header-logo.svg';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header({ loggedIn }) {
  const headerClass = `header ${loggedIn ? 'header_logged-in' : ''}`;

  return (
    <header className={headerClass}>
      <Link to='/'>
        <img className='header__logo' src={logo} alt='Логотип' />
      </Link>
      <Navigation loggedIn={loggedIn} />
    </header>
  );
}

export default Header;
