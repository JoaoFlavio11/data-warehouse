import Link from "next/link";

export function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4 md:py-32">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
          Otimize seu galpão com grafos. Sem complicação.
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-90">
          Diga adeus à logística manual e rotas ineficientes. Com EasyRoute,
          você visualiza, planeja e otimiza a movimentação de mercadorias de
          forma inteligente, usando o poder da teoria dos grafos.
        </p>
        <Link
          href="/signup"
          className="bg-white text-blue-800 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300"
        >
          Comece a otimizar hoje mesmo!
        </Link>
      </div>
    </section>
  );
}
