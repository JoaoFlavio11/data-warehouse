export default function Cards(){
  return(
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Card de Missão */}
      <div className="bg-[#f0f0f0] p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-2xl font-bold text-blue-600 mb-2">Nossa Missão</h3>
        <p className="text-gray-700 mb-4">
          Capacitar empresas de todos os tamanhos a otimizar suas operações de armazém e logística, usando soluções baseadas em teoria dos grafos e IA para maximizar a eficiência e minimizar custos.
        </p>
      </div>

            {/* Card de Visão */}
            <div className="bg-[#f0f0f0] p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-blue-600 mb-2">Nossa Visão</h3>
              <p className="text-gray-700 mb-4">
                Ser o principal parceiro tecnológico em otimização de logística global, construindo um futuro onde o movimento de cada item é perfeitamente orquestrado.
              </p>
            </div>
          </div>
  );
}