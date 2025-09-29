# Plano de Desenvolvimento - Sistema EasyRoute

## Análise do Projeto Atual

Baseado na análise do repositório GitHub e nas ilustrações fornecidas, o projeto **EasyRoute** é um sistema de gestão logística desenvolvido com **Next.js 15**, **React 19**, **Tailwind CSS** e **Shadcn UI**. O sistema possui uma arquitetura bem estruturada seguindo padrões modernos de desenvolvimento.

### Estrutura Atual do Projeto

A organização do projeto segue uma arquitetura modular bem definida:

| Diretório | Descrição |
|-----------|-----------|
| `src/app` | Estrutura de rotas do Next.js com grupos de rotas |
| `src/modules` | Módulos específicos por funcionalidade |
| `src/shared` | Componentes, hooks e utilitários compartilhados |

### Tecnologias Identificadas

O projeto utiliza um stack tecnológico robusto e moderno:

- **Next.js 15.5.3** com App Router
- **React 19.1.0** com hooks modernos
- **TypeScript** para tipagem estática
- **Tailwind CSS 4** para estilização
- **Shadcn UI** para componentes base
- **Recharts** e **Chart.js** para visualizações
- **Firebase** para backend
- **Storybook** para documentação de componentes

## Análise das Telas Baseadas nas Ilustrações

### 1. Dashboard Principal (Relatórios)

A primeira ilustração mostra um dashboard com:

- **Desempenho Geral de Entregas** com gráfico de linha temporal
- **Cards de métricas**: Pedidos Concluídos (987) e Custo Média por Entrega (R$ 15,30)
- **Visualização no Mapa** com gráfico de crescimento
- **Lista de avaliação São Paulo** com tabela detalhada

### 2. Gestão de Galpões

A segunda ilustração apresenta:

- **Galpões Ativos** (15) e **Estação Ocupada** com indicadores
- **Espaço Ocupado** (62%) e **Motoristas Online** com métricas
- **Visualização no Mapa** com localização dos galpões
- **Lista de Galpões** com informações detalhadas

### 3. Veículos e Rotas

A terceira ilustração demonstra:

- **Mapa de Rotas Ativas** com visualização geográfica
- **Veículos Disponíveis** (31) e **Motoristas Online** (538)
- **Desempenho de Entregas** com gráfico temporal
- **Rotas Ativas** com tabela de status e progresso

### 4. Gestão de Pedidos

A quarta ilustração exibe:

- **Pedidos em Processamento** (85) e **Pedidos Concluídos Hoje** (12)
- **Filtros e Ações** para gerenciamento
- **Lista de Todos os Pedidos** com status e ações

## Plano de Desenvolvimento por Etapas

### Etapa 1: Componentes Base Reutilizáveis

#### 1.1 Componentes de UI Personalizados

Criar componentes específicos para o sistema que complementem o Shadcn UI:

```typescript
// shared/components/ui/metric-card.tsx
interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: React.ReactNode;
  trend?: 'up' | 'down' | 'neutral';
  className?: string;
}
```

#### 1.2 Componentes de Layout

- **PageHeader**: Cabeçalho padronizado para páginas
- **MetricGrid**: Grid responsivo para cards de métricas
- **DataTable**: Tabela avançada com filtros e paginação
- **MapContainer**: Container para visualizações de mapa

### Etapa 2: Páginas Específicas

#### 2.1 Dashboard/Relatórios (`/relatorios`)

Componentes necessários:

- `PerformanceChart`: Gráfico de desempenho geral
- `MetricCards`: Cards de pedidos e custos
- `MapVisualization`: Visualização no mapa
- `EvaluationTable`: Tabela de avaliações

#### 2.2 Galpões (`/galpoes`)

Componentes necessários:

- `WarehouseMetrics`: Métricas de galpões ativos
- `OccupancyIndicator`: Indicador de ocupação
- `WarehouseMap`: Mapa de galpões
- `WarehouseList`: Lista detalhada de galpões

#### 2.3 Veículos e Rotas (`/veiculos-rotas`)

Componentes necessários:

- `ActiveRoutesMap`: Mapa de rotas ativas
- `VehicleMetrics`: Métricas de veículos disponíveis
- `DeliveryPerformance`: Gráfico de desempenho
- `ActiveRoutesList`: Lista de rotas ativas

#### 2.4 Pedidos (`/pedidos`)

Componentes necessários:

- `OrderMetrics`: Métricas de pedidos
- `OrderFilters`: Filtros avançados
- `OrdersList`: Lista completa de pedidos
- `OrderActions`: Ações para pedidos

### Etapa 3: Melhorias e Boas Práticas

#### 3.1 Correções Identificadas

1. **Typo no CardStats**: `rouded-xl` → `rounded-xl`
2. **Padronização de rotas**: Ajustar `/veiculos` para `/veiculos-rotas`
3. **Componentes Server vs Client**: Manter pages como Server Components

#### 3.2 Implementações Sugeridas

1. **Loading States**: Skeleton components para carregamento
2. **Error Boundaries**: Tratamento de erros
3. **Responsive Design**: Adaptação para mobile
4. **Accessibility**: Melhorias de acessibilidade
5. **Performance**: Lazy loading e otimizações

## Estrutura de Arquivos Proposta

```
src/
├── modules/
│   ├── relatorios/
│   │   └── components/
│   │       ├── PerformanceChart.tsx
│   │       ├── MetricCards.tsx
│   │       ├── MapVisualization.tsx
│   │       └── EvaluationTable.tsx
│   ├── galpoes/
│   │   └── components/
│   │       ├── WarehouseMetrics.tsx
│   │       ├── OccupancyIndicator.tsx
│   │       ├── WarehouseMap.tsx
│   │       └── WarehouseList.tsx
│   ├── veiculos-rotas/
│   │   └── components/
│   │       ├── ActiveRoutesMap.tsx
│   │       ├── VehicleMetrics.tsx
│   │       ├── DeliveryPerformance.tsx
│   │       └── ActiveRoutesList.tsx
│   └── pedidos/
│       └── components/
│           ├── OrderMetrics.tsx
│           ├── OrderFilters.tsx
│           ├── OrdersList.tsx
│           └── OrderActions.tsx
└── shared/
    └── components/
        ├── ui/
        │   ├── metric-card.tsx
        │   ├── data-table.tsx
        │   ├── map-container.tsx
        │   └── page-header.tsx
        └── Layout/
            └── Sidebar.tsx (existente)
```

## Próximos Passos

1. **Definir prioridades**: Qual tela/funcionalidade implementar primeiro?
2. **Criar componentes base**: Começar pelos componentes reutilizáveis
3. **Implementar tela por tela**: Seguindo o padrão estabelecido
4. **Testes e refinamentos**: Garantir qualidade e responsividade
5. **Documentação**: Manter Storybook atualizado

## Considerações Técnicas

### Props e Tipagem

Todos os componentes devem ser **tipados com TypeScript** e receber dados via **props**, mantendo a flexibilidade e reutilização.

### Server vs Client Components

- **Pages**: Manter como Server Components (sem `'use client'`)
- **Componentes interativos**: Usar `'use client'` apenas quando necessário
- **Componentes de UI**: Preferencialmente Server Components

### Performance

- **Lazy loading** para componentes pesados
- **Memoização** para cálculos complexos
- **Otimização de imagens** e assets

Este plano fornece uma base sólida para o desenvolvimento estruturado do sistema EasyRoute, mantendo as melhores práticas de React e Next.js enquanto atende aos requisitos visuais apresentados nas ilustrações.
