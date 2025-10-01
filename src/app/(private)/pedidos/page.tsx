/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import MetricDash from "@/src/modules/pedidos/components/MetricDash";
import NewOrderForm from "@/src/modules/pedidos/components/NewOrderForm";
import AdvancedFilters from "@/src/shared/components/AdvancedFilters";
import Sidebar from "@/src/shared/components/Layout/Sidebar";

import PageHeader from "@/src/shared/components/Page-Header";
import { Badge } from "@/src/shared/components/ui/badge";
import { Button } from "@/src/shared/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/shared/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/src/shared/components/ui/dropdown-menu";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/src/shared/components/ui/table";
import { DownloadIcon, EditIcon, EyeIcon, FilterIcon, MoreHorizontalIcon, TrashIcon } from "lucide-react";
import { Suspense } from "react";

// Dados mockados para demonstração
const ordersData = [
  {
    id: 1,
    numero: 'PED-001',
    cliente: 'Cliente A',
    origem: 'Em Rota',
    destino: 'Em Rota',
    status: 'em_rota',
    statusSecundario: 'processando',
    acoes: 687,
    dataEntrega: '2024-01-15',
    valor: 'R$ 150,00',
    prioridade: 'alta'
  },
  {
    id: 2,
    numero: 'PED-002',
    cliente: 'Cliente B',
    origem: '01 2030',
    destino: 'Em Rota',
    status: 'processando',
    statusSecundario: 'pendente',
    acoes: 308,
    dataEntrega: '2024-01-16',
    valor: 'R$ 89,50',
    prioridade: 'media'
  },
  {
    id: 3,
    numero: 'PED-003',
    cliente: 'Origem',
    origem: '02 2000',
    destino: 'Entregue',
    status: 'entregue',
    statusSecundario: 'concluido',
    acoes: 436,
    dataEntrega: '2024-01-14',
    valor: 'R$ 275,00',
    prioridade: 'baixa'
  },
  {
    id: 4,
    numero: 'PED-004',
    cliente: 'Pendante',
    origem: '03 2010',
    destino: 'Entregue',
    status: 'entregue',
    statusSecundario: 'concluido',
    acoes: 594,
    dataEntrega: '2024-01-13',
    valor: 'R$ 320,00',
    prioridade: 'alta'
  },
  {
    id: 5,
    numero: 'PED-005',
    cliente: 'Pendante',
    origem: '05 2011',
    destino: 'Entregue',
    status: 'entregue',
    statusSecundario: 'concluido',
    acoes: 594,
    dataEntrega: '2024-01-12',
    valor: 'R$ 180,75',
    prioridade: 'media'
  },
  {
    id: 6,
    numero: 'PED-006',
    cliente: 'Baixo estoque a luma 1 &',
    origem: '05 2031',
    destino: 'Entregue',
    status: 'problema',
    statusSecundario: 'atrasado',
    acoes: 594,
    dataEntrega: '2024-01-11',
    valor: 'R$ 95,25',
    prioridade: 'urgente'
  }
];

// Configuração dos filtros
const filterOptions = [
  {
    key: 'status',
    label: 'Status',
    type: 'select' as const,
    placeholder: 'Todos os status',
    options: [
      { value: 'todos', label: 'Todos' },
      { value: 'processando', label: 'Em Processamento' },
      { value: 'em_rota', label: 'Em Rota' },
      { value: 'entregue', label: 'Entregue' },
      { value: 'problema', label: 'Com Problema' }
    ]
  },
  {
    key: 'dataRange',
    label: 'Período',
    type: 'select' as const,
    placeholder: 'Selecionar período',
    options: [
      { value: 'hoje', label: 'Hoje' },
      { value: '7dias', label: 'Últimos 7 dias' },
      { value: '30dias', label: 'Últimos 30 dias' },
      { value: 'personalizado', label: 'Período personalizado' }
    ]
  },
  {
    key: 'prioridade',
    label: 'Prioridade',
    type: 'select' as const,
    placeholder: 'Todas as prioridades',
    options: [
      { value: 'todas', label: 'Todas' },
      { value: 'baixa', label: 'Baixa' },
      { value: 'media', label: 'Média' },
      { value: 'alta', label: 'Alta' },
      { value: 'urgente', label: 'Urgente' }
    ]
  },
  {
    key: 'cliente',
    label: 'Cliente',
    type: 'text' as const,
    placeholder: 'Nome do cliente'
  }
];

// Função para obter a cor do status
const getStatusColor = (status: string) => {
  switch (status) {
    case 'entregue':
      return 'bg-green-500';
    case 'em_rota':
      return 'bg-blue-500';
    case 'processando':
      return 'bg-yellow-500';
    case 'problema':
      return 'bg-red-500';
    default:
      return 'bg-gray-500';
  }
};

