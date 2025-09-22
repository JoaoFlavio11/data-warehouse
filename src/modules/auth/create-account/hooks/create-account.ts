"use client";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/src/firebase/firebase-config";
import { FirebaseError } from "firebase/app";

type Feedback = { type: "error" | "success"; message: string } | null;

export function useRegister() {
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<Feedback>(null);

  const registerUser = async (email: string, password: string, confirmPassword: string) => {
    setFeedback(null);

    if (password !== confirmPassword) {
      setFeedback({ type: "error", message: "As senhas não coincidem." });
      return null;
    }

    if (password.length < 6) {
      setFeedback({ type: "error", message: "A senha deve ter pelo menos 6 caracteres." });
      return null;
    }

    try {
      setLoading(true);
      const res = await createUserWithEmailAndPassword(auth, email, password);
      setFeedback({ type: "success", message: "Conta criada com sucesso! Redirecionando..." });
      return res.user;
    } catch (error) {
      if (error instanceof FirebaseError) {
        setFeedback({ type: "error", message: error.message });
      } else {
        setFeedback({ type: "error", message: "Ocorreu um erro desconhecido." });
      }
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { registerUser, loading, feedback };
}
