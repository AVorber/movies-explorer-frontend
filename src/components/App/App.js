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
  const [savedMovies, setSavedMovies] = React.useState(
    JSON.parse(localStorage.getItem('savedMovies')) || []
  );
  const [isLoading, setIsLoading] = React.useState(true);
  const history = useHistory();

  React.useEffect(() => {
    validateToken();
  }, []);

  React.useEffect(() => {
    setIsLoading(true);
    const token = localStorage.getItem('jwt');
    setTimeout(() => {
      if (loggedIn) {
      Promise.all([moviesApi.getMovies(), mainApi.getSavedMovies(token)])
        .then(([moviesData, savedMoviesData]) => {
          setMovies(moviesData);
          setSavedMovies(savedMoviesData);
          setIsLoading(false);
        })
        .catch(err => alert(err))
      }
    },500);
  }, [history, loggedIn]);

  function validateToken() {
    const token = localStorage.getItem('jwt');
    if (token) {
      getUserInfo(token);
    } else {
      handleSignOut();
    }
  }

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
        const token = result.token;
        setLoggedIn(true);
        localStorage.setItem('jwt', token);
        getUserInfo(token);
        history.push('/movies');
      })
      .catch(err => {
        alert(err);
      });
  }

  function handleSignOut() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('searchString');
    localStorage.removeItem('filteredMovies');
    localStorage.removeItem('savedMovies');
    localStorage.removeItem('shortFilmsToggle');
    localStorage.removeItem('query');
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('isShort');
    setLoggedIn(false);
    setCurrentUser({});
    setMovies([]);
    setFilteredMovies([]);
    setSavedMovies([]);
    history.push('/signin');
  }

  function getUserInfo(token) {
    mainApi.getUserInfo(token)
      .then(result => {
        setCurrentUser(result.data);
        setLoggedIn(true);
      })
      .catch(err => {
        alert(err);
        localStorage.removeItem('jwt');
        history.push('/signup');
      });
  }

  function handleUpdateUser({ name, email }) {
    const token = localStorage.getItem('jwt');
    mainApi.editUserInfo(name, email, token)
      .then(result => {
        setCurrentUser(result);
      })
      .catch(err => alert(err))
  }

  function handleSearchMovies(searchString) {
    setTimeout(() => {
      setIsLoading(false);
      const filteredMovies = searchStringFilter(movies, searchString);
      localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies));
      setFilteredMovies(filteredMovies);
    }, 500);
  }

  function handleSearchSavedMovies(searchString) {
    setTimeout(() => {
      setIsLoading(false);
      const filteredMovies = searchStringFilter(savedMovies, searchString)
      setSavedMovies(filteredMovies);
    }, 500);
  }

  function handleMovieLike(movie) {
    const token = localStorage.getItem('jwt');
    mainApi.saveMovie(movie, token)
      .then(() => {
        setMovies(movies => movies.filter(item => item.id !== movie.id));
      })
      .catch(err => alert(err))
    mainApi.getSavedMovies(token)
      .then(result => {
        setSavedMovies(result);
        localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
      })
      .catch(err => alert(err))
  }

  function handleMovieDelete(movieId) {
    const token = localStorage.getItem('jwt');
    mainApi.deleteMovie(movieId, token)
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
            isLoading={isLoading}
          />
          <ProtectedRoute
            path='/saved-movies'
            component={SavedMovies}
            loggedIn={loggedIn}
            movies={savedMovies}
            savedMovies={savedMovies}
            onSubmit={handleSearchSavedMovies}
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
