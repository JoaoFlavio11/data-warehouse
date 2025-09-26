"use client";

import Link from "next/link";
import { Alert, AlertDescription } from "@/src/shared/components/ui/alert";
import { useLogin } from "@/src/modules/auth/login/hooks/login";

export function Form() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    feedback,
    handleLogin,
    loading,
  } = useLogin();

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
            <AlertDescription>{feedback.message}</AlertDescription>
          </Alert>
        )}
      </div>
    </section>
  );
}