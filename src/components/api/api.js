const config = {
    baseUrl: 'https://norma.nomoreparties.space/api/ingredients',
    headers: {
        'Content-Type': 'application/json'
    },
};

class Data {
    constructor({baseUrl, headers}) {
        this.baseUrl = baseUrl;
        this.headers = headers;
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

    getData() {
      return fetch(this.baseUrl, {
        method: 'GET',
        headers: this.headers,
      }
      )
      .then(this.checkResponse)
    }
}

export const ingredientsData = new Data (config);
