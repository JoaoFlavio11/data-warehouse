"use client"
import Image from 'next/image';
import ChartContainer from './ChartContainer';


export default function RealtimeMap() {
  return (
    <ChartContainer title="Visualização em Tempo Real">
      {/* Usando o componente Image do Next.js para otimização */}
      {/* Certifique-se de que a imagem `realtime-map.png` esteja em `public/images/` ou um caminho similar */}
      <Image
        src="/map2.png" // Caminho relativo à pasta `public`
        alt="Mapa em tempo real das entregas"
        layout="fill" // Preenche o contêiner pai
        objectFit="cover"
        className="rounded-lg" // Opcional: bordas arredondadas para a imagem
      />
    </ChartContainer>
  );
}