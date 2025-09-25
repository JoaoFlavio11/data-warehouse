"use client";

import Link from "next/link";
import { FaUserPlus, FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/src/services/firebase-config";
import { useState } from "react";

export function Header() {
  const [user] = useAuthState(auth);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };

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
            href="/payments"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
          >
            Planos
          </Link>

          {/* Botões de Ação */}
          <div className="flex items-center space-x-4 relative">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-300"
                >
                  <FaUserCircle className="text-3xl" />
                </button>

                {menuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                    <div className="px-4 py-2 text-sm text-gray-700 border-b">
                      {user.email}
                    </div>
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                    >
                      <FaSignOutAlt className="mr-2" />
                      Sair
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link
                  href="/create-account"
                  className="flex items-center space-x-2 bg-blue-600 text-white py-2 px-5 rounded-full text-md font-semibold shadow-md hover:bg-[#f0f0f0] hover:text-blue-800 transition-all duration-300"
                >
                  <FaUserPlus className="text-xl" />
                  <span>Criar conta</span>
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
