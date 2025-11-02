"use client";

import { CalorieForm } from "@/components/calorie/CalorieForm";
import { ResultsList } from "@/components/calorie/ResultsList";
import { useAuthStore } from "@/store/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const token = useAuthStore((s) => s.token);
  const router = useRouter();
  useEffect(() => {
    if (!token) router.replace("/login");
  }, [token, router]);
  return (
    <main className="container mx-auto max-w-2xl p-6 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Calorie Lookup</h1>
      </div>
      <CalorieForm />
      <ResultsList />
    </main>
  );
}


