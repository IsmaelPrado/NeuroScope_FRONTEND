// src/components/ModalProcesar/ModalProcesar.tsx
import React from 'react';
import VistaPreviaTabla from './VistaPreviaTabla';
import SelectorVariables from './SelectorVariables';
import SelectorModeloML from './SelectorModeloML';

interface ModalProcesarProps {
  onClose: () => void;
  onContinue: () => void;
}

const ModalProcesar: React.FC<ModalProcesarProps> = ({ onClose, onContinue }) => {
return (
  <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded-xl shadow-lg w-[90vw] h-[90vh] flex flex-col">
      {/* Título */}
      <h2 className="text-2xl font-bold mb-4">Procesar Datos</h2>

      {/* Cuerpo del modal */}
      <div className="flex-1 flex flex-col md:flex-row gap-6 overflow-y-auto">
        
        {/* Tabla de vista previa - 3/4 con scroll horizontal */}
        <div className="basis-3/4 h-full flex flex-col overflow-x-auto">
          <VistaPreviaTabla />
        </div>

        {/* Panel derecho - 1/4 */}
        <div className="basis-1/4 flex flex-col gap-6">
          <SelectorVariables />
          <SelectorModeloML />
        </div>
      </div>

      {/* Botones abajo a la derecha */}
      <div className="flex justify-end gap-4 pt-4">
        <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">
          Cancelar
        </button>
        <button onClick={onContinue} className="px-4 py-2 bg-blue-600 text-white rounded">
          Continuar
        </button>
      </div>
    </div>
  </div>
);

};

export default ModalProcesar;
