
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Work", href: "#work" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-borderSubtle">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo / Name */}
        <Link
          href="/"
          className="text-lg font-semibold text-white hover:text-primary transition"
        >
          Shivam<span className="text-primary">.</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition ${
                  isActive
                    ? "text-primary"
                    : "text-textMuted hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-semibold transition"
        >
          Let’s Talk
        </Link>
      </div>
    </header>
  );
}


/*
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-background text-textMain">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between">
        <Link href="/" className="font-semibold">
          Shivam
        </Link>

        <div className="space-x-6 text-sm">
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}*/
