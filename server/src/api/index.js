const axios = require('axios');

const api = axios.create({
  baseURL: 'https://api.stackexchange.com/2.2',
});

module.exports = api;
