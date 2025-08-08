import axios from 'axios';

export const apiFuncional = axios.create({
	baseURL: 'https://mdas.com.es/',
});

export const apiLogin = axios.create({
	baseURL: 'https://mdas.com.es/login',
});

export const apiCreateProject = axios.create({
	baseURL: 'https://mdas.com.es/api8080/',
});

