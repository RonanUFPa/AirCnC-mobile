import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.7.112.181:3333'
});

export default api;