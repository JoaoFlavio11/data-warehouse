import ChartContainer from "./ChartContainer";

// Os alertas poderiam vir de uma API, mas aqui estão fixos.
const mockAlerts = [
  "Veículo #3 com atraso estimado de 15 min na Rota A",
  "Baixo estoque de item X no Galpão B",
];

export default function AlertsList() {
  return (
    <ChartContainer title="Alertas Recentes" heightClass=''>
      <ul className="list-disc pl-5 text-gray-700 space-y-2 w-full">
        {mockAlerts.map((alert, index) => (
          <li key={index}>{alert}</li>
        ))}
      </ul>
    </ChartContainer>
  );
}