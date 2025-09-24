import Link from "next/link";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";

export function LoginSection() {
  return (
    <section className="bg-gray-100 py-15 px-4">
      <div className="container mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-105">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Pronto para revolucionar sua logística?
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-600">
            Acesse sua conta ou crie uma nova em segundos e comece a otimizar a rota do seu galpão.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link
              href="/login"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-colors duration-300 hover:from-blue-700 hover:to-blue-900"
            >
              <FaSignInAlt className="text-xl" />
              Entrar
            </Link>
            <Link
              href="/create-account"
              className="flex items-center justify-center gap-2 bg-white border-2 border-blue-600 text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg transition-colors duration-300 hover:bg-gray-100"
            >
              <FaUserPlus className="text-xl" />
              Criar Conta
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}