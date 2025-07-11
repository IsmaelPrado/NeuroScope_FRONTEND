// src/components/Dashboard/DashboardContent.tsx
import React from 'react';
import KPIBox from './KPIBox';
import ChartCard from './ChartCard';
import DataTable from './DataTable';

const DashboardContent: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      <KPIBox title="Total Clientes" value={1345} />
      <KPIBox title="Conversión %" value="23%" />
      <KPIBox title="Ventas Hoy" value="$12,300" />
      <ChartCard title="Distribución por Edad" />
      <ChartCard title="Ventas por Región" />
      <DataTable />
    </div>
  );
};

export default DashboardContent;
