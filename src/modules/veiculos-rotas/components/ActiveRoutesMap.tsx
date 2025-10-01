import { Card, CardContent, CardHeader, CardTitle } from "@/src/shared/components/ui/card";
import { MapIcon } from "lucide-react";

export default function ActiveRoutesMap() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-slate-800">
          Mapa de Rotas Ativas
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg flex items-center justify-center relative overflow-hidden">
          {/* Simulação de um mapa com rotas */}
          <div className="absolute inset-0 p-4">
            {/* Ruas simuladas */}
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-gray-300"></div>
            <div className="absolute top-16 left-0 right-0 h-0.5 bg-gray-300"></div>
            <div className="absolute bottom-16 left-0 right-0 h-0.5 bg-gray-300"></div>
            <div className="absolute bottom-8 left-0 right-0 h-0.5 bg-gray-300"></div>
            
            <div className="absolute top-0 bottom-0 left-8 w-0.5 bg-gray-300"></div>
            <div className="absolute top-0 bottom-0 left-16 w-0.5 bg-gray-300"></div>
            <div className="absolute top-0 bottom-0 right-16 w-0.5 bg-gray-300"></div>
            <div className="absolute top-0 bottom-0 right-8 w-0.5 bg-gray-300"></div>

            {/* Rotas ativas simuladas */}
            <svg className="absolute inset-0 w-full h-full">
              {/* Rota vermelha */}
              <path
                d="M 20 40 Q 100 20 180 60 Q 260 100 340 80"
                stroke="#ef4444"
                strokeWidth="3"
                fill="none"
                strokeDasharray="5,5"
              />
              {/* Rota azul */}
              <path
                d="M 40 180 Q 120 160 200 140 Q 280 120 360 140"
                stroke="#3b82f6"
                strokeWidth="3"
                fill="none"
              />
              {/* Rota verde */}
              <path
                d="M 60 220 Q 140 200 220 180 Q 300 160 380 180"
                stroke="#22c55e"
                strokeWidth="3"
                fill="none"
              />
            </svg>

            {/* Marcadores de veículos */}
            <div className="absolute top-8 left-12 w-3 h-3 bg-red-500 rounded-full border-2 border-white shadow-lg"></div>
            <div className="absolute top-20 right-20 w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow-lg"></div>
            <div className="absolute bottom-12 left-1/3 w-3 h-3 bg-green-500 rounded-full border-2 border-white shadow-lg"></div>
            <div className="absolute bottom-20 right-1/4 w-3 h-3 bg-yellow-500 rounded-full border-2 border-white shadow-lg"></div>
          </div>
          
          <div className="relative z-10 text-center">
            <MapIcon className="h-8 w-8 text-slate-400 mx-auto mb-2" />
            <p className="text-slate-500 text-sm">Mapa interativo de rotas ativas</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}