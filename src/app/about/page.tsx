import Hero from "@/src/modules/about/components/Hero";
import Link from "next/link";

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Seção Hero */}
      <Hero />

      {/* Conteúdo Principal (Missão e Visão) */}
      <main className="flex-grow bg-gray-50 py-16 px-4 flex items-center justify-center">
        <div className="container mx-auto text-center">
          {/* Título da Seção */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Quem Somos
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            Somos uma equipe de inovadores apaixonados por tecnologia e
            otimização. Acreditamos que a logística moderna deve ser
            inteligente, ágil e acessível a todos.
          </p>

          {/* Cards de Missão e Visão */}

          {/* CTA para Teste */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Junte-se a Nós nesta Jornada de Otimização
            </h3>
            <Link
              href="/cadastro"
              className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors duration-300"
            >
              Comece a otimizar hoje mesmo!
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
