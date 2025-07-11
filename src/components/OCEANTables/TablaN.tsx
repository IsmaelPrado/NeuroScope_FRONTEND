import React from 'react';
import type { OCEANDatos } from '../../types/OCEANdatos';

interface Props {
  data: OCEANDatos[];
}

const TableN: React.FC<Props> = ({ data }) => {
  // Verificar si al menos un elemento tiene la propiedad N
  const hayDatosN = data.some(row => row.N !== undefined && row.N !== null);

  if (!hayDatosN) {
    return null; // No hay datos, no renderizamos tabla
  }

  return (
    <div className="mb-6 overflow-auto rounded-lg shadow border border-yellow-300">
      <h3 className="text-md font-semibold mb-2 text-yellow-800 bg-yellow-100 p-2 rounded-t-lg">
        Tabla N – Neuroticismo
      </h3>
      <table className="w-full text-sm text-left border-collapse">
        <thead className="bg-yellow-200 text-yellow-900">
          <tr>
            <th className="border border-yellow-300 p-2">Ansiedad</th>
            <th className="border border-yellow-300 p-2">Irritabilidad</th>
            <th className="border border-yellow-300 p-2">Manejo Estres</th>
            <th className="border border-yellow-300 p-2">Preocupación Excesiva</th>
            <th className="border border-yellow-300 p-2">Sensibilidad Errores</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => {
            const N = row.N ?? {}; // Acceso seguro a N

            return (
              <tr key={idx} className={idx % 2 === 0 ? 'bg-yellow-50' : 'bg-white'}>
                <td className="border border-yellow-200 p-2">{N.Ansiedad ?? '-'}</td>
                <td className="border border-yellow-200 p-2">{N.Irritabilidad ?? '-'}</td>
                <td className="border border-yellow-200 p-2">{N.ManejoEstres ?? '-'}</td>
                <td className="border border-yellow-200 p-2">{N.PreocupacionExcesiva ?? '-'}</td>
                <td className="border border-yellow-200 p-2">{N.SensibilidadErrores ?? '-'}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableN;
