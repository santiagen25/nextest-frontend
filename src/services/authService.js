const USE_MOCKS =
  (typeof process !== 'undefined' && process.env?.REACT_APP_USE_MOCKS === 'true') ||
  (typeof import.meta !== 'undefined' && import.meta.env?.VITE_USE_MOCKS === 'true') ||
  false;
console.log('USE_MOCKS', USE_MOCKS);

// // LOGIN
// export const login = (data) => {
//   if (USE_MOCKS) {
//     return fetch('/mocks/login.json').then(r => r.json());
//   }
//   return apiLogin.post('/', data).then(r => r.data);
// };

// // REGISTER CLIENT
// export const registerClient = (data) => {
//   if (USE_MOCKS) {
//     return fetch('/mocks/funcional/registerClient.json').then(r => r.json());
//   }
//   return apiFuncional.post('/customers', data).then(r => r.data);
// };

// // REGISTER TESTER
// export const registerTester = (data) => {
//   if (USE_MOCKS) {
//     return fetch('/mocks/funcional/registerTester.json').then(r => r.json());
//   }
//   return apiFuncional.post('/testers', data).then(r => r.data);
// };

// // CREATE PROJECT
// export const createProject = (data) => {
//   if (USE_MOCKS) {
//     return fetch('/mocks/api0808/crearProyecto.json').then(r => r.json());
//   }
//   return apiCreateProject.post('/create-project', data).then(r => r.data);
// };



// src/services/authService.js
export const login = ({ email }) => {
  const path =
    email?.startsWith('bad') ? '/mocks/login_invalid.json' :
      email?.startsWith('unverified') ? '/mocks/login_email_unverified.json' :
        email?.startsWith('mfa') ? '/mocks/login_mfa.json' :
          '/mocks/login_success.json';
  return fetch(path).then(r => r.json());
};

export const registerClient = () =>
  fetch('/mocks/funcional/registerClient.json').then(r => r.json());

export const registerTester = () =>
  fetch('/mocks/funcional/registerTester.json').then(r => r.json());

export const createProject = () =>
  fetch('/mocks/api0808/crearProyecto.json').then(r => r.json());
