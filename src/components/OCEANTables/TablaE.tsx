import React from 'react';
import type { OCEANDatos } from '../../types/OCEANdatos';

interface Props {
  data: OCEANDatos[];
}

const TableE: React.FC<Props> = ({ data }) => {
  // Verificamos si al menos un elemento tiene la propiedad E
  const hayDatosE = data.some(row => row.E !== undefined && row.E !== null);

  if (!hayDatosE) {
    return null; // No hay datos, no renderizamos tabla
  }

  return (
    <div className="mb-6 overflow-auto rounded-lg shadow border border-green-300">
      <h3 className="text-md font-semibold mb-2 text-green-800 bg-green-100 p-2 rounded-t-lg">
        Tabla E – Extroversión
      </h3>
      <table className="w-full text-sm text-left border-collapse">
        <thead className="bg-green-200 text-green-900">
          <tr>
            <th className="border border-green-300 p-2">Comodidad Social</th>
            <th className="border border-green-300 p-2">Disfrute Social</th>
            <th className="border border-green-300 p-2">Energía Social</th>
            <th className="border border-green-300 p-2">Habla Fácil</th>
            <th className="border border-green-300 p-2">Prefiere Grupos</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => {
            const E = row.E ?? {}; // Acceso seguro a E

            return (
              <tr key={idx} className={idx % 2 === 0 ? 'bg-green-50' : 'bg-white'}>
                <td className="border border-green-200 p-2">{E.ComodidadSocial ?? '-'}</td>
                <td className="border border-green-200 p-2">{E.DisfruteSocial ?? '-'}</td>
                <td className="border border-green-200 p-2">{E.EnergiaSocial ?? '-'}</td>
                <td className="border border-green-200 p-2">{E.HablaFacil ?? '-'}</td>
                <td className="border border-green-200 p-2">{E.PrefiereGrupos ?? '-'}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableE;
