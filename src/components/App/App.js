import React from 'react';
import { Route, Switch, useHistory} from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Main from '../Main/Main';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';
import { searchStringFilter } from '../../utils/MoviesFilters';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(localStorage.getItem('jwt'));
  const [currentUser, setCurrentUser] = React.useState({});
  const [movies, setMovies] = React.useState([]);
  const [filteredMovies, setFilteredMovies] = React.useState(
    JSON.parse(localStorage.getItem('filteredMovies')) || []
  );
  const [savedMovies, setSavedMovies] = React.useState([]);
  const history = useHistory();

  React.useEffect(() => {
    if (loggedIn) {
      Promise.all([moviesApi.getMovies(), mainApi.getSavedMovies()])
        .then(([moviesData, savedMoviesData]) => {
          setMovies(moviesData);
          setSavedMovies(savedMoviesData);
        })
        .catch(err => alert(err))
    }
  }, [history, loggedIn]);

  React.useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      mainApi.getUserInfo(token)
        .then(result => {
          setLoggedIn(true);
          setCurrentUser(result.data);
        })
        .catch(err => {
          alert(err);
          localStorage.removeItem('jwt');
          history.push('/signup');
        });
    }
  }, [loggedIn]);

  function handleRegister({ name, email, password }) {
    mainApi.signup(name, email, password)
      .then(() => {
        handleLogin({ email, password });
      })
      .catch(err => {
        alert(err);
      });
    }

  function handleLogin({ email, password }) {
    mainApi.signin(email, password)
      .then(result => {
        setLoggedIn(true);
        localStorage.setItem('jwt', result.token);
        history.push('/movies');
      })
      .catch(err => {
        alert(err);
      });
  }

  function handleSignOut() {
    setLoggedIn(false);
    localStorage.removeItem('jwt');
    localStorage.removeItem('searchString');
    localStorage.removeItem('filteredMovies');
    localStorage.removeItem('shortFilmsToggle');
    setCurrentUser({});
    history.push('/signin');
  }

  function handleUpdateUser({ name, email }) {
    mainApi.editUserInfo(name, email)
      .then(result => {
        setCurrentUser(result);
      })
      .catch(err => alert(err))
  }

  function handleSearchMovies() {
    const searchString = localStorage.getItem('searchString');
    const filteredMovies = searchStringFilter(movies, searchString)

    localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies));
    setFilteredMovies(filteredMovies);
  }

  function handleMovieLike(movie) {
    mainApi.saveMovie(movie)
      .then(() => {
        setMovies(movies => movies.filter(item => item.id !== movie.id));
      })
      .catch(err => alert(err))
  }

  function handleMovieDelete(movieId) {
    mainApi.deleteMovie(movieId)
      .then(() => {
        setSavedMovies(savedMovies => savedMovies.filter(item => item._id !== movieId))
      })
      .catch(err => alert(err))
  }

  return (
    <div className='page'>
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route exact path='/'>
            <Main loggedIn={loggedIn} />
          </Route>
          <Route path='/signup'>
            <Register onRegister={handleRegister} />
          </Route>
          <Route path='/signin'>
            <Login onLogin={handleLogin} />
          </Route>
          <ProtectedRoute
            path='/movies'
            component={Movies}
            loggedIn={loggedIn}
            movies={filteredMovies}
            savedMovies={savedMovies}
            onSubmit={handleSearchMovies}
            onMovieLike={handleMovieLike}
            onMovieDelete={handleMovieDelete}
          />
          <ProtectedRoute
            path='/saved-movies'
            component={SavedMovies}
            loggedIn={loggedIn}
            movies={savedMovies}
            savedMovies={savedMovies}
            onSubmit={handleSearchMovies}
            onMovieLike={handleMovieLike}
            onMovieDelete={handleMovieDelete}
          />
          <ProtectedRoute
            path='/profile'
            component={Profile}
            loggedIn={loggedIn}
            onSignOut={handleSignOut}
            onSubmit={handleUpdateUser}
          />
          <Route path='*'>
            <NotFoundPage />
          </Route>
        </Switch>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
