"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navLinks = [
  {
    name: "About",
    href: "/dashboard/about",
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
  },
];

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [count, setCount] = useState(0);
  const pathname = usePathname();
  console.log(pathname);
  // const isActive = (path: string) => {
  //   return pathname === path ? "text-purple-500" : "";
  // };

  return (
    <div className="border-2 border-dashed border-black p-4 w-1/2 mx-auto">
      <div className="flex gap-4 font-bold text-lg mb-4">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            className={clsx({
              "text-purple-500": pathname === link.href,
              "text-black": pathname !== link.href,
            })}
            href={link.href}
          >
            {link.name}
          </Link>
        ))}
      </div>
      <h2>Dashboard Layout {count}</h2>
      <button
        className="bg-black text-white  p-2 my-4 rounded-md"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      {children}
    </div>
  );
}
