"use client";
import Card from "@/src/modules/payments/components/Card";
import { useState } from "react";


export default function Payments() {

  const [planoSelecionado, setPlanoSelecionado] = useState<string | null>(null);

  const planos = [
    {
      nome: "Plano Básico",
      preco: "R$ 39,90/mês",
      descricao: "Sistema supervisório e suporte 24h.",
    },
    {
      nome: "Plano Intermediário",
      preco: "R$ 59,90/mês",
      descricao: "Toda a cobertura do plano básico + manutenção dos equipamentos.",
    },
    {
      nome: "Plano Premium",
      preco: "R$ 89,90/mês",
      descricao:
        "Suporte 24h do sistema e dos equipamentos + envio de componentes de reposição e instalação.",
    },
  ];

  const handleSelecionarPlano = (nome: string) => {
    if (planoSelecionado === nome) {
      setPlanoSelecionado(null);
    } else {
      setPlanoSelecionado(nome);
    }
  };

  return (
    <>
      <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {planos.map((plano) => (
            <Card
              key={plano.nome}
              nome={plano.nome}
              preco={plano.preco}
              descricao={plano.descricao}
              selecionado={planoSelecionado === plano.nome}
              onSelect={() => handleSelecionarPlano(plano.nome)}
            />
          ))}
        </div>
    </>
  );
}