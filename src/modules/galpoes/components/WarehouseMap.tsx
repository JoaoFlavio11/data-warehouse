import { Card, CardContent, CardHeader, CardTitle } from "@/src/shared/components/ui/card";

export default function WarehouseMap(){ 
  return(
    <Card>
      <CardHeader> 
        <CardTitle className="texCardTitle-semibold text-slate-800">
          Visualização no Mapa
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg flex items-center justify-center relative">
          <p className="text-slate-500">Mapa interativo dos galpões</p>
          {/* Simulação de marcadores no mapa */}
          <div className="absolute top-4 left-8 w-3 h-3 bg-green-500 rounded-full"></div>
          <div className="absolute top-12 right-12 w-3 h-3 bg-blue-500 rounded-full"></div>
          <div className="absolute bottom-8 left-1/3 w-3 h-3 bg-yellow-500 rounded-full"></div>
        </div>
      </CardContent>
    </Card>
  );
}