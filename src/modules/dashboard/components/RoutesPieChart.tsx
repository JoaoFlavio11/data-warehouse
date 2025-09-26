'use client';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import ChartContainer from './ChartContainer';

// Dados de exemplo para o gráfico de pizza
const data = [
  { name: 'Em Andamento', value: 300 },
  { name: 'Concluídas', value: 500 },
  { name: 'Atrasadas', value: 100 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28']; // Cores para as fatias da pizza

export default function PieChartRoutes() {
  return (
    <ChartContainer title="Status das Rotas Ativas">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip wrapperClassName="shadow-lg rounded-md" />
        </PieChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}