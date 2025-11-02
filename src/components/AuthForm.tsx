"use client";

import { LoginForm } from "./auth/LoginForm";
import { RegisterForm } from "./auth/RegisterForm";

export function AuthForm({ mode }: { mode: "login" | "register" }) {
  if (mode === "login") return <LoginForm />;
  return <RegisterForm />;
}


