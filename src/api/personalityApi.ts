import type { SetResponse } from '../types/OCEANdatos';

const BASE_URL = 'http://localhost:8000';

export async function fetchPersonalityData(
  skip = 0,
  limit = 10
): Promise<SetResponse> {
  const response = await fetch(`${BASE_URL}/set?skip=${skip}&limit=${limit}`);

  if (!response.ok) {
    throw new Error(`Error al cargar datos: ${response.statusText}`);
  }

  const data: SetResponse = await response.json();

  return data;
}
