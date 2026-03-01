import Link from "next/link";
import { Typewriter } from "./components/Typewriter";

export default function Home() {
  return (
    <div
      className="flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center px-6"
      style={{ backgroundColor: "#F6F2E7", color: "#2D1B4E" }}
    >
      <h1
        className="text-center text-4xl font-bold leading-tight sm:text-5xl md:text-6xl"
        style={{ fontFamily: '"Times New Roman", Times, serif' }}
      >
        Built for <Typewriter />
      </h1>

      <p className="mt-5 text-center text-lg opacity-70">
        Your content shouldn&apos;t work hard for someone else
      </p>

      <Link
        href="/product"
        className="mt-10 inline-block rounded-lg px-10 py-4 text-sm font-semibold uppercase tracking-widest text-white transition-opacity hover:opacity-90"
        style={{ backgroundColor: "#2D1B4E" }}
      >
        Find out what we have to offer
      </Link>
    </div>
  );
}
