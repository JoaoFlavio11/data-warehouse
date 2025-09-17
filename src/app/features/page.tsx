// src/app/recursos/page.js
import Link from 'next/link';

export default function Recursos() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow bg-gray-50 py-16 px-4 flex items-center justify-center">
        <div className="container mx-auto text-center">
          {/* Título da Página de Recursos */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Recursos que Impulsionam sua Logística
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            EasyRoute oferece um conjunto de ferramentas poderosas para otimizar cada etapa do seu fluxo de trabalho, da entrada de mercadorias até a expedição final.
          </p>

          {/* Cards de Recursos Detalhados */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Exemplo de Card 1: Mapeamento em Grafos */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-blue-600 mb-2">Mapeamento em Grafos</h2>
              <p className="text-gray-700 mb-4">
                Visualize seu galpão como um grafo dinâmico. Identifique nós (locais de armazenagem) e arestas (caminhos) para planejar rotas com precisão cirúrgica.
              </p>
            </div>

            {/* Exemplo de Card 2: Análise Preditiva */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-blue-600 mb-2">Análise de Fluxo de Trabalho</h2>
              <p className="text-gray-700 mb-4">
                Colete dados sobre o movimento de mercadorias e analise padrões para prever gargalos, otimizando o layout do galpão e a alocação de pessoal.
              </p>
            </div>

            {/* Exemplo de Card 3: Interface Intuitiva */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-blue-600 mb-2">Dashboard Interativo</h2>
              <p className="text-gray-700 mb-4">
                Gerencie todas as operações de um único painel. Nossa interface é intuitiva e acessível para toda a sua equipe, sem a necessidade de treinamento complexo.
              </p>
            </div>
          </div>
          
          {/* CTA para Teste */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Pronto para Ver o EasyRoute em Ação?</h3>
            <Link 
              href="/cadastro" 
              className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors duration-300"
            >
              Comece seu teste grátis
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}