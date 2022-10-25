class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
  }

  _validateResponse(response) {
    if (response.ok) {
      return response.json()
    }
    return Promise.reject(`Ошибка: ${response.status}`)
  }

  signin(email, password) {
    return fetch(`${this._baseUrl}/signin`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        })
      })
        .then(response => this._validateResponse(response))
        .then((data) => {
      if (data.token) {
        localStorage.setItem('jwt', data.token);
        return data;
      }
    })
  }

  signup(name, email, password) {
    return fetch(`${this._baseUrl}/signup`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        })
      })
        .then(response => this._validateResponse(response))
  }

  getUserInfo(token) {
    return fetch(`${this._baseUrl}/users/me`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
        .then(response => this._validateResponse(response))
  }

  editUserInfo(name, email, token) {
    return fetch(`${this._baseUrl}/users/me`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: name,
          email: email,
        })
      })
        .then(response => this._validateResponse(response))
  }

  getSavedMovies(token) {
    return fetch(`${this._baseUrl}/movies`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
        .then(response => this._validateResponse(response))
  }

  saveMovie(data, token) {
    return fetch(`${this._baseUrl}/movies`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data)
      })
        .then(response => this._validateResponse(response))
  }

  deleteMovie(movieId, token) {
    return fetch(`${this._baseUrl}/movies/${movieId}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
        .then(response => this._validateResponse(response))
  }
}

const mainApi = new MainApi({
  baseUrl: 'https://api.arebrov.diploma.nomoredomains.sbs',
});

export default mainApi;
