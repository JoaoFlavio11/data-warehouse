"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4 md:py-32">
      <div className="container mx-auto text-center flex flex-col lg:flex-row items-center justify-center gap-8">
        <Image
          src="/graph.png"
          alt="Ilustração de grafos"
          width={700}
          height={450}
          className="rounded-lg shadow-xl"
        />
        <div className="lg:text-left lg:max-w-xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Recursos que Impulsionam sua Logística
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 opacity-90">
            EasyRoute oferece um conjunto de ferramentas poderosas para otimizar
            cada etapa do seu fluxo de trabalho, da entrada de mercadorias até a
            expedição final.
          </p>
        </div>
      </div>
    </section>
  );
}
