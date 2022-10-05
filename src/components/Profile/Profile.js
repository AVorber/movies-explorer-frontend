import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import './Profile.css';

function Profile() {
  return (
    <>
      <Header loggedIn={true} />
      <section className='profile'>
        <h2 className='profile__title'>Привет, Александр!</h2>
        <form className='profile__form'>
          <fieldset className='profile__input-container'>
            <label className='profile__form-title' htmlFor='name'>Имя</label>
            <input
              required
              className='profile__form-input'
              type='text'
              id='name'
              placeholder='Имя'
            />
          </fieldset>
          <fieldset className='profile__input-container'>
            <label className='profile__form-title' htmlFor='email'>E-mail</label>
            <input
              required
              className='profile__form-input'
              type='email'
              name='email'
              placeholder='E-mail'
            />
          </fieldset>
          <button className='profile__edit-button' type='submit'>Редактировать</button>
        </form>
        <Link to='/sign-in' className='profile__signout-link'>
          Выйти из аккаунта
        </Link>
      </section>
    </>
  );
}

export default Profile;
