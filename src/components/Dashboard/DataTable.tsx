import React, { useEffect, useState, useRef } from "react";
import { fetchPersonalityData } from "../../api/personalityApi";
import type { OCEANDatos } from "../../types/OCEANdatos";
import TableO from "../OCEANTables/TablaO";
import TableE from "../OCEANTables/TablaE";
import TableC from "../OCEANTables/TableC";
import TableA from "../OCEANTables/TablaA";
import TableN from "../OCEANTables/TablaN";

const DataTable: React.FC = () => {
  const [data, setData] = useState<OCEANDatos[]>([]);
  const [total, setTotal] = useState(0);
  const [skip, setSkip] = useState(0);
  const limit = 5;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const tableRef = useRef<HTMLDivElement>(null);

  const loadData = async (skipParam: number) => {
    setLoading(true);
    setError(null);
    try {
      const result = await fetchPersonalityData(skipParam, limit);
      setData(result.datos);
      setTotal(result.total_registros);
      setSkip(skipParam);

      if (tableRef.current) {
        tableRef.current.scrollIntoView({ behavior: "smooth" });
      }
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
  }, []);

  const handlePrev = () => {
    if (skip - limit >= 0) loadData(skip - limit);
  };

  const handleNext = () => {
    if (skip + limit < total) loadData(skip + limit);
  };

  return (
    <div
      ref={tableRef}
      className="bg-white p-4 rounded-lg shadow col-span-full overflow-auto"
    >
      <h2 className="text-lg font-semibold mb-2">Tabla de Datos</h2>

      {/* Escala visual en tonos grises */}
      <div className="flex flex-wrap gap-2 mb-4">
        <div className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 shadow-sm">
          1 – Nunca
        </div>
        <div className="px-3 py-1 rounded-full text-xs font-medium bg-gray-300 text-gray-800 shadow-sm">
          2 – Rara vez
        </div>
        <div className="px-3 py-1 rounded-full text-xs font-medium bg-gray-500 text-white shadow-sm">
          3 – A veces
        </div>
        <div className="px-3 py-1 rounded-full text-xs font-medium bg-gray-700 text-white shadow-sm">
          4 – A menudo
        </div>
        <div className="px-3 py-1 rounded-full text-xs font-medium bg-gray-900 text-white shadow-sm">
          5 – Siempre
        </div>
      </div>

      {loading && <p>Cargando datos...</p>}
      {error && <p className="text-red-600">Error: {error}</p>}

      {!loading && !error && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <TableO data={data} />
            <TableC data={data} />
            <TableE data={data} />
            <TableA data={data} />
            <TableN data={data} />
          </div>

          <div className="flex justify-between mt-4">
            <button
              onClick={handlePrev}
              disabled={skip === 0}
              className="bg-gray-300 px-4 py-2 rounded disabled:opacity-50"
            >
              Anterior
            </button>

            <span>
              Página {Math.floor(skip / limit) + 1} de{" "}
              {Math.ceil(total / limit)}
            </span>

            <button
              onClick={handleNext}
              disabled={skip + limit >= total}
              className="bg-gray-300 px-4 py-2 rounded disabled:opacity-50"
            >
              Siguiente
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default DataTable;
