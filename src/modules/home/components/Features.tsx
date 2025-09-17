import { FaRoute, FaEye, FaChartLine } from 'react-icons/fa';

export function Features() {
  const featuresList = [
    {
      icon: <FaRoute className="text-4xl text-blue-500 mb-4" />,
      title: "Otimização de Rotas Inteligente",
      description: "Nossos algoritmos de grafos encontram o caminho mais curto e eficiente para a coleta e entrega de itens, economizando tempo e recursos."
    },
    {
      icon: <FaEye className="text-4xl text-blue-500 mb-4" />,
      title: "Visualização em Tempo Real",
      description: "Monitore o fluxo de trabalho do seu galpão com um mapa interativo. Veja a posição de empilhadeiras e o status dos pedidos em tempo real."
    },
    {
      icon: <FaChartLine className="text-4xl text-blue-500 mb-4" />,
      title: "Análise Preditiva e Relatórios",
      description: "Identifique gargalos e tendências com relatórios detalhados. Previna problemas antes que eles ocorram e otimize a capacidade do seu armazém."
    },
    {
      icon: <FaChartLine className="text-4xl text-blue-500 mb-4" />, // Reutilizando o ícone, mas você pode adicionar outro.
      title: "Planejamento de Armazenagem",
      description: "Organize seu estoque de forma lógica para minimizar o tempo de deslocamento. Coloque itens de alta demanda próximos às saídas para maior eficiência."
    }
  ];

  return (
    <section className="bg-gray-100 py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Por que EasyRoute? Nossos diferenciais
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {featuresList.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-105"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-700">{feature.title}</h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}