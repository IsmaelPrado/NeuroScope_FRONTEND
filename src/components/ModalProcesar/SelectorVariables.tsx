// src/components/ModalProcesar/SelectorVariables.tsx
import React, { useState } from 'react';

const todasVariables = [
  { label: 'Edad', value: 'edad' },
  { label: 'Ingresos', value: 'ingresos' },
  { label: 'Ciudad', value: 'ciudad' },
  { label: 'Compra', value: 'compra' },
  { label: 'Género', value: 'genero' },
  { label: 'Ocupación', value: 'ocupacion' },
  { label: 'Nivel Educativo', value: 'nivel_educativo' },
];

const SelectorVariables: React.FC = () => {
  const [seleccionadas, setSeleccionadas] = useState<string[]>([]);

  const toggleVariable = (valor: string) => {
    if (seleccionadas.includes(valor)) {
      setSeleccionadas(seleccionadas.filter(v => v !== valor));
    } else {
      if (seleccionadas.length < 5) {
        setSeleccionadas([...seleccionadas, valor]);
      } else {
        alert('Solo puedes seleccionar hasta 5 variables');
      }
    }
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Selecciona hasta 5 Variables</h3>
      <div className="flex flex-col gap-2 max-h-48 overflow-auto border rounded p-2">
        {todasVariables.map(({ label, value }) => (
          <label
            key={value}
            className={`flex items-center gap-2 cursor-pointer ${
              seleccionadas.includes(value) ? 'font-semibold text-blue-600' : ''
            }`}
          >
            <input
              type="checkbox"
              value={value}
              checked={seleccionadas.includes(value)}
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
