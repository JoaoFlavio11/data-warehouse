import { Card, CardContent, CardHeader, CardTitle } from "@/src/shared/components/ui/card";

export default function VehicleStatsTable(){
  return(
    <div className=" space-y-4">
          <Card className='h-full'>
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-slate-800">
                Status dos Veículos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Disponíveis</span>
                  </div>
                  <span className="text-sm font-medium">31 (62%)</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm">Em Rota</span>
                  </div>
                  <span className="text-sm font-medium">24 (48%)</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm">Manutenção</span>
                  </div>
                  <span className="text-sm font-medium">3 (6%)</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-sm">Indisponíveis</span>
                  </div>
                  <span className="text-sm font-medium">2 (4%)</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
  );
}