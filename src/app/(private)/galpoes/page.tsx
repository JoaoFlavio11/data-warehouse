import React, { Suspense } from "react";
import PageHeader from "@/src/shared/components/Page-Header";
import MetricCard from "@/src/shared/components/MetricCard";
import { Button } from "@/src/shared/components/ui/button";
import { Badge } from "@/src/shared/components/ui/badge";
import { Progress } from "@/src/shared/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle} from "@/src/shared/components/ui/card";
import Sidebar from "@/src/shared/components/Layout/Sidebar";
import { 
  FaWarehouse, 
  FaUsers, 
  FaChartPie,
  FaPlus,
  FaEye,
} from 'react-icons/fa';
import WarehouseMap from "@/src/modules/galpoes/components/WarehouseMap";
import GrowthVisualization from "@/src/modules/galpoes/components/GrowthVisualization";
import WarehouseList from "@/src/modules/galpoes/components/WarehouseList";


export default function GalpoesPage(){
  return(
    <main className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <Sidebar/>

      {/* contaúdoo principal */}
      <div className="flex-1 p-8 spacy-y-8">
        <PageHeader
          title="Galpões"
          subtitle="Gerencie e monitore todos os galpões do sistema"
          actions={
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="text-muted-foreground">
              <FaEye className="w-4 h-4 mr-2" />
              Visualizar Todos
            </Button>
            <Button size="sm">
              <FaPlus className="w-4 h-4 mr-2" />
              Novo Galpão
            </Button>
          </div>
        }
        />

        {/* Métricas principais */}
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

        {/* visualizações */}
        <div className=" my-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Suspense fallback={<div className="h-64 bg-slate-100 rounded-lg animate-pulse" />}>
          <WarehouseMap />
        </Suspense>

        <Suspense fallback={<div className="h-48 bg-slate-100 rounded-lg animate-pulse" />}>
          <GrowthVisualization />
        </Suspense>
        </div>

        {/* Lista */}
        <div className="my-4 grid grid-cols-1">
          <Suspense fallback={<div className="h-64 bg-slate-100 rounded-lg animate-pulse" />}>
            <WarehouseList />
          </Suspense>
        </div>

        {/* Seção adicional com detalhes de ocupação */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium text-slate-600">Capacidade Total</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Utilizado</span>
                  <span>62%</span>
                </div>
                <Progress value={62} className="h-2" />
                <p className="text-xs text-slate-500">8,400 m² de 13,500 m²</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium text-slate-600">Eficiência Operacional</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Atual</span>
                  <span>87%</span>
                </div>
                <Progress value={87} className="h-2" />
                <p className="text-xs text-slate-500">Meta: 90%</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium text-slate-600">Movimentação Diária</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-slate-900">342</div>
                <p className="text-xs text-slate-500">Entradas e saídas hoje</p>
                <Badge variant="secondary" className="text-xs">
                  +15% vs ontem
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}