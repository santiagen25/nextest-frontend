import { apiFuncional, apiLogin } from './api';

export const login = (data) => apiLogin.post('/login', data);
export const registerClient = (data) => apiFuncional.post('/customers', data);
export const registerTester = (data) => apiFuncional.post('/testers', data);
	