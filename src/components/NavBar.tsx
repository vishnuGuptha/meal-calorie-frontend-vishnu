"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store/auth";
import { useRouter } from "next/navigation";
import { Brand } from "@/components/Brand";

export function NavBar() {
  const router = useRouter();
  const { token, logout } = useAuthStore();

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/70 backdrop-blur">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <Brand size="text-xl" />
        <div className="flex items-center gap-2">
          <ThemeToggle />
          {token ? (
            <Button
              variant="outline"
              onClick={() => {
                logout();
                router.push("/");
              }}
            >
              Logout
            </Button>
          ) : (
            <Button asChild>
              <Link href="/login">Login</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}


