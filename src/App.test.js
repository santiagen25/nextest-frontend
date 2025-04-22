import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App routing', () => {
  it('muestra la página de registro en la ruta /', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/cliente/i)).toBeInTheDocument();
  });

  it('muestra 404 en una ruta inexistente', () => {
    render(
      <MemoryRouter initialEntries={['/ruta-que-no-existe']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText('404')).toBeInTheDocument();
  });
});
