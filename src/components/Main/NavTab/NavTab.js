import './NavTab.css';

function NavTab() {
  return (
    <nav className='nav'>
      <ul className='nav__links'>
        <li><a href='#about-project' className='nav__link'>О проекте</a></li>
        <li><a href='#techs' className='nav__link'>Технологии</a></li>
        <li><a href='#adout-me' className='nav__link'>Студент</a></li>
      </ul>
    </nav>
  );
}

export default NavTab;
