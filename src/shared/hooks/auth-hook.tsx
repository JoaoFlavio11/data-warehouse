"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/src/services/firebase-config";
import React from 'react';

// Componente simples de loading
const LoadingComponent = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <p className="text-xl font-semibold text-gray-700">Carregando...</p>
  </div>
);

// O hook useAuthRedirect foi movido para este arquivo para resolver o erro de importação.
const useAuthRedirect = () => {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();
  const [isAuthChecked, setIsAuthChecked] = useState(false);

  useEffect(() => {
    if (!loading) {
      if (!user) {
        // sem usuário, volta para a página de login
        router.push('/login');
      } else {
        // retorna a validação verdadeira
        setIsAuthChecked(true);
      }
    }
  }, [user, loading, router]);

  return { user, loading: loading || !isAuthChecked, error };
};

interface AuthProtectorProps {
  children: React.ReactNode;
}

export const AuthProtector: React.FC<AuthProtectorProps> = ({ children }) => {
  const { user, loading } = useAuthRedirect();

  // Se estiver carregando, mostra a tela de loading.
  if (loading) {
    return <LoadingComponent />;
  }

  // Se o usuário estiver autenticado, renderiza o conteúdo da página.
  if (user) {
    return <>{children}</>;
  }

  // Se o usuário não estiver autenticado, o hook já iniciou o redirecionamento.
  return null;
};
