import MetricCard from "@/src/shared/components/MetricCard";
import { FaChartPie, FaUsers, FaWarehouse } from "react-icons/fa";

export default function MetricDash(){
  return(
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="Galpões Ativos"
            value="15"
            subtitle="Últimos 30 dias"
            icon={<FaWarehouse className="w-5 h-5" />}
            trend="up"
            trendValue="+2"
            variant="success"
          />
        
          <MetricCard
            title="Estação Ocupada"
            value="Ativo"
            subtitle="Status atual"
            icon={<FaChartPie className="w-5 h-5" />}
            variant="info"
          />
        
          <MetricCard
            title="Espaço Ocupado"
            value="62%"
            subtitle="Últimos 30 dias"
            icon={<FaWarehouse className="w-5 h-5" />}
            trend="up"
            trendValue="+5%"
            variant="warning"
          />
        
          <MetricCard
            title="Motoristas Online"
            value="24"
            subtitle="Agora"
            icon={<FaUsers className="w-5 h-5" />}
            trend="neutral"
            trendValue="0"
            variant="info"
          />
        </div>
  );
}