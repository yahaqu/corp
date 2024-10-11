"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navLinks = [
  { name: "performance", href: "/performance" },
  { name: "reliability", href: "/reliability" },
  { name: "scale", href: "/scale" },
];

// const accountLinks = ["/", ...navLinks.map((link) => link.href)];

export default function Header() {
  const pathname = usePathname();

  // if (!accountLinks.includes(pathname)) {
  //   return null;
  // }

  return (
    <header className="absolute top-0 left-0 right-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link className="text-3xl font-bold text-white" href="/">
            Home
          </Link>
          <nav className="text-xl">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                className={clsx("p-4", {
                  "text-purple-500": pathname === link.href,
                })}
                href={link.href}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
