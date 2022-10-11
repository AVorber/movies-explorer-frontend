import Header from '../Header/Header';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import ButtonMoreCards from './ButtonMoreCards/ButtonMoreCards';
import Footer from '../Footer/Footer';
import './Movies.css';

function Movies() {
  return (
    <>
      <Header loggedIn={true} />
      <main className='movies-content'>
        <SearchForm />
        <MoviesCardList list_type={'movies'} />
        <ButtonMoreCards />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
