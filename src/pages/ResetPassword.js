import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function ResetPassword() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');

  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, password }),
      });
      const data = await res.json();
      if (res.ok) {
        setMsg('Contraseña actualizada correctamente.');
      } else {
        setMsg(data.error || 'Error al actualizar la contraseña.');
      }
    } catch (err) {
      setMsg('Error de red.');
    }
  };

  return (
    <div className="container">
      <h2>Resetear contraseña</h2>
      <form onSubmit={handleReset}>
        <label>Nueva contraseña:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Cambiar contraseña</button>
      </form>
      {msg && <p>{msg}</p>}
    </div>
  );
}
