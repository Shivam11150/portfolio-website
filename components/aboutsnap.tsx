'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

  import { useState } from 'react'

export default function AboutSnap() {

 
  const [aiReply, setAiReply] = useState("")
  const [loading, setLoading] = useState(false)

 const testAI = async () => {
    try {
      setLoading(true)

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: "Hello AI, introduce yourself." }),
      })

      const data = await res.json()
      setAiReply(data.reply)

    } catch (error) {
      console.error("API Error:", error)
      setAiReply("Something went wrong.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-8 md:py-5 bg-black">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
             <span className="text-white">About </span><span className="text-purple-400">Me</span>
          </h2>
        </div>

        {/* About Content Card */}
        <article className="rounded-2xl border border-white/10 bg-gradient-to-br from-purple-950/10 to-transparent p-8 md:p-10">
          
          {/* Short Bio */}
          <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl">
            I'm a <span className="text-purple-400 font-semibold">Product Manager at Macleo Technology</span>, a B2B SaaS startup working on building and scaling real-world products used by businesses. I operate at the intersection of product strategy, execution, and user insight — turning complex problems into simple, usable solutions.
          </p>

          {/* CTA */}
          <div className="flex justify-center mt-6">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-purple-900/30 text-purple-400 hover:bg-purple-950/50 
              active:scale-95 
              active:bg-purple-500/20
              transition-colors font-semibold"
            >
              Know more  
              <ArrowRight size={18} />
            </Link>

               {/* 🔥 AI Test Button */}
            <button
              onClick={testAI}
              className="px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 active:scale-95 transition-all text-white font-semibold"
            >
            try ai
            </button>

          </div>
 {/* 🔥 AI Reply Output */}
          {aiReply && (
            <div className="mt-6 p-4 bg-purple-950/30 border border-purple-500/20 rounded-lg text-gray-300">
              <p className="text-sm text-purple-400 mb-2">AI Reply:</p>
              <p>{aiReply}</p>
            </div>
          )}
          
        </article>
      </div>

    </section>
  )
}
