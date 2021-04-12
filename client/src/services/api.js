import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000',
  headers: {
    'Content-Type': 'application/graphql',
    Accept: '*/*',
  }
});

api.interceptors.response.use(response => response.data?.data || response.data || response)

export default api;
