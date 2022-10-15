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
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(localStorage.getItem('jwt'));
  const [currentUser, setCurrentUser] = React.useState({});
  const [movies, setMovies] = React.useState([]);
  const history = useHistory();

  React.useEffect(() => {
    if (loggedIn) {
      handleValidateToken();
    }
  }, [loggedIn]);

  function handleValidateToken() {
    const token = localStorage.getItem('jwt');
    if (token) {
      mainApi.validateToken(token)
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
  }

  function handleRegister({ name, email, password }) {
    mainApi.signup(name, email, password)
      .then(() => {
        history.push('/signin');
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
    setCurrentUser({});
    history.push('/signin');
  }

  function handleUpdateUser({ name, email }) {
    mainApi.editUserInfo(name, email)
      .then(data => {
        setCurrentUser(data);
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
            movies={movies}
          />
          <ProtectedRoute
            path='/saved-movies'
            component={SavedMovies}
            loggedIn={loggedIn}
            movies={movies}
          />
          <ProtectedRoute
            path='/profile'
            component={Profile}
            loggedIn={loggedIn}
            onSignOut={handleSignOut}
            onUpdateUser={handleUpdateUser}
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
