import MetricCard from "@/src/shared/components/MetricCard";
import { CheckCircleIcon, ClockIcon, PackageIcon, TrendingUpIcon } from "lucide-react";

export default function MetricDash(){
  return(
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="Pedidos em Processamento"
            value="85"
            subtitle="Aguardando processamento"
            icon={<ClockIcon className="w-5 h-5" />}
            trend="up"
            trendValue="+12"
            variant="warning"
          />
          
          <MetricCard
            title="Pedidos Concluídos Hoje"
            value="12"
            subtitle="Entregas realizadas"
            icon={<CheckCircleIcon className="w-5 h-5" />}
            trend="up"
            trendValue="+3"
            variant="success"
          />
          
          <MetricCard
            title="Total de Pedidos"
            value="1,247"
            subtitle="Este mês"
            icon={<PackageIcon className="w-5 h-5" />}
            trend="up"
            trendValue="+8%"
            variant="info"
          />
          
          <MetricCard
            title="Receita Total"
            value="R$ 45.280"
            subtitle="Este mês"
            icon={<TrendingUpIcon className="w-5 h-5" />}
            trend="up"
            trendValue="+15%"
            variant="success"
          />
        </div>
  );
}