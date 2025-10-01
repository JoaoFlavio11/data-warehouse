import { Card, CardContent, CardHeader, CardTitle } from "@/src/shared/components/ui/card";

export default function DeliveryPerformanceChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-slate-800">
          Desempenho de Entregas
        </CardTitle>
        <p className="text-sm text-slate-600">(Últimos 4 dias)</p>
      </CardHeader>
      <CardContent>
        <div className="h-48 bg-slate-50 rounded-lg p-4">
          <div className="h-full flex items-end justify-between">
            {[0, 1, 2, 3, 4, 5, 6].map((index) => (
              <div
                key={index}
                className="bg-blue-500 rounded-t transition-all duration-300 hover:bg-blue-600"
                style={{
                  height: `${20 + index * 8 + (index > 3 ? 5 : 0)}%`,
                  width: '12%'
                }}
              />
            ))}
          </div>
          <div className="mt-2 text-xs text-slate-600 flex justify-between">
            <span>0</span>
            <span>1%</span>
            <span>5%</span>
            <span>1%</span>
            <span>0</span>
            <span>25%</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}