import React, { useEffect, useState } from 'react';
import { cargarCSV } from '../../utils/csvLoader';

interface FilaDatos {
  [key: string]: string;
}

const DataTable: React.FC = () => {
  const [datos, setDatos] = useState<FilaDatos[]>([]);
  const [columnas, setColumnas] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await cargarCSV('/dataset.csv');
        const datosLimitados = data.slice(0, 10);
        setDatos(datosLimitados);
        if (datosLimitados.length > 0) {
          setColumnas(Object.keys(datosLimitados[0]));
        }
      } catch (error) {
        console.error('Error al cargar el CSV:', error);
      }
    };

    fetchData();
  }, []);

  if (datos.length === 0) {
    return (
      <div className="bg-white p-4 rounded-lg shadow col-span-full">
        <h2 className="text-lg font-semibold mb-2">Tabla de Datos</h2>
        <p>Cargando datos...</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow col-span-full">
      <h2 className="text-lg font-semibold mb-4">Tabla de Datos</h2>
      <div className="overflow-x-auto w-full">
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              {columnas.map((col) => (
                <th
                  key={col}
                  className="border border-gray-300 p-2 text-left text-gray-700 font-semibold"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {datos.map((fila, idx) => (
              <tr
                key={idx}
                className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
              >
                {columnas.map((col) => (
                  <td
                    key={col}
                    className="border border-gray-300 p-2 text-gray-600"
                  >
                    {fila[col]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
