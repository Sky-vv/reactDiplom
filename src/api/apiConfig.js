import axios from 'axios';

const baseURL = 'https://demo-api.it-shatle.by/';

const config = {
    baseURL,
    timeout: 100000,
    headers: {
        'accept': '*/*',
        'Content-Type': 'application/json',
    },
    params: {},
};

const api = axios.create(config);

export default api;