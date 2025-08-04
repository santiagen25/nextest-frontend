import { apiCreateProject, apiFuncional, apiLogin } from './api';

export const login = (data) => apiLogin.post('/', data);
export const registerClient = (data) => apiFuncional.post('/customers', data);
export const registerTester = (data) => apiFuncional.post('/testers', data);
export const createProject = (data) => apiCreateProject.post('/create-project', data);
