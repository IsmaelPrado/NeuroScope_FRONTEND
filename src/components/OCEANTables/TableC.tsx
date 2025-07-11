import React from 'react';
import type { OCEANDatos } from '../../types/OCEANdatos';

interface Props {
  data: OCEANDatos[];
}

const TableC: React.FC<Props> = ({ data }) => {
  return (
    <div className="mb-6 overflow-auto rounded-lg shadow border border-purple-300">
      <h3 className="text-md font-semibold mb-2 text-purple-800 bg-purple-100 p-2 rounded-t-lg">
        Tabla C – Responsabilidad
      </h3>
      <table className="w-full text-sm text-left border-collapse">
        <thead className="bg-purple-200 text-purple-900">
          <tr>
            <th className="border border-purple-300 p-2">Compromiso</th>
            <th className="border border-purple-300 p-2">Esmero Metas</th>
            <th className="border border-purple-300 p-2">Organización</th>
            <th className="border border-purple-300 p-2">Planificación</th>
            <th className="border border-purple-300 p-2">Puntualidad</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className={idx % 2 === 0 ? 'bg-purple-50' : 'bg-white'}>
              <td className="border border-purple-200 p-2">{row.C.Compromiso}</td>
              <td className="border border-purple-200 p-2">{row.C.EsmeroMetas}</td>
              <td className="border border-purple-200 p-2">{row.C.Organizacion}</td>
              <td className="border border-purple-200 p-2">{row.C.Planificacion}</td>
              <td className="border border-purple-200 p-2">{row.C.Puntualidad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableC;
