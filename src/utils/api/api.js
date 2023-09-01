import { getCookie } from "../cookies";


export const config = {
    baseUrl: 'https://norma.nomoreparties.space/api',
    ingredients: '/ingredients',
    order: '/orders',
    headers: {
        'Content-Type': 'application/json'
    },
    registration: '/auth/register',
    authorization: '/auth/login',
    logout: '/auth/logout',
    token: '/auth/token',
    forgot: '/password-reset',
    reset: '/password-reset/reset',
    user: '/auth/user',
};

class Data {
    constructor({ baseUrl, headers, ingredients, order, registration, authorization, logout, token, forgot, reset, user }) {
        this.baseUrl = baseUrl;
        this.ingredientsUrl = ingredients;
        this.orderUrl = order;
        this.headers = headers;
        this.registrationUrl = registration;
        this.authorizationUrl = authorization;
        this.logoutUrl = logout;
        this.tokenUrl = token;
        this.forgotUrl = forgot;
        this.resetUrl = reset;
        this.userUrl = user;
    }

    collectUrl(url) {
        return `${this.baseUrl}${url}`;
    }

    checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return res.json()
            .then(function (err) {
                err.code = res.status;
                return Promise.reject(`Ошибка: ${res.status}`)
            });
    }; 

    request(url, options) {
        return fetch(url, options)
          .then(this.checkResponse)
      }

    getBurgerData() {
        const options = {
            method: 'GET',
            headers: this.headers
          }
          return this._request(this.collectUrl(this.ingredientsUrl), options)
    }

    getOrderData(idIngredientsList) {
        const options = {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
              ingredients: idIngredientsList
            })
          }
          return this.request(this.collectUrl(this.orderUrl), options)
    }

    registration(name, email, password) {
        const options = {
          method: 'POST',
          headers: this.headers,
          body: JSON.stringify({
            name,
            email,
            password
          })
        }
        return this.request(this.collectUrl(this.registrationUrl), options)
      }


      authorization(email, password) {
        const options = {
          method: 'POST',
          headers: this.headers,
          body: JSON.stringify({
            email,
            password
          })
        }
        return this.request(this.collectUrl(this.authorizationUrl), options)
      }

      logout() {
        const options = {
          method: 'POST',
          headers: this.headers,
          body: JSON.stringify({
            token: getCookie('refresh'),
          })
        }
        return this.request(this.collectUrl(this.logoutUrl), options)
      }

      forgot(email) {
        const options = {
          method: 'POST',
          headers: this.headers,
          body: JSON.stringify({
            email
          })
        }
        return this.request(this.collectUrl(this.forgotUrl), options)
      }

      reset(password, token) {
        const options = {
          method: 'POST',
          headers: this.headers,
          body: JSON.stringify({
            password,
            token
          })
        }
        return this.request(this.collectUrl(this.resetUrl), options)
      }

      refresh() {
        const options = {
          method: 'POST',
          headers: this.headers,
          body: JSON.stringify({
            token: getCookie('refresh'),
          })
        }
        return this.request(this.collectUrl(this.tokenUrl), options)
      }

      getProfile() {
        const options = {
          method: 'GET',
          headers: {
            authorization: 'Bearer ' + getCookie('access'),
            'Content-Type': 'application/json'
          },
        }
        return this.request(this.collectUrl(this.userUrl), options)
      }
    
      updateProfile(name, email, password) {
        const options = {
          method: 'PATCH',
          headers: {
            authorization: 'Bearer ' + getCookie('access'),
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name,
            email,
            password
          }),
        }
        return this.request(this.collectUrl(this.userUrl), options)
      }
}

export const apiData = new Data(config);