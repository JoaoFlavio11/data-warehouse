"use client";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/src/firebase/firebase-config";

export default function TestRegister() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleRegister = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setMsg("✅ Usuário criado: " + userCredential.user.email);
    } catch (error: any) {
      setMsg("❌ Erro: " + error.message);
    }
  };

  return (
    <div className="p-10">
      <h1>Teste Firebase Register</h1>
      <input
        className="border p-2 text-black"
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="border p-2 text-black ml-2"
        type="password"
        placeholder="Senha"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="bg-blue-500 text-white p-2 ml-2" onClick={handleRegister}>
        Criar usuário
      </button>
      <p className="mt-4">{msg}</p>
    </div>
  );
}