// Função para obter o badge de prioridade
const getPriorityBadge = (prioridade: string) => {
  switch (prioridade) {
    case 'urgente':
      return <Badge className="bg-red-600">Urgente</Badge>;
    case 'alta':
      return <Badge variant="destructive">Alta</Badge>;
    case 'media':
      return <Badge variant="outline" className="text-black">Média</Badge>;
    case 'baixa':
      return <Badge variant="secondary">Baixa</Badge>;
    default:
      return <Badge variant="secondary">-</Badge>;
  }
};

// Componente da tabela de pedidos
function OrdersTable() {
  const handleFiltersChange = (filters: Record<string, any>) => {
    console.log('Filtros aplicados:', filters);
    // Aqui você implementaria a lógica de filtro
  };

  const handleNewOrder = (orderData: any) => {
    console.log('Novo pedido:', orderData);
    // Aqui você implementaria a lógica para salvar o pedido
  };

  return (
    <div className="space-y-6">
      {/* Filtros */}
      <AdvancedFilters
        filters={filterOptions}
        onFiltersChange={handleFiltersChange}
        searchPlaceholder="Buscar por número, cliente ou destino..."
      />

      {/* Tabela */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-semibold text-slate-800">
              Lista de Todos os Pedidos
            </CardTitle>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <DownloadIcon className="h-4 w-4 mr-2" />
                Exportar
              </Button>
              <NewOrderForm onSubmit={handleNewOrder} />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-black">Número</TableHead>
                  <TableHead className="text-black">Cliente</TableHead>
                  <TableHead className="text-black">Destino</TableHead>
                  <TableHead className="text-black">Status</TableHead>
                  <TableHead className="text-black">Prioridade</TableHead> {/* Alterado 'Status' duplicado para 'Prioridade' */}
                  <TableHead className="text-black">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {ordersData.map((order) => (
                  <TableRow key={order.id} className="hover:bg-slate-50">
                    <TableCell className="font-medium">{order.numero}</TableCell>
                    <TableCell>{order.cliente}</TableCell>
                    <TableCell>{order.destino}</TableCell>
                    <TableCell>
                      {/* Corrigindo a renderização para mostrar o status principal */}
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${getStatusColor(order.status)}`}></div>
                        <span className="text-sm">{
                            order.status === 'em_rota' ? 'Em Rota' :
                            order.status === 'entregue' ? 'Entregue' :
                            order.status === 'processando' ? 'Processando' :
                            order.status === 'problema' ? 'Problema' :
                            'Outro'
                        }</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      {/* Corrigindo a renderização para mostrar o badge de prioridade */}
                      {getPriorityBadge(order.prioridade)}
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontalIcon className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <EyeIcon className="h-4 w-4 mr-2" />
                            Visualizar
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <EditIcon className="h-4 w-4 mr-2" />
                            Editar
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            <TrashIcon className="h-4 w-4 mr-2" />
                            Excluir
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Paginação */}
          <div className="flex items-center justify-between mt-4 pt-4 border-t">
            <div className="text-sm text-slate-600">
              Mostrando 1-6 de 6 pedidos
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled>
                Anterior
              </Button>
              <Button variant="outline" size="sm" disabled>
                Próximo
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// A página principal ajustada
export default function PedidosPage(){
  return(
    <main className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <Sidebar/>

      {/* Conteúdo Principal */}
      <div className="flex-1 p-8 space-y-8">
        {/* Cabeçalho da Página */}
        <PageHeader
          title="Pedidos"
          subtitle="Acompanhe e gerencie seus pedidos aqui."
          actions={
            <div className=" text-black flex gap-2">
              <Button variant="outline" size="sm">
                <FilterIcon className="w-4 h-4 mr-2" />
                Relatórios
              </Button>
              <NewOrderForm onSubmit={(data) => console.log('Novo pedido:', data)} />
            </div>
          }
        />

        {/* Métricas principais - Estão visíveis no dashboard */}
        <MetricDash/>

        {/* Tabela de pedidos */}
        <Suspense fallback={<div className="h-64 bg-slate-100 rounded-lg animate-pulse" />}>
          <OrdersTable />
        </Suspense>

        {/* Estatísticas adicionais */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium text-slate-600">Status dos Pedidos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Entregues</span>
                  </div>
                  <span className="text-sm font-medium">68%</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm">Em Rota</span>
                  </div>
                  <span className="text-sm font-medium">22%</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm">Processando</span>
                  </div>
                  <span className="text-sm font-medium">8%</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-sm">Problemas</span>
                  </div>
                  <span className="text-sm font-medium">2%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium text-slate-600">Tempo Médio de Entrega</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-slate-900">2.4 dias</div>
                <p className="text-xs text-slate-950">Meta: 2.0 dias</p>
                <Badge variant="outline" className="text-xs text-black">
                  +0.2 dias vs mês anterior
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium text-slate-600">Satisfação do Cliente</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-slate-900">4.8/5</div>
                <p className="text-xs text-slate-500">Baseado em 1,247 avaliações</p>
                <Badge variant="secondary" className="text-xs bg-green-100 text-green-800">
                  +0.3 vs mês anterior
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}