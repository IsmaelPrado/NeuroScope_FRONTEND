import React from 'react'
interface ChartCardProps {
  title: string;
    children: React.ReactNode;

}


const ChartCard: React.FC<ChartCardProps> = ({ title, children }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow h-auto">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <div className="w-full h-72">{children}</div>
    </div>
  );
};

export default ChartCard;
