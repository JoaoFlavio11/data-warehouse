"use client";
import { Badge } from "@/src/shared/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/shared/components/ui/card";


export default function AddStats() {
  return(
    <div className="m-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-slate-600">Eficiência de Rotas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-slate-900">94.2%</div>
              <p className="text-xs text-slate-500">Meta: 95%</p>
              <Badge variant="secondary" className="text-xs">
                +2.1% vs mês anterior
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-slate-600">Combustível Economizado</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-slate-900">1,247L</div>
              <p className="text-xs text-slate-500">Este mês</p>
              <Badge variant="success">
                +15% vs mês anterior
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium text-slate-600">Distância Total</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-slate-900">12,847 km</div>
              <p className="text-xs text-slate-500">Este mês</p>
              <Badge variant="success" className="text-xs">
                +8% vs mês anterior
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
  );
}