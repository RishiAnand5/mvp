"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/product", label: "Product" },
  { href: "/pricing", label: "Pricing" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
      <Link
        href="/"
        className="text-2xl font-bold tracking-tight transition-opacity hover:opacity-60 sm:text-3xl"
        style={{ color: "#2D1B4E", fontFamily: '"Times New Roman", Times, serif' }}
      >
        Allanki
      </Link>
      <ul className="flex gap-6 sm:gap-8 text-sm font-medium">
        {navLinks.map(({ href, label }) => {
          const isActive = pathname === href;
          return (
            <li key={href}>
              <Link
                href={href}
                className={`transition-colors ${
                  isActive
                    ? "underline decoration-2 underline-offset-4"
                    : "hover:underline decoration-2 underline-offset-4"
                }`}
                style={{ color: "#2D1B4E", textDecorationColor: "#2D1B4E" }}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
