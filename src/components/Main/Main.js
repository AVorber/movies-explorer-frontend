import React from 'react';
import Promo from '../Main/Promo/Promo';
import AboutProject from '../Main/AboutProject/AboutProject';
import './Main.css';

function Main() {
  return (
    <main className='content'>
      <Promo />
      <AboutProject />
    </main>
  );
}

export default Main;
