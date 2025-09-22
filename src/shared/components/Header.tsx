import Link from "next/link";

export function Header() {
  return (
    <header className="bg-white sticky top-0 z-50 shadow-md">
      <nav className="container mx-auto flex justify-between items-center p-4">
        {/* Logo e Nome do App */}
        <div className="flex items-center">
          <Link
            href="/"
            className="text-xl md:text-2xl font-bold font-sans text-gray-800"
          >
            Easy<span className="text-blue-600">Route</span>
          </Link>
          <p className="hidden md:block ml-4 text-sm text-gray-500 font-medium">
            A inteligência dos grafos na sua logística.
          </p>
        </div>

        {/* Links de Navegação */}
        <div className="flex items-center space-x-6">
          <Link
            href="/features"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
          >
            Recursos
          </Link>
          <Link
            href="/about"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
          >
            Sobre
          </Link>
          <Link
            href="/contact"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
          >
            Contato
          </Link>

          {/* Botões de Ação */}
          <div className="flex items-center space-x-3">
            <Link
              href="/create-account"
              className="bg-blue-600 text-white py-2 px-5 rounded-full text-md font-semibold shadow-md hover:bg-[#f0f0f0] hover:text-blue-800   transition-all duration-300"
            >
             Comece Agora
            </Link>

            <Link
              href="/login"
              className=" border border-blue-600 text-blue-600 py-2 px-5 rounded-full text-md font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300"
            >
              Fazer Login
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
