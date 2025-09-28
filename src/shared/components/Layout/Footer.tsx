import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Seção 1: Logo e Slogan */}
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" className="text-xl font-bold text-white mb-2">
            Easy<span className="text-blue-500">Route</span>
          </Link>
          <p className="text-sm text-gray-400">
            A inteligência dos grafos na sua logística.
          </p>
        </div>

        {/* Seção 2: Links de Navegação */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-semibold text-white mb-3">Links Úteis</h3>
          <nav>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  Recursos
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  Contato
                </Link>
              </li>
              <li>
                <Link
                  href="/termos"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  Termos de Serviço
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Seção 3: Contato e Redes Sociais */}
        <div className="flex flex-col items-center md:items-end">
          <h3 className="font-semibold text-white mb-3">Conecte-se</h3>
          <div className="flex space-x-4 mb-4">
            <a
              href="https://github.com/seu-perfil"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-2xl hover:text-blue-400 transition-colors duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/seu-perfil"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-2xl hover:text-blue-400 transition-colors duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:contato@easyroute.com"
              aria-label="Email"
              className="text-2xl hover:text-blue-400 transition-colors duration-300"
            >
              <FaEnvelope />
            </a>
          </div>
          <p className="text-sm text-gray-400">contato@easyroute.com</p>
        </div>
      </div>

      {/* Direitos Autorais na parte inferior */}
      <div className="mt-8 pt-4 border-t border-gray-700 text-center">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} EasyRoute. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
