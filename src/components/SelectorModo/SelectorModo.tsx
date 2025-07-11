import React from 'react';

interface SelectorModoProps {
  modo: 'cuantitativo' | 'cualitativo';
  onChange: (nuevoModo: 'cuantitativo' | 'cualitativo') => void;
}

const SelectorModo: React.FC<SelectorModoProps> = ({ modo, onChange }) => {
  return (
    <div className="flex flex-col items-start">
      <h3 className="text-sm font-medium text-gray-700 mb-1">Modo de datos</h3>
      <div className="inline-flex border border-gray-300 rounded-full overflow-hidden bg-white shadow-sm">
        <button
          onClick={() => onChange('cuantitativo')}
          className={`px-4 py-1 text-sm transition-colors duration-200 ${
            modo === 'cuantitativo'
              ? 'bg-blue-600 text-white'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          Cuantitativo
        </button>
        <button
          onClick={() => onChange('cualitativo')}
          className={`px-4 py-1 text-sm transition-colors duration-200 ${
            modo === 'cualitativo'
              ? 'bg-green-600 text-white'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          Cualitativo
        </button>
      </div>
    </div>
  );
};

export default SelectorModo;
