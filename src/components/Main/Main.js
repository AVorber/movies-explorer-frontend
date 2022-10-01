import React from 'react';
import Promo from '../Main/Promo/Promo';
import AboutProject from '../Main/AboutProject/AboutProject';
import Techs from './Techs/Techs';
import './Main.css';

function Main() {
  return (
    <main className='content'>
      <Promo />
      <AboutProject />
      <Techs />
    </main>
  );
}

export default Main;
