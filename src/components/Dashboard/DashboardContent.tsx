// src/components/Dashboard/DashboardContent.tsx
import React from "react";
import KPIBox from "./KPIBox";
import ChartCard from "./ChartCard";
import DataTable from "./DataTable";
import ClusterPlot from "./ClusterPlot";
import { clusterData } from "../../data/grafico2D";
import { clusterData3D } from "../../data/grafico3D";

const DashboardContent: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      <KPIBox title="Total Clientes" value={1345} />
      <KPIBox title="Conversión %" value="23%" />
      <KPIBox title="Ventas Hoy" value="$12,300" />
      <ChartCard title="Clustering KMeans">
        <ClusterPlot data={clusterData} />
      </ChartCard>

      <ChartCard title="Clustering KMeans 3D">
        <ClusterPlot data={clusterData3D} />
      </ChartCard>

      <DataTable />
    </div>
  );
};

export default DashboardContent;
