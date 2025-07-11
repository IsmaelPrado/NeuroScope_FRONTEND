import React from 'react';
import type { OCEANDatos } from '../../types/OCEANdatos';

interface Props {
  data: OCEANDatos[];
}

const TableO: React.FC<Props> = ({ data }) => {
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
          {data.map((row, idx) => (
            <tr key={idx} className={idx % 2 === 0 ? 'bg-blue-50' : 'bg-white'}>
              <td className="border border-blue-200 p-2">{row.O.Curiosidad}</td>
              <td className="border border-blue-200 p-2">{row.O.Creatividad}</td>
              <td className="border border-blue-200 p-2">{row.O.Adaptabilidad}</td>
              <td className="border border-blue-200 p-2">{row.O.ExploracionIdeas}</td>
              <td className="border border-blue-200 p-2">{row.O.EvadeRutina}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableO;
