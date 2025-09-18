import Cards from "@/src/modules/features/components/Cards";
import Hero from "@/src/modules/features/components/Hero";
import Link from "next/link";

export default function Recursos() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* hero */}
      <Hero />

      {/* Seção de Conteúdo Principal */}
      <main className="flex-grow bg-gray-50 py-16 px-4 flex items-center justify-center">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">
            Recursos Poderosos para Otimizar sua Logística
          </h2>
          {/* Cards de Recursos Detalhados */}
          <Cards />

          {/* CTA para Teste */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Pronto para Ver o EasyRoute em Ação?
            </h3>
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
