import type { PlotData } from "plotly.js";

export const clusterData3D: Partial<PlotData>[] = [
  {
    x: [1.2, 1.5, 1.7],
    y: [2.4, 2.6, 2.8],
    z: [0.5, 0.6, 0.8],
    mode: 'markers',
    type: 'scatter3d',
    name: 'Cluster 1',
    marker: { color: 'blue', size: 5 },
  },
  {
    x: [3.1, 3.3, 3.5],
    y: [1.9, 2.0, 1.8],
    z: [1.1, 1.3, 1.0],
    mode: 'markers',
    type: 'scatter3d',
    name: 'Cluster 2',
    marker: { color: 'green', size: 5 },
  },
];
