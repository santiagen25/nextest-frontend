import axios from 'axios';

// Instancias reales (se usan sólo en modo "real")
const apiFuncionalAxios = axios.create({ baseURL: 'https://mdas.com.es/' });
const apiLoginAxios     = axios.create({ baseURL: 'https://mdas.com.es/login' });
const apiCreateAxios    = axios.create({ baseURL: 'https://mdas.com.es/api8080/' });

const instances = { funcional: apiFuncionalAxios, login: apiLoginAxios, create: apiCreateAxios };

const getMode = () => localStorage.getItem('apiMode') || 'real';

async function request({ service='funcional', method='get', url='', data, config }) {
  if (getMode() === 'mock') {
    const base = process.env.PUBLIC_URL || '/';
    const clean = (s='') => s.replace(/^\/+/, '');
    // 1ª opción: /mocks/<service>/<url>.json  (p.ej. /mocks/login/auth.json)
    const primary = `${base}mocks/${service}/${clean(url)}.json`;
    // 2ª (fallback): /mocks/<service>.json   (p.ej. /mocks/login.json)
    const fallback = `${base}mocks/${service}.json`;

    let res = await fetch(primary);
    if (!res.ok) res = await fetch(fallback);
    if (!res.ok) throw new Error(`Mock no encontrado: ${primary} | ${fallback}`);

    const json = await res.json();
    return { data: json };
  }

  return instances[service].request({ method, url, data, ...config });
}

// Wrappers "estilo axios"
export const apiGet  = (opts) => request({ ...opts, method: 'get' });
export const apiPost = (opts) => request({ ...opts, method: 'post' });
export const apiPut  = (opts) => request({ ...opts, method: 'put' });
export const apiDel  = (opts) => request({ ...opts, method: 'delete' });

// --- Compatibilidad con tu código existente ---
// Simulamos axios instances, pero debajo usan los wrappers (funciona con mocks)
const mkCompat = (service) => ({
  get:    (url, config)        => apiGet({  service, url,            config }),
  post:   (url, data, config)  => apiPost({ service, url, data,      config }),
  put:    (url, data, config)  => apiPut({  service, url, data,      config }),
  delete: (url, config)        => apiDel({  service, url,            config }),
});

// Exports con los nombres que te pide authService.js
export const apiLogin         = mkCompat('login');
export const apiFuncional     = mkCompat('funcional');
export const apiCreateProject = mkCompat('create');
