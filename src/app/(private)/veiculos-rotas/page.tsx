"use client";
import { Suspense } from 'react';
import { 
  PlusIcon,
  MoreHorizontalIcon,
  EyeIcon,
  EditIcon,
  NavigationIcon,
  BarChart3Icon,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/src/shared/components/ui/card';
import AdvancedFilters from '@/src/shared/components/AdvancedFilters';
import { Button } from '@/src/shared/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/src/shared/components/ui/table';
import { Progress } from '@/src/shared/components/ui/progress';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/src/shared/components/ui/dropdown-menu';
import PageHeader from '@/src/shared/components/Page-Header';
import Sidebar from '@/src/shared/components/Layout/Sidebar';
import VehicleMetrics from '@/src/modules/veiculos-rotas/components/VehicleMetrics';
import ActiveRoutesMap from '@/src/modules/veiculos-rotas/components/ActiveRoutesMap';
import ActiveRoutesChart from '@/src/modules/veiculos-rotas/components/ActiveRoutesChart';
import DeliveryPerformanceChart from '@/src/modules/veiculos-rotas/components/DeliveryPerformance';
import VehicleStatsTable from '@/src/modules/veiculos-rotas/components/VehicleStatsTable';
import AddStats from '@/src/modules/veiculos-rotas/components/AditionalStats';
import { Badge } from '@/src/shared/components/ui/badge';

// Dados mockados para rotas ativas
const activeRoutesData = [
  {
    id: 1,
    idRota: 'Lentamento',
    status: 'Veículo',
    motorista: '13.3M',
    progresso: 3.34,
    acoes: 1708,
    statusColor: 'bg-green-500',
    progressoPercent: 75
  },
  {
    id: 2,
    idRota: 'Veículo',
    status: 'Veícula',
    motorista: '13.2M',
    progresso: 7.37,
    acoes: 1708,
    statusColor: 'bg-blue-500',
    progressoPercent: 45
  },
  {
    id: 3,
    idRota: 'Tractura',
    status: 'BS Pesapedo',
    motorista: '6.3.3M',
    progresso: 3.41,
    acoes: 1208,
    statusColor: 'bg-yellow-500',
    progressoPercent: 90
  },
  {
    id: 4,
    idRota: 'Pensinsul',
    status: '121 128',
    motorista: '38.2M',
    progresso: 4.34,
    acoes: 1208,
    statusColor: 'bg-red-500',
    progressoPercent: 20
  }
];

// Configuração dos filtros para veículos e rotas
const vehicleFilterOptions = [
  {
    key: 'statusVeiculo',
    label: 'Status do Veículo',
    type: 'select' as const,
    placeholder: 'Todos os status',
    options: [
      { value: 'todos', label: 'Todos' },
      { value: 'disponivel', label: 'Disponível' },
      { value: 'em_rota', label: 'Em Rota' },
      { value: 'manutencao', label: 'Manutenção' },
      { value: 'indisponivel', label: 'Indisponível' }
    ]
  },
  {
    key: 'tipoVeiculo',
    label: 'Tipo de Veículo',
    type: 'select' as const,
    placeholder: 'Todos os tipos',
    options: [
      { value: 'todos', label: 'Todos' },
      { value: 'moto', label: 'Moto' },
      { value: 'carro', label: 'Carro' },
      { value: 'van', label: 'Van' },
      { value: 'caminhao', label: 'Caminhão' }
    ]
  },
  {
    key: 'regiao',
    label: 'Região',
    type: 'select' as const,
    placeholder: 'Todas as regiões',
    options: [
      { value: 'todas', label: 'Todas' },
      { value: 'norte', label: 'Norte' },
      { value: 'sul', label: 'Sul' },
      { value: 'leste', label: 'Leste' },
      { value: 'oeste', label: 'Oeste' },
      { value: 'centro', label: 'Centro' }
    ]
  },
  {
    key: 'motorista',
    label: 'Motorista',
    type: 'text' as const,
    placeholder: 'Nome do motorista'
  }
];

// Componente da tabela de rotas ativas
function ActiveRoutesTable() {
  const handleFiltersChange = (filters: Record<string, string | number | undefined>) => {
    console.log('Filtros aplicados:', filters);
  };

  return (
    <div className="m-4 space-y-6">
      {/* Filtros */}
      <AdvancedFilters
        filters={vehicleFilterOptions}
        onFiltersChange={handleFiltersChange}
        searchPlaceholder="Buscar por rota, motorista ou veículo..."
      />

      {/* Tabela */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-semibold text-slate-800">
              Rotas Ativas
            </CardTitle>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <NavigationIcon className="h-4 w-4 mr-2" />
                Ver no Mapa
              </Button>
              <Button size="sm">
                <PlusIcon className="h-4 w-4 mr-2" />
                Nova Rota
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className='text-black'>ID da Rota</TableHead>
                  <TableHead className='text-black'>Status</TableHead>
                  <TableHead className='text-black'>Motorista</TableHead>
                  <TableHead className='text-black'>Progresso</TableHead>
                  <TableHead className='text-black'>Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {activeRoutesData.map((route) => (
                  <TableRow key={route.id} className="hover:bg-slate-50">
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${route.statusColor}`}></div>
                        <span className="font-medium">{route.idRota}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{route.status}</Badge>
                    </TableCell>
                    <TableCell>{route.motorista}</TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>{route.progresso}</span>
                          <span>{route.progressoPercent}%</span>
                        </div>
                        <Progress value={route.progressoPercent} className="h-2" />
                      </div>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontalIcon className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem className='text-black'>
                            <EyeIcon className="h-4 w-4 mr-2" />
                            Visualizar Rota
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <EditIcon className="h-4 w-4 mr-2" />
                            Editar Rota
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <NavigationIcon className="h-4 w-4 mr-2" />
                            Rastrear
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default function VeiculosRotasPage() {
  return (
    <main className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <Sidebar/>
      
      {/* conteúdo */}
      <div className="flex-1 p-8 spacy-y-8">
        <PageHeader
          title="Veículos e Rotas"
          subtitle="Monitore veículos disponíveis e gerencie rotas ativas"
          actions={
            <div className="flex gap-2 text-black">
              <Button variant="outline" size="sm">
                <BarChart3Icon className="text-black w-4 h-4 mr-2" />
                Relatórios
              </Button>
              <Button size="sm">
                <PlusIcon className="w-4 h-4 mr-2" />
                Nova Rota
              </Button>
            </div>
          }
        />

        {/* Métricas principais */}
        <VehicleMetrics/>

        {/* Mapa e gráficos */}
        <div className="m-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Suspense fallback={<div className="h-64 bg-slate-100 rounded-lg animate-pulse" />}>
            <ActiveRoutesMap />
          </Suspense>
          
          <Suspense fallback={<div className="h-48 bg-slate-100 rounded-lg animate-pulse" />}>
            <DeliveryPerformanceChart />
          </Suspense>
        </div>

        {/* Gráfico de rotas ativas */}
        <div className="m-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Suspense fallback={<div className="h-48 bg-slate-100 rounded-lg animate-pulse" />}>
            <ActiveRoutesChart />
          </Suspense>

          {/* Estatísticas de veículos */}
          <VehicleStatsTable/>
        </div>

        {/* Tabela de rotas ativas */}
        <Suspense fallback={<div className="m-4 h-64 bg-slate-100 rounded-lg animate-pulse" />}>
          <ActiveRoutesTable />
        </Suspense>

        {/* Estatísticas adicionais */}
        <AddStats/>
      </div>
    </main>
  );
}
