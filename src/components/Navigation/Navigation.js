import React from 'react';
import { NavLink } from 'react-router-dom';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import './Navigation.css';

function Navigation({loggedIn}) {
    const [isOpen, setIsOpen] = React.useState(false);

  function handleOpenMenu() {
    setIsOpen(true);
  }
  return (
    <>
      { !loggedIn ? (
        <nav className='menu'>
          <NavLink to='/sign-up' className='menu__link menu__link_weigt_m menu__link_color_white'  alt='Регистрация'>
            Регистрация
          </NavLink>
          <NavLink to='/sign-in' className='menu__link menu__link_button menu__link_weigt_m' alt='Войти'>
            Войти
          </NavLink>
        </nav>
      ) : (
        <>
          <nav className='menu menu_logged-in'>
            <NavLink to='/movies' className='menu__link menu__link_weigt_m menu__link_size_m' alt='Фильмы'>
              Фильмы
            </NavLink>
            <NavLink to='/saved-movies' className='menu__link menu__link_size_m' alt='Сохранённые фильмы'>
              Сохранённые фильмы
            </NavLink>
            <NavLink to='/profile' className='menu__profile-button' alt='Аккаунт'>
              Аккаунт
              <span className='menu__profile-icon' />
            </NavLink>
          </nav>
          <div className='menu__burger'>
            <button className='menu__burger-button' aria-label='Бургер меню' type='button' onClick={handleOpenMenu} />
            <BurgerMenu setIsOpen={setIsOpen} className={`burger-menu ${isOpen ? 'burger-menu_visible' : ''}`}/>
          </div>
        </>
      )}
    </>
  );
}

export default Navigation;
