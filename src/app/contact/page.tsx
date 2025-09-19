import Form from "@/src/modules/contac/componets/Form";

export default function ContactUS() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Seção de Conteúdo Principal */}
      <main className="flex-grow bg-gray-50 py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Fale Conosco
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Estamos prontos para ajudar. Preencha o formulário ou use nossos
              contatos diretos para iniciar uma conversa.
            </p>
          </div>

          {/* Formulario */}
          <Form />
        </div>
      </main>
    </div>
  );
}
