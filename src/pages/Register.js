import React, { useState } from 'react';

export default function Register() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (!/^[a-zA-Z0-9]+$/.test(userId)) {
      return setError('La ID solo puede contener letras y números');
    }

    if (password !== confirmPassword) {
      return setError('Las contraseñas no coinciden');
    }

    if (password.length < 8) {
      return setError('La contraseña debe tener al menos 8 caracteres');
    }

    // Aquí iría lógica CAPTCHA, rate limiting, email confirm, etc.
    console.log('Cuenta creada:', { userId, password });
    setSuccess(true);
  };

  return (
    <div>
      <h2>Crear Cuenta</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="ID de usuario"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
        /><br />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br />
        <input
          type="password"
          placeholder="Repetir contraseña"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        /><br />
        <button type="submit">Crear cuenta</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>¡Cuenta creada con éxito!</p>}
    </div>
  );
}
