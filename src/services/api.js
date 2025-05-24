import axios from 'axios';

export const apiFuncional = axios.create({
	baseURL: 'http://92.205.178.174:3010',
});

export const apiLogin = axios.create({
	baseURL: 'http://92.205.178.174:3011',
});
