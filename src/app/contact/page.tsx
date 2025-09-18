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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 bg-white p-8 rounded-lg shadow-md max-w-5xl mx-auto">
            {/* Bloco do Formulário */}
            <div className="lg:order-2">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Envie uma Mensagem
              </h2>
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="seu.email@exemplo.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Escreva sua mensagem aqui..."
                  ></textarea>
                </div>

                <div className="flex justify-center lg:justify-start">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-colors duration-300"
                  >
                    Enviar Mensagem
                  </button>
                </div>
              </form>
            </div>

            {/* Bloco de Informações de Contato */}
            <div className="lg:order-1 flex flex-col justify-center text-center lg:text-left">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-blue-600 mb-2">Email</h3>
                <p className="text-gray-700">contato@easyroute.com</p>
              </div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-blue-600 mb-2">
                  Telefone
                </h3>
                <p className="text-gray-700">+55 (11) 99999-9999</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-600 mb-2">
                  Endereço
                </h3>
                <p className="text-gray-700">
                  Av. Logística Fácil, 123
                  <br />
                  São Paulo, SP - Brasil
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
