import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 px-4 md:py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Bloco da Imagem */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/logs.png" // Certifique-se de que esta imagem está otimizada e no diretório 'public'
            alt="Ilustração de otimização logística com grafos"
            width={600} // Aumente o width para melhor visualização em desktops, será responsivo
            height={400} // Ajuste a altura proporcionalmente
            className="rounded-xl shadow-lg w-full max-w-md md:max-w-lg object-cover" // Classes para responsividade e estilo
          />
        </div>

        {/* Bloco do Texto */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Nossa Missão: Otimizar o Futuro da Logística
          </h1>
          <p className="text-lg md:text-xl max-w-full mx-auto md:mx-0 opacity-90">
            A EasyRoute nasceu para simplificar o complexo mundo da logística,
            transformando o caos em eficiência e a incerteza em estratégia.
          </p>
        </div>
      </div>
    </section>
  );
}
