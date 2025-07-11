// src/components/OCEANDisplay.tsx
import React from "react";

interface OCEANDisplayProps {
  activeDimensions: string[]; // Ej: ['O', 'C', 'E']
}

const letterStyles: Record<string, string> = {
  O: "text-blue-600",
  C: "text-purple-600",
  E: "text-green-600",
  A: "text-pink-500",
  N: "text-yellow-500",
};

const OCEANDisplay: React.FC<OCEANDisplayProps> = ({ activeDimensions }) => {
  const dimensions = ["O", "C", "E", "A", "N"];

  return (
    <div className="flex items-center gap-1 text-2xl font-extrabold tracking-widest">
      {dimensions.map((letter) => {
        const isActive = activeDimensions.includes(letter);
        const baseStyle = letterStyles[letter] || "";
        return (
          <span
            key={letter}
            className={`transition duration-300 ${
              isActive
                ? baseStyle
                : "text-gray-300 opacity-40 grayscale cursor-not-allowed"
            }`}
            title={isActive ? `Dimensión ${letter} activa` : `Excluida: ${letter}`}
          >
            {letter}
          </span>
        );
      })}
    </div>
  );
};

export default OCEANDisplay;
