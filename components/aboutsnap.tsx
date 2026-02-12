'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function AboutSnap() {
  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            About <span className="text-purple-400">Me</span>
          </h2>
        </div>

        {/* About Content Card */}
        <article className="rounded-2xl border border-white/10 bg-gradient-to-br from-purple-950/10 to-transparent p-8 md:p-10">
          
          {/* Short Bio */}
          <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl">
            I'm a <span className="text-purple-400 font-semibold">Product Manager at Macleo Technology</span>, a B2B SaaS startup working on building and scaling real-world products used by businesses. I operate at the intersection of product strategy, execution, and user insight — turning complex problems into simple, usable solutions.
          </p>

          {/* CTA */}
          <div className="mt-6">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-purple-900/30 text-purple-400 hover:bg-purple-950/25 transition-colors font-semibold"
            >
              Know more  
              <ArrowRight size={18} />
            </Link>
          </div>
        </article>
      </div>
    </section>
  )
}
