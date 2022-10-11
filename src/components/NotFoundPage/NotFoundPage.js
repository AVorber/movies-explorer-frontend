import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFoundPage.css';

function NotFoundPage() {
  const history = useNavigate();
  return (
    <div className='not-found-page'>
      <h2 className='not-found-page__title'>404</h2>
      <p className='not-found-page__description'>Страница не найдена</p>
      <button type='button' className='not-found-page__button' onClick={() => history(-1)}>Назад</button>
    </div>
  );
}

export default NotFoundPage;
