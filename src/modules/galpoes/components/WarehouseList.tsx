import { Card, CardContent, CardHeader, CardTitle } from "@/src/shared/components/ui/card";

export default function WarehouseList(){
  const warehouses = [
    { 
      id: 'Lentamento', 
      status: 'Veículo', 
      marfatto: '13.3M', 
      copresso: '3.34', 
      acoes: '1708',
      statusColor: 'bg-green-500'
    },
    { 
      id: 'Veículo', 
      status: 'Veícula', 
      marfatto: '13.2M', 
      copresso: '7.37', 
      acoes: '1708',
      statusColor: 'bg-blue-500'
    },
    { 
      id: 'Tractura', 
      status: 'BS Pesapedo', 
      marfatto: '6.3.3M', 
      copresso: '3.41', 
      acoes: '1208',
      statusColor: 'bg-yellow-500'
    },
    { 
      id: 'Pensinsul', 
      status: '121 128', 
      marfatto: '38.2M', 
      copresso: '4.34', 
      acoes: '1208',
      statusColor: 'bg-red-500'
    },
  ];

  return(
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-slate-800">
          Lista de Galpões
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-3 px-2 text-sm font-medium text-slate-600">ID/Nome Rota</th>
                <th className="text-left py-3 px-2 text-sm font-medium text-slate-600">Status</th>
                <th className="text-left py-3 px-2 text-sm font-medium text-slate-600">Marfatto</th>
                <th className="text-left py-3 px-2 text-sm font-medium text-slate-600">Copresso</th>
                <th className="text-left py-3 px-2 text-sm font-medium text-slate-600">Ações</th>
              </tr>
            </thead>
            <tbody>
              {warehouses.map((warehouses, index) => (
                <tr key={index} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="py-3 px2">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${warehouses.statusColor}`}></div>
                      <span className="text-sm text-slate-700">{warehouses.id}</span>
                    </div>
                  </td>
                  <td className="py-3 px-2 text-sm text-slate-700">{warehouses.status}</td>
                  <td className="py-3 px-2 text-sm text-slate-700">{warehouses.marfatto}</td>
                  <td className="py-3 px-2 text-sm text-slate-700">{warehouses.copresso}</td>
                  <td className="py-3 px-2 text-sm text-slate-700">{warehouses.acoes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}