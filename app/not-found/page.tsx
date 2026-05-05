import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black"> 
      <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
        404 - Page Not Found
      </h1>
      <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="mt-4 inline-block rounded bg-foreground px-5 py-2 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
      >
        Go back to Home
      </Link>
    </div>
  );
}