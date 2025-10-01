import MetricCard from "@/src/shared/components/MetricCard";
import { ClockIcon, RouteIcon, TruckIcon, UsersIcon } from "lucide-react";


export default function MetricDash() {
  return (
    <div className="m-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <MetricCard
        title="Veículos Disponíveis"
        value="31"
        subtitle="Últimos 30 dias"
        icon={<TruckIcon className="w-5 h-5" />}
        trend="up"
        trendValue="+3"
        variant="success"
      />

      <MetricCard
        title="Motoristas Online"
        value="538"
        subtitle="Últimos 30 dias"
        icon={<UsersIcon className="w-5 h-5" />}
        trend="up"
        trendValue="+12"
        variant="info"
      />

      <MetricCard
        title="Rotas Ativas"
        value="24"
        subtitle="Agora"
        icon={<RouteIcon className="w-5 h-5" />}
        trend="neutral"
        trendValue="0"
        variant="warning"
      />

      <MetricCard
        title="Tempo Médio de Rota"
        value="2.4h"
        subtitle="Últimos 7 dias"
        icon={<ClockIcon className="w-5 h-5" />}
        trend="down"
        trendValue="-0.2h"
        variant="success"
      />
    </div>
  );
}
