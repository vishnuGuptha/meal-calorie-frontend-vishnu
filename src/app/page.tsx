import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Brand } from "@/components/Brand";

export default function Home() {
  return (
    <main className="relative isolate flex min-h-[calc(100vh-57px)] flex-col items-center justify-center overflow-hidden p-6">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-sky-100 via-violet-100 to-rose-100 dark:from-indigo-950/60 dark:via-fuchsia-950/40 dark:to-black" />
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <Brand size="text-4xl" />
        <p className="mt-2 text-sm text-muted-foreground">Nutrition simplified</p>
        <h1 className="mt-8 bg-gradient-to-r from-indigo-400 via-fuchsia-500 to-pink-500 bg-clip-text text-5xl font-extrabold leading-tight text-transparent sm:text-6xl">
          Track calories instantly.
        </h1>
        <p className="mt-4 max-w-2xl text-balance text-base text-muted-foreground sm:text-lg">
          Trustworthy data. USDA verified.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button asChild className="h-11 rounded-full bg-gradient-to-r from-sky-500 via-violet-500 to-fuchsia-500 px-6 text-white shadow-lg hover:opacity-90 dark:from-indigo-500 dark:via-fuchsia-500 dark:to-pink-500">
            <Link href="/register">Start tracking</Link>
          </Button>
          <Button asChild variant="outline" className="h-11 rounded-full px-6">
            <Link href="/login">Sign in</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
