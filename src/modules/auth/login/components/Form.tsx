/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/src/firebase/firebase-config";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FirebaseError } from "firebase/app";
import { Alert } from "@/src/shared/components/ui/alert";

export function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [feedback, setFeedback] = useState<{ type: "error" | "success"; message: string } | null>(null);
  const router = useRouter();

  const [signInWithEmailAndPassword, user, loading] =
    useSignInWithEmailAndPassword(auth);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setFeedback(null);

    try {
      const res = await signInWithEmailAndPassword(email, password);
      if (res) {
        setFeedback({ type: "success", message: "Login realizado com sucesso! Redirecionando..." });
        setTimeout(() => router.push("/"), 1500);
      }
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        setFeedback({ type: "error", message: error.message });
      } else {
        setFeedback({ type: "error", message: "Ocorreu um erro desconhecido." });
      }
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center text-blue-600 font-bold mx-auto px-auto">
          Carregando...
        </div>
      </div>
    );
  }

  return (
    <section className="bg-gray-100 py-20 px-4">
      <div className="container mx-auto max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Entrar na sua conta
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              E-mail:
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              id="email"
              type="email"
              placeholder="Seu e-mail aqui:"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Senha:
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              id="password"
              type="password"
              placeholder="Digite sua senha:"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Entrar
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          Ainda não tem conta?{" "}
          <Link href={"/create-account"} className="text-blue-600 font-bold hover:underline">
            Crie sua conta aqui.
          </Link>
        </p>

        {feedback && (
          <Alert
            className={`mt-4 p-4 rounded-lg font-semibold text-white ${
              feedback.type === "error" ? "bg-red-500" : "bg-green-500"
            }`}
          >
            {feedback.message}
          </Alert>
        )}
      </div>
    </section>
  );
}
