import React, { useState } from 'react';

export default function RecoverAccount() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    try {
      const res = await fetch('/api/auth/request-reset', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage('Te hemos enviado un enlace de recuperación al correo.');
      } else {
        setMessage(data.error || 'Error al enviar el correo.');
      }
    } catch (err) {
      setMessage('Error de red.');
    }
  };

  return (
    <div className="container">
      <h2>Recuperar cuenta</h2>
      <form onSubmit={handleSubmit}>
        <label>Introduce tu email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <button type="submit">Enviar enlace</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
