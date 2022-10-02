import React from 'react';
import photo from '../../../images/foto.jpg';
import Portfolio from '../Portfolio/Portfolio';
import './AboutMe.css';

function AboutMe() {
  return (
    <section className='about-me' id='adout-me'>
      <h2 className='about-me__title'>Студент</h2>
      <div className='about-me__container'>
        <div className='about-me__info'>
          <div>
            <p className='about-me__name'>Александр</p>
            <p className='about-me__job'>Фронтенд-разработчик, 32 года</p>
            <p className='about-me__description'>
              Фронтенд-разработчик — это специалист, который занимается разработкой
              пользовательского интерфейса, то есть той части сайта или приложения,
              которую видят посетители страницы.
            </p>
          </div>
          <ul className='about-me__links'>
            <li>
              <a
                className='about-me__links-item'
                href='https://github.com/AVorber'
                target='_blank'
                rel='noreferrer'
              >
                Github
              </a>
              </li>
            </ul>
        </div>
        <img className='about-me__avatar' src={photo} alt='Аватар пользователя' />
      </div>
      <Portfolio />
    </section>
  );
}

export default AboutMe;
