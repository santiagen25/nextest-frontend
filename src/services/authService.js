// authService.js
import axios from 'axios';

export const registerClient = (data) => {
  return axios.post('/api/register/client', data);
};

export const registerTester = (data) => {
  return axios.post('/api/register/tester', data);
};
