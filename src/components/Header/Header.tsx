// src/components/Header/Header.tsx
import React from 'react';

interface HeaderProps {
  onProcesarClick: () => void; // Para abrir el modal
}

const Header: React.FC<HeaderProps> = ({ onProcesarClick }) => {
  return (
    <div className="p-4 bg-white shadow rounded-lg mb-4 flex flex-col md:flex-row justify-between items-start md:items-center">
      
      {/* Sección izquierda */}
      <div>
        <h1 className="text-2xl font-bold mb-2 md:mb-0">Dashboard de Análisis</h1>
        <div className="flex items-center space-x-2">
          <label htmlFor="modeloML" className="text-gray-600">Modelo ML:</label>
          <select
            id="modeloML"
            className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="randomforest">RandomForest v1.2</option>
            <option value="xgboost">XGBoost v2.0</option>
            <option value="svm">SVM v1.5</option>
          </select>
        </div>
      </div>

      {/* Botón a la derecha */}
      <div className="mt-4 md:mt-0">
        <button
          onClick={onProcesarClick}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
        >
          Procesar Datos
        </button>
      </div>
    </div>
  );
};

export default Header;
