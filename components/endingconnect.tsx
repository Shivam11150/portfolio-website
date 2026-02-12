import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function EndingConnect() {
  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="max-w-5xl mx-auto px-6">
        {/* Main Card */}
        <article className="rounded-2xl border border-white/10 bg-gradient-to-br from-purple-950/10 to-transparent backdrop-blur p-8 md:p-12 text-center space-y-8">
          
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Thanks for taking the time to explore my <span className="text-purple-400">work</span>.
            </h2>
            
            <div className="space-y-4 max-w-2xl mx-auto">
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                If you're a recruiter, founder, collaborator, or fellow product thinker — I'd love to connect.
              </p>
              
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                I'm always open to discussing product ideas, solving real business problems, or contributing to impactful teams.
              </p>
            </div>

            <p className="text-xl md:text-2xl font-semibold text-purple-400">
              Let's start a conversation.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-semibold text-lg transition-all duration-200"
            >
              Get in Touch
              <ArrowRight size={20} />
            </Link>
          </div>
        </article>
      </div>
    </section>
  )
}
