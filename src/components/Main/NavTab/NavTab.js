import './NavTab.css';

function NavTab() {
  return (
    <nav className='nav'>
      <ul className='nav__links'>
        <li><a href='#about' className='nav__link'>О проекте</a></li>
        <li><a href='#tech' className='nav__link'>Технологии</a></li>
        <li><a href='#student' className='nav__link'>Студент</a></li>
      </ul>
    </nav>
  );
}

export default NavTab;
