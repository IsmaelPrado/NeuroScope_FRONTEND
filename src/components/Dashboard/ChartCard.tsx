// src/components/Dashboard/ChartCard.tsx
import React from 'react';

interface ChartCardProps {
  title: string;
}

const ChartCard: React.FC<ChartCardProps> = ({ title }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow h-60">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <div className="text-gray-400 text-center pt-10">[Gráfica aquí]</div>
    </div>
  );
};

export default ChartCard;
