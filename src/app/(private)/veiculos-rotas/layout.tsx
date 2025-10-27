"use client";

import { auth } from "@/src/services/firebase/firebase-config";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

export default function VeiculosLayout({ children }: { children: ReactNode }) {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.replace("/login");
      } else {
        setChecked(true);
      }
    }
  }, [user, loading, router]);

  if (loading || !checked) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-xl font-semibold text-gray-700">Carregando...</p>
      </div>
    );
  }

  return <>{children}</>;
}
