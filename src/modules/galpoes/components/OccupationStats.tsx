import { Card, CardContent, CardHeader, CardTitle } from "@/src/shared/components/ui/card";
import { Progress } from "@/src/shared/components/ui/progress";
import { Badge } from "@/src/shared/components/ui/badge";

export default function OccupationStats(){
  return(
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
  );
}