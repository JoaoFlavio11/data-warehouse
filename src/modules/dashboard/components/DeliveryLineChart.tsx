'use client';
import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import ChartContainer from "./ChartContainer";

// Dados para o gráfico de linha
const data = [
  { name: 'Seg', entregas: 120 },
  { name: 'Ter', entregas: 150 },
  { name: 'Qua', entregas: 100 },
  { name: 'Qui', entregas: 180 },
  { name: 'Sex', entregas: 200 },
  { name: 'Sáb', entregas: 170 },
  { name: 'Dom', entregas: 90 },
];

export default function LineChartDeliveries() {
  return(
    <ChartContainer title="Desempenho das entregas (Últimos 7 dias)">
      <ResponsiveContainer width={"100%"} height={"100%"}>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: -15, // Ajuste para mover a YAxis mais para a esquerda
            bottom: 5, 
          }}
        >
          <CartesianGrid strokeDasharray={"3 3"} stroke="#e8e8e0"/>
          <XAxis dataKey="name" stroke="#888888" tickLine={false} axisLine={false} />
          <YAxis stroke="#888888" tickLine={false} axisLine={false} />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} wrapperClassName="shadow-lg rounded-md" />
          <Line type="monotone" dataKey="entregas" stroke="#82ca9d" strokeWidth={2} activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}