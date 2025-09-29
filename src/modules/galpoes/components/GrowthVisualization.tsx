import { Card, CardContent, CardHeader, CardTitle } from "@/src/shared/components/ui/card";

export default function GrowthVisualization(){
  return(
     <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-slate-800">
          Visualização no Mapa
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-48 bg-slate-50 rounded-lg p-4">
          <div className="h-full flex items-end justify-between">
            {[0, 1, 2, 3, 4, 5, 6].map((index) => (
              <div
                key={index}
                className="bg-blue-500 rounded-t"
                style={{
                  height: `${20 + index * 10}%`,
                  width: '12%'
                }}
              />
            ))}
          </div>
          <div className="mt-2 text-xs text-slate-600 flex justify-between">
            <span>1111</span>
            <span>2010</span>
            <span>2013</span>
            <span>200</span>
            <span>200</span>
            <span>200</span>
            <span>2500</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}