import React from 'react';
import type { OCEANDatos } from '../../types/OCEANdatos';

interface Props {
  data: OCEANDatos[];
}

const TableO: React.FC<Props> = ({ data }) => {
  // Verificamos si al menos un elemento tiene la propiedad O
  const hayDatosO = data.some(row => row.O !== undefined && row.O !== null);

  if (!hayDatosO) {
    // No hay datos para mostrar, no renderizamos nada (o podrías devolver null o un mensaje)
    return null;
  }

  return (
    <div className="mb-6 overflow-auto rounded-lg shadow border border-blue-300">
      <h3 className="text-md font-semibold mb-2 text-blue-800 bg-blue-100 p-2 rounded-t-lg">
        Tabla O – Apertura a la experiencia
      </h3>
      <table className="w-full text-sm text-left border-collapse">
        <thead className="bg-blue-200 text-blue-900">
          <tr>
            <th className="border border-blue-300 p-2">Curiosidad</th>
            <th className="border border-blue-300 p-2">Creatividad</th>
            <th className="border border-blue-300 p-2">Adaptabilidad</th>
            <th className="border border-blue-300 p-2">Exploración Ideas</th>
            <th className="border border-blue-300 p-2">Evade Rutina</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => {
            const O = row.O ?? {};  // Si no existe O, usamos objeto vacío

            return (
              <tr key={idx} className={idx % 2 === 0 ? 'bg-blue-50' : 'bg-white'}>
                <td className="border border-blue-200 p-2">{O.Curiosidad ?? '-'}</td>
                <td className="border border-blue-200 p-2">{O.Creatividad ?? '-'}</td>
                <td className="border border-blue-200 p-2">{O.Adaptabilidad ?? '-'}</td>
                <td className="border border-blue-200 p-2">{O.ExploracionIdeas ?? '-'}</td>
                <td className="border border-blue-200 p-2">{O.EvadeRutina ?? '-'}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableO;
