import axios from 'axios';

const api = axios.create ({
    baseURL : 'https://omnistack-backendgfs.herokuapp.com',
});

export default api;