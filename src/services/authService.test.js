import axios from 'axios';
import { registerClient, registerTester } from './authService';

jest.mock('axios');

describe('authService', () => {
  it('llama a /api/register/client con los datos correctos', async () => {
    const mockData = { name: 'Santi' };
    await registerClient(mockData);
    expect(axios.post).toHaveBeenCalledWith('/api/register/client', mockData);
  });

  it('llama a /api/register/tester con los datos correctos', async () => {
    const mockData = { name: 'Tester' };
    await registerTester(mockData);
    expect(axios.post).toHaveBeenCalledWith('/api/register/tester', mockData);
  });
});
