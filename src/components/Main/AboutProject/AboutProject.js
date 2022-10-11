import React from 'react';
import './AboutProject.css';

function AboutProject() {
  return (
    <section className='about-project' id='about-project'>
      <h2 className='about-project__title'>О проекте</h2>
      <ul className='about-project__content'>
        <li className='about-project__content-item'>
          <h3 className='about-project__content-title'>
            Дипломный проект включал 5 этапов
          </h3>
          <p className='about-project__content-text'>
            Составление плана, работу над бэкендом, вёрстку,
            добавление функциональности и финальные доработки.
          </p>
        </li>
        <li className='about-project__content-item'>
          <h3 className='about-project__content-title'>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className='about-project__content-text'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <ul className='about-project__timetable'>
        <li className='about-project__timetable-item'>
          <h3 className='about-project__timetable-title'>1 неделя</h3>
          <p className='about-project__timetable-text'>Back-end</p>
        </li>
        <li className='about-project__timetable-item about-project__timetable-item_long'>
          <h3 className='about-project__timetable-title about-project__timetable-title_long'>4 недели</h3>
          <p className='about-project__timetable-text'>Front-end</p>
        </li>
      </ul>
    </section>
  );
}

export default AboutProject;
