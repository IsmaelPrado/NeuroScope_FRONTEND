import React, { useEffect, useState } from 'react';
import { cargarCSV } from '../../utils/csvLoader';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

interface ChartCardProps {
  title: string;
}

type Respuesta = 'Nunca' | 'Rara vez' | 'A veces' | 'A menudo' | 'Siempre';

const RESPUESTAS: Respuesta[] = ['Nunca', 'Rara vez', 'A veces', 'A menudo', 'Siempre'];

// Columnas que vamos a graficar (puedes ajustar)
const COLUMNAS = ['O_Curiosidad', 'C_Planificacion', 'E_DisfruteSocial', 'N_Ansiedad'];

const ChartCard: React.FC<ChartCardProps> = ({ title }) => {
  const [dataGrafico, setDataGrafico] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataCSV = await cargarCSV('/dataset.csv');

        // Contar frecuencias por columna y respuesta
        // Inicializamos objeto para conteos
        const conteosPorColumna: Record<string, Record<Respuesta, number>> = {};

        COLUMNAS.forEach(col => {
          conteosPorColumna[col] = {
            'Nunca': 0,
            'Rara vez': 0,
            'A veces': 0,
            'A menudo': 0,
            'Siempre': 0,
          };
        });

        // Contamos ocurrencias
        dataCSV.forEach((fila: Record<string, string>) => {
          COLUMNAS.forEach(col => {
            const valor = fila[col] as Respuesta;
            if (RESPUESTAS.includes(valor)) {
              conteosPorColumna[col][valor]++;
            }
          });
        });

        // Convertimos a arreglo para gráfico (cada objeto representa una columna con conteos)
        const grafico = COLUMNAS.map(col => ({
          caracteristica: col,
          Nunca: conteosPorColumna[col]['Nunca'],
          'Rara vez': conteosPorColumna[col]['Rara vez'],
          'A veces': conteosPorColumna[col]['A veces'],
          'A menudo': conteosPorColumna[col]['A menudo'],
          Siempre: conteosPorColumna[col]['Siempre'],
        }));

        setDataGrafico(grafico);

      } catch (error) {
        console.error('Error al cargar el CSV:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white p-4 rounded-lg shadow h-80 w-full">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      {dataGrafico.length > 0 ? (
        <ResponsiveContainer width="100%" height={250}>
          <BarChart
            data={dataGrafico}
            margin={{ top: 10, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="caracteristica" />
            <YAxis />
            <Tooltip />
            <Legend />
            {/* Colores para cada categoría */}
            <Bar dataKey="Nunca" stackId="a" fill="#8884d8" />
            <Bar dataKey="Rara vez" stackId="a" fill="#82ca9d" />
            <Bar dataKey="A veces" stackId="a" fill="#ffc658" />
            <Bar dataKey="A menudo" stackId="a" fill="#ff7f50" />
            <Bar dataKey="Siempre" stackId="a" fill="#1e40af" />
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <div className="text-gray-400 text-center pt-10">Cargando gráfica...</div>
      )}
    </div>
  );
};

export default ChartCard;
