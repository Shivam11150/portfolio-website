
"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-black"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-purple-950 opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6 py-8 md:py-32 flex flex-col md:flex-row items-center justify-between gap-20 min-h-[90vh]">
        
        {/* LEFT: TEXT */}
        <div className="w-full md:w-1/2 space-y-7">
          <p className="text-xl md:text-2xl text-purple-400 font-medium tracking-wide">
            Hello, I’m Shivam Somya
          </p>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
            Product Manager &{" "}
            <span className="block bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              AI-First Development Partner
            </span>
          </h1>

          <p className="text-base md:text-lg text-gray-300 max-w-xl leading-relaxed">
            I work closely with developers, designers, and business teams —
            contributing across product development and ongoing maintenance
            to ensure smooth, real-world execution.
          </p>

          <div className="flex flex-wrap items-center gap-5 pt-6">
            {/* Primary CTA */}
            <Link
              href="/contact"
              className="px-7 py-3.5 rounded-xl bg-purple-600 text-white font-semibold
                         hover:bg-purple-700 hover:
                         active:scale-95 
                         active:bg-purple-500/20
                         transition-all duration-200"
            >
              Let's Talk
            </Link>

            {/* Secondary CTA */}
            <Link
              href="/about"
              className="px-7 py-3.5 rounded-xl border border-purple-500/60
                         text-purple-400 font-semibold
                         hover:bg-purple-500/10 hover:text-white
                         active:scale-95 
                         active:bg-purple-500/20
                         transition-all duration-200"
            >
              Learn more
            </Link>
          </div>
        </div>

        {/* RIGHT: IMAGE */}
        <div className="w-full md:w-1/2 flex justify-end md:pr-6 md:justify-items-start">
          <div className="relative w-full max-w-sm">
            
            {/* Controlled glow */}
            <div className="absolute inset-0 bg-purple-700/30 rounded-3xl blur-2xl" />

            <Image
              src="/images/heroimage.png"
              alt="My workingspace"
              width={1200}
              height={1600}
              quality ={100}
              priority
              className="relative w-full h-auto object-contain 
              rounded-3xl border border-purple-500/20"
            />
          </div>
        </div>
      </div>
      <div className="relative max-w-7xl mx-auto px-3 py-4 md:py-6">
        <div className="max-w-3xl">
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed ">
            I believe good products are built through clear thinking, team collaboration, and thoughtful execution.
          </p>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-400 leading-relaxed">
            Here are a few examples of how I apply that in real work.
          </p>
        </div>
      </div>
    </section>
  );
}

/* previous  code 
"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-black">
    

      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-purple-950 opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 flex flex-col md:flex-row items-center justify-between gap-16 min-h-[90vh]">
         
   
        <div className="w-full md:w-1/2 space-y-6">
        <p className="text-2xl md:text-3xl text-purple-400 font-medium leading-tight tracking-wide">
    Hello, I’m Shivam Somya
  </p>

 
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
            
            <Link
              href="/contact"
              className="px-6 py-3 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-colors"
            >
              Contact me
            </Link>

            
            <Link
              href="/about"
              className="px-6 py-3 rounded-lg border-2 border-purple-500 text-purple-400 font-semibold hover:bg-purple-500 hover:text-white transition-colors"
            >
              Learn more
            </Link>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md aspect-square">
           
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
} */
