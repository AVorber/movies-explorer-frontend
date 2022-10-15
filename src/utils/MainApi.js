class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
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
        headers: this._headers,
        credentials: 'include',
        body: JSON.stringify({
          email: email,
          password: password,
        })
      })
        .then(response => this._validateResponse(response))
        .then((data) => {
      if (data.token) {
        localStorage.setItem("jwt", data.token);
        return data;
      }
    })
  }

  signup(name, email, password) {
    return fetch(`${this._baseUrl}/signup`,
      {
        method: 'POST',
        headers: this._headers,
        credentials: 'include',
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        })
      })
        .then(response => this._validateResponse(response))
  }

  validateToken(token) {
    return fetch(`${this._baseUrl}/users/me`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        credentials: 'include',
      })
        .then(response => this._validateResponse(response))
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`,
      {
        method: 'GET',
        headers: this._headers,
        credentials: 'include',
      })
        .then(response => this._validateResponse(response))
  }

  editUserInfo(name, email) {
    return fetch(`${this._baseUrl}/users/me`,
      {
        method: 'PATCH',
        headers: this._headers,
        credentials: 'include',
        body: JSON.stringify({
          name: name,
          email: email,
        })
      })
        .then(response => this._validateResponse(response))
  }
}

const mainApi = new MainApi({
  baseUrl: 'https://api.arebrov.diploma.nomoredomains.sbs',
  // baseUrl: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default mainApi;
