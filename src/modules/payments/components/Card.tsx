import { CheckCircle } from "lucide-react";

interface CardPlanosProps {
  nome: string;
  preco: string;
  descricao: string;
  selecionado: boolean;
  onSelect: () => void;
}

export default function CardPlanos({ 
  nome, 
  preco, 
  descricao, 
  selecionado, 
  onSelect,
}: CardPlanosProps) {
  return (
    <div
      onClick={onSelect}
      className={`relative rounded-2xl p-6 shadow-lg transition-all duration-300 ease-in-out cursor-pointer 
        ${
          selecionado 
            ? "border-2 border-blue-600 bg-white scale-[1.03]"
            : "bg-gray-100 hover:scale-[1.03] hover:shadow-xl"
        }`
      }
    >
      {
        selecionado && (
          <CheckCircle className="absolute top-3 right-3 text-blue-600 w-6 h-6" />
        )
      }
      <h2 className="text-xl font-bold text-gray-800">{nome}</h2>
      <p className="text-sm mt-2 text-gray-600">{descricao}</p>
      <p className="text-2xl font-extrabold mt-4 text-blue-800">{preco}</p>
    </div>
  );
}