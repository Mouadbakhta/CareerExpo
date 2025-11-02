import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api', // Change en prod
  timeout: 10000,
});

export default api;