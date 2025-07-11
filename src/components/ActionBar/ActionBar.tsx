// src/components/ActionsBar/ActionsBar.tsx
import React from 'react';

const ActionsBar: React.FC = () => {
  return (
    <div className="flex justify-end space-x-2 mb-4">
      <button className="px-4 py-2 bg-blue-500 text-white rounded">Exportar Excel</button>
      <button className="px-4 py-2 bg-green-500 text-white rounded">Filtrar</button>
      <button className="px-4 py-2 bg-gray-500 text-white rounded">Refrescar</button>
    </div>
  );
};

export default ActionsBar;
