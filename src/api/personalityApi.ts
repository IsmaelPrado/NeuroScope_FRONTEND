import type { SetResponse } from '../types/OCEANdatos';

const BASE_URL = 'http://localhost:8000';

export async function fetchPersonalityData(
  skip = 0,
  limit = 10,
  dimensions: string[] = [], // Nuevo parámetro
  modo :'cuantitativo' | 'cualitativo'
): Promise<SetResponse> {
  const dimensionParams = dimensions.map((dim) => `dimension=${dim}`).join('&');
  const queryString = `skip=${skip}&limit=${limit}&modo=${modo}` + (dimensions.length ? `&${dimensionParams}` : '');

  const response = await fetch(`${BASE_URL}/set?${queryString}`);

  if (!response.ok) {
    throw new Error(`Error al cargar datos: ${response.statusText}`);
  }

  const data: SetResponse = await response.json();
  return data;
}

