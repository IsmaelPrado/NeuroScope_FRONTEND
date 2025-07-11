// src/components/ModalProcesar/SelectorVariables.tsx
import React from 'react';

interface Props {
  selected: string[];
  onChange: (values: string[]) => void;
}

const todasVariables = [
  { label: 'Apertura (O)', value: 'O' },
  { label: 'Responsabilidad (C)', value: 'C' },
  { label: 'Extraversión (E)', value: 'E' },
  { label: 'Amabilidad (A)', value: 'A' },
  { label: 'Neuroticismo (N)', value: 'N' },
];

const SelectorVariables: React.FC<Props> = ({ selected, onChange }) => {
  const toggleVariable = (valor: string) => {
    if (selected.includes(valor)) {
      onChange(selected.filter((v) => v !== valor));
    } else {
      onChange([...selected, valor]);
    }
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Filtrar por Dimensiones OCEAN</h3>
      <div className="flex flex-col gap-2 max-h-48 overflow-auto border rounded p-2">
        {todasVariables.map(({ label, value }) => (
          <label
            key={value}
            className={`flex items-center gap-2 cursor-pointer ${
              selected.includes(value) ? 'font-semibold text-blue-600' : ''
            }`}
          >
            <input
              type="checkbox"
              value={value}
              checked={selected.includes(value)}
              onChange={() => toggleVariable(value)}
              className="accent-blue-600"
            />
            {label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default SelectorVariables;
