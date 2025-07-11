import React from 'react';
import type { OCEANDatos } from '../../types/OCEANdatos';

interface Props {
  data: OCEANDatos[];
}

const TableN: React.FC<Props> = ({ data }) => {
  return (
    <div className="mb-6 overflow-auto rounded-lg shadow border border-yellow-300">
      <h3 className="text-md font-semibold mb-2 text-yellow-800 bg-yellow-100 p-2 rounded-t-lg">
        Tabla N – Responsabilidad
      </h3>
      <table className="w-full text-sm text-left border-collapse">
        <thead className="bg-yellow-200 text-yellow-900">
          <tr>
            <th className="border border-yellow-300 p-2">Adaptabilidad</th>
            <th className="border border-yellow-300 p-2">Creatividad</th>
            <th className="border border-yellow-300 p-2">Curiosidad</th>
            <th className="border border-yellow-300 p-2">Evade Rutina</th>
            <th className="border border-yellow-300 p-2">Exploración de ideas</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className={idx % 2 === 0 ? 'bg-yellow-50' : 'bg-white'}>
              <td className="border border-yellow-200 p-2">{row.O.Adaptabilidad}</td>
              <td className="border border-yellow-200 p-2">{row.O.Creatividad}</td>
              <td className="border border-yellow-200 p-2">{row.O.Curiosidad}</td>
              <td className="border border-yellow-200 p-2">{row.O.EvadeRutina}</td>
              <td className="border border-yellow-200 p-2">{row.O.ExploracionIdeas}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableN;
