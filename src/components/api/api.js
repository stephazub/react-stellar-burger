export const config = {
    baseUrl: 'https://norma.nomoreparties.space/api',
    ingredients: '/ingredients',
    order: '/orders',
    headers: {
        'Content-Type': 'application/json'
    },
};

class Data {
    constructor({ baseUrl, headers, ingredients, order }) {
        this.baseUrl = baseUrl;
        this.ingredientsUrl = ingredients;
        this.orderUrl = order;
        this.headers = headers;
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

    getBurgerData() {
        return fetch(this.collectUrl(this.ingredientsUrl), {
            method: 'GET',
            headers: this.headers,
        }
        )
            .then(this.checkResponse);
    }

    getOrderData(idIngredientsList) {
        return fetch(this.collectUrl(this.orderUrl), {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
                ingredients: idIngredientsList
            })
        }
        )
            .then(this.checkResponse);
    }


}

export const apiData = new Data(config);