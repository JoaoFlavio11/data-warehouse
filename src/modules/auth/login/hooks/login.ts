//@/src/modules/auth/login/hooks/login.ts
/* eslint-disable @typescript-eslint/no-unused-vars */
import { auth } from "@/src/services/firebase-config";
import { FirebaseError } from "firebase/app";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

export const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [feedback, setFeedback] = useState<
    { type: "error" | "success"; message: string } | null
  >(null);
  const router = useRouter();

  const [signInWithEmailAndPassword, user, loading] =
    useSignInWithEmailAndPassword(auth);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setFeedback(null);

    try {
      const res = await signInWithEmailAndPassword(email, password);
      if (res) {
        setFeedback({
          type: "success",
          message: "Login realizado com sucesso! Redirecionando...",
        });
        setTimeout(() => router.push("/dashboard"), 1500);
      }
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        setFeedback({ type: "error", message: error.message });
      } else {
        setFeedback({
          type: "error",
          message: "Ocorreu um erro desconhecido.",
        });
      }
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    feedback,
    handleLogin,
    loading,
  };
};