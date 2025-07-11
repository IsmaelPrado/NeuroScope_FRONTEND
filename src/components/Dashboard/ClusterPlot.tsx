// src/components/Dashboard/ClusterPlot.tsx
import React from 'react';
import Plot from 'react-plotly.js';

interface ClusterPlotProps {
  data: Partial<Plotly.PlotData>[];
}

const ClusterPlot: React.FC<ClusterPlotProps> = ({ data }) => {
  return (
    <Plot
      data={data}
      layout={{
        autosize: true,
        title: 'Distribución de Clusters (KMeans)',
        xaxis: { title: 'Variable 1 (Ej: Apertura)' },
        yaxis: { title: 'Variable 2 (Ej: Responsabilidad)' },
        margin: { t: 40, l: 40, r: 20, b: 40 },
      }}
      config={{ responsive: true }}
      useResizeHandler
      style={{ width: '100%', height: '100%' }}
    />
  );
};

export default ClusterPlot;
