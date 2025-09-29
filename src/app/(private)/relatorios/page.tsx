import { Suspense } from "react";
import PageHeader from "@/src/shared/components/Page-Header";
import MetricCard from "@/src/shared/components/MetricCard";
import { Button } from "@/src/shared/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/shared/components/ui/select";
import {
  FaCheckCircle,
  FaDollarSign,
  FaMapMarkerAlt,
  FaDownload,
  FaFilter,
} from "react-icons/fa";
import PerformanceChart from "@/src/modules/relatorios/components/PerformanceChart";
import MapVisualization from "@/src/modules/relatorios/components/MapVisualization";
import EvaluationTable from "@/src/modules/relatorios/components/EvaluationTable";
import Sidebar from "@/src/shared/components/Layout/Sidebar";

export default function RelatoriosPage() {
  return (
    <main className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Conteúdo principal */}
      <div className="flex-1 p-8 space-y-8">
        <PageHeader
          title="Relatórios"
          subtitle="Acompanhe o desempenho e métricas do sistema"
          actions={
            <div className="text-black flex gap-2">
              <Select defaultValue="30dias">
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="text-black">
                  <SelectItem className="text-muted-foreground" value="7dias">Últimos 7 dias</SelectItem>
                  <SelectItem className="text-muted-foreground" value="30dias">Últimos 30 dias</SelectItem>
                  <SelectItem className="text-muted-foreground" value="90dias">Últimos 90 dias</SelectItem>
                </SelectContent>
              </Select>
              <Button size="sm" variant="outline">
                <FaFilter className="w-4 h-4 mr-2" />
                Filtros
              </Button>
              <Button size="sm" variant="outline">
                <FaDownload className="w-4 h-4 mr-2" />
                Exportar
              </Button>
            </div>
          }
        />

        {/* Métricas principais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="Pedidos Concluídos"
            value="987"
            subtitle="Últimos 30 dias"
            icon={<FaCheckCircle className="w-5 h-5" />}
            trend="up"
            trendValue="+12%"
            variant="success"
          />

          <MetricCard
            title="Custo Médio por Entrega"
            value="R$ 15,30"
            subtitle="Últimos 30 dias"
            icon={<FaDollarSign className="w-5 h-5" />}
            trend="down"
            trendValue="-5%"
            variant="info"
          />

          <MetricCard
            title="Rotas Ativas"
            value="24"
            subtitle="Agora"
            icon={<FaMapMarkerAlt className="w-5 h-5" />}
            trend="neutral"
            trendValue="0%"
          />

          <MetricCard
            title="Taxa de Sucesso"
            value="94.2%"
            subtitle="Últimos 30 dias"
            icon={<FaCheckCircle className="w-5 h-5" />}
            trend="up"
            trendValue="+2%"
            variant="success"
          />
        </div>

        {/* Gráficos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="lg:col-span-2">
            <Suspense
              fallback={<div className="h-64 bg-slate-100 rounded-lg animate-pulse" />}
            >
              <PerformanceChart />
            </Suspense>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Suspense
            fallback={<div className="h-48 bg-slate-100 rounded-lg animate-pulse" />}
          >
            <MapVisualization />
          </Suspense>
        </div>

        <div className="lg:col-span-1">
          <Suspense
            fallback={<div className="h-48 bg-slate-100 rounded-lg animate-pulse" />}
          >
            <EvaluationTable />
          </Suspense>
        </div>
      </div>
    </main>
  );
}