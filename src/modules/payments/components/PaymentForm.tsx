import Image from "next/image";

interface PaymentFormProps{
  planoSelecionado: string;
  metodoPagamento: string;
  setMetodoPagamento: (value: string) => void;
  bandeiraSelecionada: string | null;
  setBandeiraSelecionada: (value: string | null) => void;
  onCancel: () => void;
}

export default function PaymentForm({
  planoSelecionado,
  metodoPagamento,
  setMetodoPagamento,
  bandeiraSelecionada,
  setBandeiraSelecionada,
  onCancel,
}: PaymentFormProps) {
  return(
    <div className="mt-10 max-w-3xl mx-auto bg-[#f0f0f0] p-6 rounded-xl shadow-2xl">
      <h3 className="text-2xl font-semibold mb-4 text-sky-900">
        Dados para pagamento - {planoSelecionado}
      </h3>
      <form action="" className="flex flex-col gap-4">
        <select 
          value={metodoPagamento}
          onChange={(e)=> setMetodoPagamento(e.target.value)}
          className="text-black border border-sky-800 rounded px-3 py-2"
        >
          <option>Cartão de crédito</option>
          <option>PIX</option>
        </select>

        <input
          type="text"
          placeholder="Nome completo"
          className="text-black border border-sky-800 rounded px-3 py-2 font-bold"
        />
        <input
          type="email"
          placeholder="Email"
          className="text-black border border-sky-800 rounded px-3 py-2 font-bold"
        />
        <input
          type="text"
          placeholder="CPF"
          className="text-black border border-sky-800 rounded px-3 py-2 font-bold"
        />

        { metodoPagamento === "Cartão de crédito" && (
          <>
            <div className="flex gap-4 justify-center items-center">
              {["Visa", "master", "amex", "elo", "alelo"].map((bandeira) => (
                <Image
                  key={bandeira}
                  src={`/bandeiras/${bandeira}.svg`}
                  alt={bandeira}
                  width={48}
                  height={32}
                  className={`text-black w-15 h-10 cursor-pointer rounded ${
                    bandeiraSelecionada === bandeira
                      ? "border-2 border-blue-500"
                      : ""
                  }`}
                  onClick={() => setBandeiraSelecionada(bandeira)}
                />
              ))}
            </div>

            <input
              type="text"
              placeholder="Número do cartão"
              className="text-black border border-sky-800 rounded px-3 py-2 font-bold"
            />
            <input
              type="text"
              placeholder="Nome no cartão"
              className="text-black border border-sky-800 rounded px-3 py-2 font-bold"
            />
            <input
              type="text"
              placeholder="CVV"
              className="text-black border border-sky-800 rounded px-3 py-2 font-bold"
            />
          </>
        )}
        {metodoPagamento === "Pix" && (
          <div className="flex justify-center items-center mt-2">
            <Image
              src="/images/qr_code.png"
              alt="QR Code do Pix"
              width={200}
              height={200}
              className="text-black rounded-lg"
            />
          </div>
        )}

        <div className="flex gap-4">
          <button
            type="submit"
            className="flex-1 bg-[#211e4b] text-white px-4 py-2 rounded hover:bg-cyan-900 font-semibold"
          >
            Confirmar Assinatura
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 text-md text-gray-800 hover:underline"
          >
            Cancelar
          </button>
        </div>
        
      </form>
    </div>
  );
}