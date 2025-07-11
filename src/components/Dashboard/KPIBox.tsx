// src/components/Dashboard/KPIBox.tsx
import React from 'react';

interface KPIBoxProps {
  title: string;
  value: string | number;
}

const KPIBox: React.FC<KPIBoxProps> = ({ title, value }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-3xl font-bold text-blue-600">{value}</p>
    </div>
  );
};

export default KPIBox;
