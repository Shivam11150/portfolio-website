/*export default function Hero() {     //old hero.tsx
  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold">
        Product Manager building 0→1 B2B products
      </h1>

      <p className="mt-4 text-gray-600 max-w-2xl">
        I work at the intersection of product, technology, and execution.
      </p>
    </section>
  );
}
*/

"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-black">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-purple-950 opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 flex flex-col md:flex-row items-center justify-between gap-16 min-h-[90vh]">
         
        {/* Left: Text content */}
        <div className="w-full md:w-1/2 space-y-6">
        <p className="text-2xl md:text-3xl text-purple-400 font-medium leading-tight tracking-wide">
    Hello, I’m Shivam Somya
  </p>

  {/* Title + value (larger) */}
  <h1 className="text-md md:text-2xl lg:text-4xl font-bold leading-tight text-white">
    Product Manager &amp;
    <span className="block bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
      AI-First Development Partner
    </span>
  </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-md leading-relaxed">
            I work closely with developers, designers, and business teams —
             contributing across product development and ongoing maintenance to ensure smooth, real-world execution.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            {/* Primary CTA → Contact page */}
            <Link
              href="/contact"
              className="px-6 py-3 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-colors"
            >
              Contact me
            </Link>

            {/* Secondary CTA */}
            <Link
              href="/about"
              className="px-6 py-3 rounded-lg border-2 border-purple-500 text-purple-400 font-semibold hover:bg-purple-500 hover:text-white transition-colors"
            >
              Learn more
            </Link>
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md aspect-square">
            {/* Static soft glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl opacity-20 blur-xl" />

            <Image
              src="/images/myphoto.png"
              alt="Hero image"
              width={300}
              height={300}
              priority
              className="relative w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
