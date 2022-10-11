import React from 'react';
import { NavLink } from 'react-router-dom';
import './BurgerMenu.css';

function BurgerMenu(props) {
  function handleCloseMenu() {
    props.setIsOpen(false);
  }

  return (
    <div className={`${props.className}`}>
      <div className='burger-menu__container'>
        <button className='burger-menu__close-button' onClick={handleCloseMenu} />
        <nav className='burger-menu__links'>
          <NavLink className='burger-menu__link' to='/'>
            Главная
          </NavLink>
          <NavLink
            className='burger-menu__link burger-menu__link_active'
            to='/movies'>
            Фильмы
          </NavLink>
          <NavLink className='burger-menu__link' to='/saved-movies'>
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
