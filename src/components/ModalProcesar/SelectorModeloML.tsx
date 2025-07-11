// src/components/ModalProcesar/SelectorModeloML.tsx
import React, { useState } from 'react';

const modelosML = [
  { label: 'RandomForest', value: 'randomforest' },
  { label: 'XGBoost', value: 'xgboost' },
  { label: 'SVM', value: 'svm' },
];

const SelectorModeloML: React.FC = () => {
  const [modeloSeleccionado, setModeloSeleccionado] = useState(modelosML[0].value);

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Selecciona el Modelo de ML</h3>
      <select
        className="
          w-full
          border
          border-gray-300
          rounded-md
          px-3
          py-2
          text-gray-700
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
          focus:border-transparent
          transition
          duration-150
          ease-in-out
          cursor-pointer
        "
        value={modeloSeleccionado}
        onChange={(e) => setModeloSeleccionado(e.target.value)}
      >
        {modelosML.map((modelo) => (
          <option key={modelo.value} value={modelo.value}>
            {modelo.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectorModeloML;
