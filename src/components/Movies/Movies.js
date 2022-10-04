import Header from '../Header/Header';
import SearchForm from './SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import './Movies.css';

function Movies() {
  return (
    <>
      <Header loggedIn={true} />
      <main className='movies-content'>
        <SearchForm />
      </main>
      <Footer />
    </>
  );
}

export default Movies;
