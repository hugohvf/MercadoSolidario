import axios from 'axios';

const api = axios.create({
    baseURL: 'http://842da6a9.ngrok.io',
});

export default api;