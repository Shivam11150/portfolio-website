


"use client";


import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";


export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);


  const navItems = [
    { name: "Home", href: "/" },
    { name: "Work", href: "#work" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];


  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };


    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300
        ${
          isScrolled
         ? "bg-black/80 backdrop-blur-xl border-b border-purple-500/40 shadow-lg shadow-black/40"
         : "bg-black border-b border-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">


        {/* Logo */}
        <Link
          href="/"
          className="text-lg md:text-xl font-semibold text-white tracking-wide"
        >
          Shivam Somya<span className="text-purple-500">.</span>
        </Link>


        {/* Desktop Nav */}
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
                className={`relative text-sm font-medium transition-colors ${
                  isActive
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>


        {/* CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center px-5 py-2.5 rounded-xl
                     bg-purple-600 text-white text-sm font-semibold
                     hover:bg-purple-800
                     transition-colors duration-300"
        >
          Let’s Talk
        </Link>


        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white transition-transform duration-300"
         >
            <div className={`transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}> </div>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
             
        </button>
      </div>
      {/* Mobile Menu */}
{isOpen && (
  <div className="md:hidden absolute top-16 left-0 w-full bg-black border-t border-purple-500/30 z-40">
    <nav className="flex flex-col p-6 gap-6">
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          onClick={() => setIsOpen(false)}
          className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
        >
          {item.name}
        </Link>
      ))}


      <Link
        href="/contact"
        onClick={() => setIsOpen(false)}
        className="mt-4 inline-flex items-center justify-center px-5 py-2.5 rounded-xl
                   bg-purple-600 text-white text-sm font-semibold
                   hover:bg-purple-800 transition-colors duration-300"
      >
        Let’s Talk
      </Link>
    </nav>
  </div>
)}
    </header>
  );
}


/* existing navbar unrespoonsive . 
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
    <header className="sticky top-0 z-50 bg-black/70 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
     
        <Link
          href="/"
          className="text-lg font-semibold text-white tracking-wide"
        >
          Shivam Somya<span className="text-purple-500">.</span>
        </Link>

        
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
                className={`relative text-sm font-medium transition-colors ${
                  isActive
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {item.name}

                
                {isActive && (
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-purple-500" />
                )}
              </Link>
            );
          })}
        </nav>

       
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center px-5 py-2.5 rounded-xl
                     bg-purple-600 text-white text-sm font-semibold
                     hover:bg-purple-700 hover:shadow-[0_0_20px_rgba(168,85,247,0.35)]
                     transition-all duration-200"
        >
          Let’s Talk
        </Link>
      </div>
    </header>
  );
}
*/

/*
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
        
       
        <Link
          href="/"
          className="text-lg font-semibold text-white hover:text-primary transition"
        >
          Shivam<span className="text-primary">.</span>
        </Link>

       
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

        
        <Link
          href="/contact"
          className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-semibold transition"
        >
          Let’s Talk
        </Link>
      </div>
    </header>
  );
}*/


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
