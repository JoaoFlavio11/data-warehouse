"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Alert } from "@/src/shared/components/ui/alert";
import { useRegister } from "@/src/modules/auth/create-account/hooks/create-account";

export default function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const { registerUser, loading, feedback } = useRegister();

  const handleCreateAccount = async (e: React.FormEvent) => {
    e.preventDefault();
    const user = await registerUser(email, password, confirmPassword);
    if (user) {
      setTimeout(() => router.push("/"), 1500);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center text-blue-600 font-bold mx-auto px-auto">
          Criando sua conta...
        </div>
      </div>
    );
  }

  return (
    <section className="bg-gray-100 py-20 px-4">
      <div className="container mx-auto max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Crie sua conta
        </h2>
        <form onSubmit={handleCreateAccount}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              id="email"
              type="email"
              placeholder="seuemail@exemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
              Senha
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              id="password"
              type="password"
              placeholder="Crie uma senha forte"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="confirmPassword">
              Confirmar Senha
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              id="confirmPassword"
              type="password"
              placeholder="Confirme sua senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Criar conta
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          Já tem uma conta?{" "}
          <Link href="/login" className="text-blue-600 font-bold hover:underline">
            Faça login aqui!
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
