// src/utils/csvLoader.ts
import * as Papa from 'papaparse';

export const cargarCSV = async (ruta: string): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    Papa.parse(ruta, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (results) => resolve(results.data),
      error: (error) => reject(error),
    });
  });
};
