import React from 'react';
import type { OCEANDatos } from '../../types/OCEANdatos';

interface Props {
  data: OCEANDatos[];
}

const TableA: React.FC<Props> = ({ data }) => {
  return (
    <div className="mb-6 overflow-auto rounded-2xl shadow-md border border-pink-300">
      <h3 className="text-md font-semibold mb-2 text-pink-800 bg-pink-100 p-3 rounded-t-2xl">
        Tabla A – Amabilidad
      </h3>
      <table className="w-full text-sm text-left border-collapse">
        <thead className="bg-pink-200 text-pink-900">
          <tr>
            <th className="border border-pink-300 p-2">Altruismo</th>
            <th className="border border-pink-300 p-2">Comprensión Emocional</th>
            <th className="border border-pink-300 p-2">Empatía</th>
            <th className="border border-pink-300 p-2">Escucha Activa</th>
            <th className="border border-pink-300 p-2">Evita Conflictos</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className={idx % 2 === 0 ? 'bg-pink-50' : 'bg-white'}>
              <td className="border border-pink-200 p-2">{row.A.Altruismo}</td>
              <td className="border border-pink-200 p-2">{row.A.ComprensionEmocional}</td>
              <td className="border border-pink-200 p-2">{row.A.Empatia}</td>
              <td className="border border-pink-200 p-2">{row.A.EscuchaActiva}</td>
              <td className="border border-pink-200 p-2">{row.A.EvitaConflictos}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableA;
