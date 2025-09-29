import { Card, CardContent, CardHeader, CardTitle } from "@/src/shared/components/ui/card";

export default function EvaluationTable(){
  const data = [
    { data: 'Raia', tipo: 'Saída', status: '6.4.4.1.1', veiculos: '27.27', acoes: '687' },
    { data: 'Valida', tipo: 'Onst', status: '17.57.3.M', veiculos: '35.64', acoes: '308' },
    { data: 'Status', tipo: 'Oust', status: '16.8.2.4.M', veiculos: '38.62', acoes: '436' },
    { data: 'Satt', tipo: 'Oucl', status: '15.15.2.M', veiculos: '11.85', acoes: '59.4' },
  ];
  
  return (
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-slate-800">
            Lista de Avaliações
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 px-2 text-sm font-medium text-slate-600">Data</th>
                  <th className="text-left py-3 px-2 text-sm font-medium text-slate-600">Tipo</th>
                  <th className="text-left py-3 px-2 text-sm font-medium text-slate-600">Status</th>
                  <th className="text-left py-3 px-2 text-sm font-medium text-slate-600">Veículos</th>
                  <th className="text-left py-3 px-2 text-sm font-medium text-slate-600">Ações</th>
                </tr>
              </thead>

              <tbody>
                {data.map((row,index) => (
                  <tr key={index} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="py-3 px-2 text-sm text-slate-700">{row.data}</td>
                    <td className="py-3 px-2 text-sm text-slate-700">{row.tipo}</td>
                    <td className="py-3 px-2 text-sm text-slate-700">{row.status}</td>
                    <td className="py-3 px-2 text-sm text-slate-700">{row.veiculos}</td>
                    <td className="py-3 px-2 text-sm text-slate-700">{row.acoes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
  );
}