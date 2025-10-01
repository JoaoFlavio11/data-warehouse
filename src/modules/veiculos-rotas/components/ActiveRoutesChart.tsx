import { Card, CardContent, CardHeader, CardTitle } from "@/src/shared/components/ui/card";

export default function ActiveRoutesChart() {
  const chartData = [
    { year: '1911', value: 2 },
    { year: '2000', value: 4 },
    { year: '2013', value: 6 },
    { year: '200', value: 8 },
    { year: '200', value: 7 },
    { year: '200', value: 9 },
    { year: '2010', value: 11 }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-slate-800">
          Rotas Ativas
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-48 bg-slate-50 rounded-lg p-4">
          <div className="h-full flex items-end justify-between gap-2">
            {chartData.map((item, index) => (
              <div key={index} className="flex flex-col items-center flex-1">
                <div
                  className="bg-gradient-to-t from-red-500 to-green-500 rounded-t w-full transition-all duration-300 hover:opacity-80"
                  style={{ height: `${(item.value / 11) * 100}%` }}
                />
                <span className="text-xs text-slate-600 mt-1">{item.year}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
