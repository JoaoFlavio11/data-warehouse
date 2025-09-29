import { Card, CardContent, CardHeader, CardTitle } from "@/src/shared/components/ui/card";

export default function MapVisualization(){
  return(
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-slate-800">
          Visualização do Mapa de Entregas
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-48 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
          <p className="text-slate-500">Mapa interativo aqui</p>
        </div>
        <div className="text-sm text-slate-600">
          <p>25% de crescimento nos últimos 7 dias</p>
        </div>
      </CardContent>
    </Card>
  );
}