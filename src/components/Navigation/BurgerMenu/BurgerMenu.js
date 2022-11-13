import React from 'react';
import {NavLink, useLocation } from 'react-router-dom';
import './BurgerMenu.css';

function BurgerMenu(props) {
  const location = useLocation();
  function handleCloseMenu() {
    props.setIsOpen(false);
  }

  return (
    <div className={`${props.className}`}>
      <div className='burger-menu__container'>
        <button className='burger-menu__close-button' onClick={handleCloseMenu} />
        <nav className='burger-menu__links'>
          <NavLink
            to='/'
            className={
                location.pathname === '/'
                  ? 'burger-menu__link burger-menu__link_active'
                  : 'burger-menu__link'
              }
          >
            Главная
          </NavLink>
          <NavLink
            to='/movies'
            className={
                location.pathname === '/movies'
                  ? 'burger-menu__link burger-menu__link_active'
                  : 'burger-menu__link'
              }
          >
            Фильмы
          </NavLink>
          <NavLink
            to='/saved-movies'
            className={
              location.pathname === '/saved-movies'
                ? 'burger-menu__link burger-menu__link_active'
                : 'burger-menu__link'
            }
          >
            Сохранённые фильмы
          </NavLink>
        </nav>
        <NavLink to='/profile' className='burger-menu__profile-button' alt='Аккаунт'>
          Аккаунт
          <span className='menu__profile-icon' />
        </NavLink>
      </div>
    </div>
  );
}

export default BurgerMenu;
