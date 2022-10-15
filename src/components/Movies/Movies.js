import Header from '../Header/Header';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import ButtonMoreCards from './ButtonMoreCards/ButtonMoreCards';
import Footer from '../Footer/Footer';
import './Movies.css';

function Movies({ loggedIn, movies, onSubmit }) {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className='movies-content'>
        <SearchForm onSubmit={onSubmit} />
        <MoviesCardList list_type={'movies'} movies={movies} />
        <ButtonMoreCards />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
