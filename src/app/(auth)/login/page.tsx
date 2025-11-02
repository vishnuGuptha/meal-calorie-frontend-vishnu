"use client";

import { LoginForm } from "@/components/auth/LoginForm";
import { useAuthStore } from "@/store/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
  const token = useAuthStore((s) => s.token);
  const router = useRouter();
  useEffect(() => {
    if (token) router.replace("/dashboard");
  }, [token, router]);
  return (
    <main className="relative isolate flex min-h-[calc(100vh-57px)] items-center justify-center p-6">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-sky-100 via-violet-100 to-rose-100 dark:from-indigo-950/60 dark:via-fuchsia-950/40 dark:to-black" />
      <div className="mx-auto w-full max-w-lg rounded-3xl border bg-background/60 p-8 shadow-2xl backdrop-blur">
        <h1 className="mb-2 text-center text-3xl font-bold">Welcome back</h1>
        <p className="mb-8 text-center text-sm text-muted-foreground">Sign in to continue your nutrition journey</p>
        <LoginForm />
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Don&apos;t have an account? <a href="/register" className="underline">Sign up</a>
        </p>
      </div>
    </main>
  );
}


