import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__promo'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className='footer__info'>
        <p className='footer__copyright'>&copy; 2022</p>
        <nav aria-label='Ссылки на полезные ресурсы'>
          <ul className='footer__links'>
            <li>
              <a
                href='https://practicum.yandex.ru/'
                className='footer__link'
                target='_blank'
                rel='noreferrer'
              >
                Яндекс.Практикум
              </a>
            </li>
            <li>
              <a
                href='https://github.com/'
                className='footer__link'
                target='_blank'
                rel='noreferrer'
              >
                Github
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
