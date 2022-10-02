import './Portfolio.css';

function Portfolio() {
  return (
    <nav className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__links'>
        <li className='portfolio__link-item'>
          <a
            href='https://avorber.github.io/how-to-learn/index.html'
            className='portfolio__link'
            target='_blank'
            rel='noreferrer'
          >
            Статичный сайт
            <span className='portfolio__link-icon'>↗</span>
          </a>
        </li>
        <li className='portfolio__link-item'>
          <a
            href='https://avorber.github.io/russian-travel/index.html'
            className='portfolio__link'
            target='_blank'
            rel='noreferrer'
          >
            Адаптивный сайт
            <span className='portfolio__link-icon'>↗</span>
          </a>
        </li>
        <li className='portfolio__link-item'>
          <a
            href='https://avorber.github.io/react-mesto-auth/index.html'
            className='portfolio__link'
            target='_blank'
            rel='noreferrer'
          >
            Одностраничное приложение
            <span className='portfolio__link-icon'>↗</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Portfolio;
