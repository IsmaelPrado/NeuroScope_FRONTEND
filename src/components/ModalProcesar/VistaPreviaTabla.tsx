// src/components/ModalProcesar/VistaPreviaTabla.tsx
import React, { useEffect, useState } from 'react';
import { cargarCSV } from '../../utils/csvLoader';

interface FilaDatos {
  [key: string]: string;
}

const VistaPreviaTabla: React.FC = () => {
  const [datos, setDatos] = useState<FilaDatos[]>([]);
  const [columnas, setColumnas] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await cargarCSV('/dataset.csv'); // archivo en /public
        setDatos(data);
        if (data.length > 0) {
          setColumnas(Object.keys(data[0]));
        }
      } catch (error) {
        console.error('Error al cargar el CSV:', error);
      }
    };

    fetchData();
  }, []);

 return (
  <div className="flex-1 overflow-auto border rounded">
    <h4 className="font-semibold text-md mb-2">Vista previa del dataset</h4>
    {datos.length === 0 ? (
      <p className="text-gray-500">Cargando datos...</p>
    ) : (
      <table className="min-w-full table-auto border-collapse text-sm">
        <thead className="bg-gray-100 sticky top-0">
          <tr>
            {columnas.map((col) => (
              <th key={col} className="p-2 border font-semibold text-left">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {datos.slice(0, 50).map((fila, idx) => (
            <tr key={idx}>
              {columnas.map((col) => (
                <td key={col} className="p-2 border">
                  {fila[col]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
);

};

export default VistaPreviaTabla;
