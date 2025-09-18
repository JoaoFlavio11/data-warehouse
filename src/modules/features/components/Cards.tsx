export default function Cards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Exemplo de Card 1: Mapeamento em Grafos */}
      <div className="bg-[#f0f0f0] p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-2xl font-bold text-blue-600 mb-2">
          Mapeamento em Grafos
        </h2>
        <p className="text-gray-700 mb-4">
          Visualize seu galpão como um grafo dinâmico. Identifique nós (locais
          de armazenagem) e arestas (caminhos) para planejar rotas com precisão
          cirúrgica.
        </p>
      </div>

      {/* Exemplo de Card 2: Análise Preditiva */}
      <div className="bg-[#f0f0f0] p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-2xl font-bold text-blue-600 mb-2">
          Análise de Fluxo de Trabalho
        </h2>
        <p className="text-gray-700 mb-4">
          Colete dados sobre o movimento de mercadorias e analise padrões para
          prever gargalos, otimizando o layout do galpão e a alocação de
          pessoal.
        </p>
      </div>

      {/* Exemplo de Card 3: Interface Intuitiva */}
      <div className="bg-[#f0f0f0] p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-2xl font-bold text-blue-600 mb-2">
          Dashboard Interativo
        </h2>
        <p className="text-gray-700 mb-4">
          Gerencie todas as operações de um único painel. Nossa interface é
          intuitiva e acessível para toda a sua equipe, sem a necessidade de
          treinamento complexo.
        </p>
      </div>
    </div>
  );
}
