import React, { Suspense } from "react";
import PageHeader from "@/src/shared/components/Page-Header";
import { Button } from "@/src/shared/components/ui/button";
import Sidebar from "@/src/shared/components/Layout/Sidebar";
import { 
  FaPlus,
  FaEye,
} from 'react-icons/fa';
import WarehouseMap from "@/src/modules/galpoes/components/WarehouseMap";
import GrowthVisualization from "@/src/modules/galpoes/components/GrowthVisualization";
import WarehouseList from "@/src/modules/galpoes/components/WarehouseList";
import MetricDash from "@/src/modules/galpoes/components/Metricdash";
import OccupationStats from "@/src/modules/galpoes/components/OccupationStats";


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
        <MetricDash />

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
        <OccupationStats/>
      </div>
    </main>
  );
}