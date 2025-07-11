// src/components/Dashboard/DataTable.tsx
import React from 'react';

const DataTable: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow col-span-full">
      <h2 className="text-lg font-semibold mb-2">Tabla de Datos</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Nombre</th>
            <th className="border p-2">Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">1</td>
            <td className="border p-2">Elemento A</td>
            <td className="border p-2">123</td>
          </tr>
          <tr>
            <td className="border p-2">2</td>
            <td className="border p-2">Elemento B</td>
            <td className="border p-2">456</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
