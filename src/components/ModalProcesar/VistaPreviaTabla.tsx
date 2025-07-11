import React from 'react';
import type { OCEANDatos } from '../../types/OCEANdatos';
import TableO from '../OCEANTables/TablaO';
import TableE from '../OCEANTables/TablaE';
import TableC from '../OCEANTables/TableC';
import TableA from '../OCEANTables/TablaA';
import TableN from '../OCEANTables/TablaN';

interface Props {
  data: OCEANDatos[] | null;
  loading: boolean;
  error: string | null;
}

const VistaPreviaTabla: React.FC<Props> = ({ data, loading, error }) => {
  if (!data || data.length === 0) {
    return null;
  }

  const hayO = data.some(row => row.O !== undefined && row.O !== null);
  const hayC = data.some(row => row.C !== undefined && row.C !== null);
  const hayE = data.some(row => row.E !== undefined && row.E !== null);
  const hayA = data.some(row => row.A !== undefined && row.A !== null);
  const hayN = data.some(row => row.N !== undefined && row.N !== null);

  return (
    <div className="flex-1 overflow-auto border rounded p-4 space-y-6">
      <h4 className="font-semibold text-md mb-4">Vista previa del dataset</h4>

      {loading && <p className="text-gray-500">Cargando datos desde la API...</p>}

      {error && <p className="text-red-600 font-medium">Error al cargar datos: {error}</p>}

      {!loading && !error && (
        <>
          {hayO && (
            <div>
              <h5 className="font-semibold text-sm mb-2 text-blue-800">Datos de Personalidad - Tabla O</h5>
              <TableO data={data} />
            </div>
          )}

          {hayC && (
            <div>
              <h5 className="font-semibold text-sm mb-2 text-purple-800">Datos de Responsabilidad - Tabla C</h5>
              <TableC data={data} />
            </div>
          )}

          {hayE && (
            <div>
              <h5 className="font-semibold text-sm mb-2 text-green-800">Datos de Extroversión - Tabla E</h5>
              <TableE data={data} />
            </div>
          )}

          {hayA && (
            <div>
              <h5 className="font-semibold text-sm mb-2 text-pink-800">Datos de Amabilidad - Tabla A</h5>
              <TableA data={data} />
            </div>
          )}

          {hayN && (
            <div>
              <h5 className="font-semibold text-sm mb-2 text-yellow-800">Datos de Neuroticismo - Tabla N</h5>
              <TableN data={data} />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default VistaPreviaTabla;
