// src/app/dashboard/components/DashboardGrid.tsx
import CardStats from "./CardStats";
import AlertsList from "./AlertList"; // Componente local
import DashHeader from "./DashHeader";
import LineChartDeliveries from "./DeliveryLineChart";
import PieChartRoutes from "./RoutesPieChart";
import RealtimeMap from "./RealTimeMap";



export default function 
DashGrid() {
  return (
    <div className="flex-1 p-6 mt-4">
      <DashHeader/>
      {/* Grid 1: Cards de Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <CardStats title="Pedidos Pendentes" value={128} />
        <CardStats title="Pedidos Concluídos Hoje" value={45} />
        <CardStats title="Receita Média Diária" value={"R$ 3.250,00"} />
      </div>

      {/* Grid 2: Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <LineChartDeliveries /> {/* Componente do gráfico de linha */}
        <PieChartRoutes />      {/* Componente do gráfico de pizza */}
      </div>

      {/* Grid 3: Alertas e Mapa */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AlertsList />
        <RealtimeMap />         {/* Componente do mapa */}
      </div>
    </div>
  );
}