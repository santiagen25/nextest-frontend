import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 text-center px-3">
      <h1 className="fw-bold display-3">404</h1>
      <p className="fs-4 mb-4">Oops! The page you're looking for doesn't exist.</p>
      <button onClick={() => navigate('/')} className="btn btn-dark">
        Go back home
      </button>
    </div>
  );
}
