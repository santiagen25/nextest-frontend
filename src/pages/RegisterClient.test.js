import { render, screen, fireEvent } from '@testing-library/react';
import RegisterClient from './RegisterClient';

describe('RegisterClient', () => {
  test('muestra paso 1 y navega al paso 2', () => {
    render(<RegisterClient />);

    // Verifica que aparece el texto del paso 1
    expect(screen.getByText(/About yourself/i)).toBeInTheDocument();

    // Simula escribir en el input de nombre
    const nameInput = screen.getByPlaceholderText(/name.../i);
    fireEvent.change(nameInput, { target: { value: 'Santi' } });
    expect(nameInput.value).toBe('Santi');

    // Simula hacer clic en "Next"
    fireEvent.click(screen.getByText(/Next/i));

    // Verifica que aparece el paso 2
    expect(screen.getByText(/About your company/i)).toBeInTheDocument();
  });
});
