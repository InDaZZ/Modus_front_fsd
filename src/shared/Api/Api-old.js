export default class Api {
    constructor({ url, headers }) {
        this.url = url;
        this.bas_url = 'http://localhost:3000';
        this.headers = headers;
        this.admin = localStorage.getItem('adminToken');
    }
    _handleResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return res.text().then((text) => {
            throw JSON.parse(text).message || JSON.parse(text).error;
        });
    }

    register() {
        return fetch(this.url + '/signup', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(this._handleResponse);
    }

    rollGet() {
        return fetch(this.url + '/allroll', {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(this._handleResponse);
    }

    pizzaGet() {
        return fetch(this.url + '/allpizza', {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(this._handleResponse);
    }

    hotGet() {
        return fetch(this.url + '/allhot', {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(this._handleResponse);
    }

    anonimOrderCreate({ order, phone, owner, clientData }) {
        return fetch(this.url + '/order', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                products: order,
                phone: phone,
                owner: owner,
                clientData: clientData,
            }),
        }).then(this._handleResponse);
    }

    adminLogin(name, password) {
        console.log({ name: name, password: password });
        return fetch(this.url + '/adminpanellogin', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: name, password: password }),
        }).then(this._handleResponse);
    }

    adminCreateRoll(data) {
        console.log(data);
        return fetch(this.url + '/createroll', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(this._handleResponse);
    }

    //let rollData = { ...product, owner: admin }

    adminDeletRoll(roll) {
        console.log({ ...roll, owner: this.admin });
        return fetch(this.url + '/deletroll', {
            method: 'DELETE',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...roll, owner: this.admin }),
        }).then(this._handleResponse);
    }
    adminChangeRoll(data) {
        console.log(data);
        return fetch(this.url + '/updateroll', {
            method: 'PATCH',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...data, owner: this.admin }),
        }).then(this._handleResponse);
    }

    adminCreatePizza(data) {
        console.log(data);
        return fetch(this.url + '/createpizza', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...data, owner: this.admin }),
        }).then(this._handleResponse);
    }

    adminDeletPizza(pizza) {
        console.log({ ...pizza, owner: this.admin });
        return fetch(this.url + '/deletpizza', {
            method: 'DELETE',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...pizza, owner: this.admin }),
        }).then(this._handleResponse);
    }

    adminChangePizza(pizza) {
        console.log(pizza);
        return fetch(this.url + '/updatepizza', {
            method: 'PATCH',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...pizza, owner: this.admin }),
        }).then(this._handleResponse);
    }

    adminCreateHot(data) {
        console.log(data);
        return fetch(this.url + '/createhot', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...data, owner: this.admin }),
        }).then(this._handleResponse);
    }

    adminChangeHot(hot) {
        console.log(hot);
        return fetch(this.url + '/updatehot', {
            method: 'PATCH',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...hot, owner: this.admin }),
        }).then(this._handleResponse);
    }

    adminDeletHot(hot) {
        return fetch(this.url + '/delethot', {
            method: 'DELETE',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...hot, owner: this.admin }),
        }).then(this._handleResponse);
    }
}

export const api = new Api({
    url: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json',
    },
});
