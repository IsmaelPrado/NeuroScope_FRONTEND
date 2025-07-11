// src/components/ModalProcesar/ModalProcesar.tsx
import React, { useEffect, useState } from "react";
import VistaPreviaTabla from "./VistaPreviaTabla";
import SelectorVariables from "./SelectorVariables";
import SelectorModeloML from "./SelectorModeloML";
import type { OCEANDatos } from "../../types/OCEANdatos";
import { fetchPersonalityData } from "../../api/personalityApi";
import SelectorModo from "../SelectorModo/SelectorModo";
import OCEANDisplay from "../OCEANDisplay/OCEANDisplay";

interface ModalProcesarProps {
  onClose: () => void;
  onContinue: () => void;
}

const ModalProcesar: React.FC<ModalProcesarProps> = ({
  onClose,
  onContinue,
}) => {
  const [data, setData] = useState<OCEANDatos[]>([]);
  const [total, setTotal] = useState(0);
  const [skip, setSkip] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const limit = 5;
  const [dimensions, setDimensions] = useState(["O", "C", "E", "A", "N"]);
  const [modo, setModo] = useState<"cuantitativo" | "cualitativo">(
    "cuantitativo"
  );

  const loadData = async (skipParam: number) => {
    setLoading(true);
    setError(null);
    try {
      const result = await fetchPersonalityData(
        skipParam,
        limit,
        dimensions,
        modo
      );
      setData(result.datos);
      setTotal(result.total_registros);
      setSkip(skipParam);
    } catch (err) {
      setError((err as Error).message);
      setData([]);
      setTotal(0);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData(0);
  }, [dimensions, modo]);

  const handlePrev = () => {
    if (skip - limit >= 0) loadData(skip - limit);
  };

  const handleNext = () => {
    if (skip + limit < total) loadData(skip + limit);
  };

  const currentPage = Math.floor(skip / limit) + 1;
  const totalPages = Math.ceil(total / limit);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-[90vw] h-[90vh] flex flex-col">
       {/* Header con título, OCEANDisplay centrado y SelectorModo a la derecha */}
<div className="grid grid-cols-3 items-center mb-6 border-b pb-3">
  {/* Título a la izquierda */}
  <h2 className="text-xl md:text-2xl font-bold text-gray-800">Procesar Datos</h2>

  {/* OCEANDisplay centrado */}
  <div className="flex justify-center">
    <OCEANDisplay activeDimensions={dimensions} />
  </div>

  {/* SelectorModo alineado a la derecha */}
  <div className="flex justify-end">
    <SelectorModo modo={modo} onChange={setModo} />
  </div>
</div>


        {/* Cuerpo principal */}
        <div className="flex-1 flex flex-col md:flex-row gap-6 overflow-hidden">
          {/* Vista previa y paginación */}
          <div className="basis-3/4 flex flex-col overflow-hidden">
            <div className="flex-1 overflow-y-auto pr-2">
              <VistaPreviaTabla data={data} loading={loading} error={error} />
            </div>

            {/* Paginación */}
            <div className="flex justify-between items-center mt-4 p-3 border-t bg-gray-50 rounded-b-lg">
              <div className="flex items-center gap-4">
                <button
                  onClick={handlePrev}
                  disabled={skip === 0}
                  className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 disabled:opacity-50"
                >
                  Anterior
                </button>
                <span className="text-sm text-gray-700">
                  Página {currentPage} de {totalPages}
                </span>
                <button
                  onClick={handleNext}
                  disabled={skip + limit >= total}
                  className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 disabled:opacity-50"
                >
                  Siguiente
                </button>
              </div>
            </div>
          </div>

          {/* Panel derecho de filtros */}
          <div className="basis-1/4 flex flex-col gap-6">
            <SelectorVariables selected={dimensions} onChange={setDimensions} />
            <SelectorModeloML />
          </div>
        </div>

        {/* Botones de acción */}
        <div className="flex justify-end gap-4 pt-6 border-t mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
          >
            Cancelar
          </button>
          <button
            onClick={onContinue}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
          >
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalProcesar;
