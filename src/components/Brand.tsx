import Link from "next/link";

export function Brand({ href = "/", size = "text-2xl" }: { href?: string; size?: string }) {
  return (
    <Link href={href} className={`inline-flex items-center gap-2 font-semibold ${size}`}>
      <span className="inline-block h-6 w-6 rounded-[0.8rem] bg-gradient-to-br from-sky-500 via-violet-500 to-fuchsia-500 shadow-md dark:from-indigo-400 dark:via-fuchsia-500 dark:to-pink-500" />
      <span className="bg-gradient-to-r from-sky-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent dark:from-indigo-400 dark:via-fuchsia-500 dark:to-pink-500">
        CalorEase
      </span>
    </Link>
  );
}


