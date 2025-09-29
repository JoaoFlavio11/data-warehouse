import { Card, CardContent, CardHeader, CardTitle } from "@/src/shared/components/ui/card";

export default function PerformanceChart() {
  return(
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-slate-800">
          Desempenho Geral das Entregas
        </CardTitle>
        <p className="text-sm text-slate-600">Últimos 30 dias</p>
      </CardHeader>
      <CardContent>
        <div className="h-64 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg flex items-center justify-center">
          <p className="text-slate-500">Gráfico de linha temporal aqui</p>
        </div>
      </CardContent>
    </Card>
  );
}