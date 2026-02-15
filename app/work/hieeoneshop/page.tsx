'use client'

import { ArrowRight, Zap, Users, Target, TrendingUp, Lightbulb, MessageSquare } from 'lucide-react'
import Link from 'next/link'

export default function CaseStudy() {
  return (
    <div className="min-h-screen bg-black text-white">
    

      {/* Hero Section */}
      <section className="pt-4 sm:pt-8 md:pt-24 pb-12 sm:pb-16 px-5 sm:px-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <span className="inline-block bg-purple-600/20 border border-purple-500/50 text-purple-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Case Study
          </span>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight">
            HieeOneShop
            <br />
            <span className="text-gray-400">B2B Business Chat & Commerce App</span>
          </h1>
            <Link
    href="https:hiee.one"   // Replace with actual product URL
    target="_blank"
    className="inline-flex items-center gap-2
               text-purple-400 font-medium
               hover:text-purple-300
               transition-colors duration-300 mb-6"
  >
    View this product
    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
  </Link>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed mb-8">
            Building a unified platform that simplifies operations for small and mid-sized businesses by combining product catalogs, order management, and business communication into one place.
          </p>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="border border-white/10 rounded-lg p-6 bg-gradient-to-br from-white/5 to-transparent">
            <p className="text-gray-400 text-sm mb-2">Role</p>
            <p className="text-2xl font-bold">Product Manager</p>
          </div>
          <div className="border border-white/10 rounded-lg p-6 bg-gradient-to-br from-white/5 to-transparent">
            <p className="text-gray-400 text-sm mb-2">Stage</p>
            <p className="text-2xl font-bold">0 → MVP → Scale</p>
          </div>
          <div className="border border-white/10 rounded-lg p-6 bg-gradient-to-br from-white/5 to-transparent">
            <p className="text-gray-400 text-sm mb-2">Play store Rating</p>
            <div className="flex items-center gap-2">
              <p className="text-2xl font-bold">4.7</p>
              <span className="text-yellow-400">★</span>
            </div>
          </div>
          <div className="border border-white/10 rounded-lg p-6 bg-gradient-to-br from-white/5 to-transparent">
            <p className="text-gray-400 text-sm mb-2">Businesses with Paid clients</p>
            <p className="text-2xl font-bold">1500+</p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="px-6 max-w-6xl mx-auto py-16 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-12">Overview</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-purple-400 font-semibold text-sm mb-4 uppercase tracking-wide">The Problem</h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Small and mid-sized businesses were struggling with fragmented tools—WhatsApp for communication, manual spreadsheets for inventory, and basic software with no integration. This led to missed enquiries, poor visibility, and inefficient operations.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">•</span>
                <span className="text-gray-300">Managing product catalogs and orders manually</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">•</span>
                <span className="text-gray-300">Scattered customer and vendor communication</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">•</span>
                <span className="text-gray-300">No simple way to showcase products online</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-purple-400 font-semibold text-sm mb-4 uppercase tracking-wide">The Solution</h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              HieeOneShop is a unified B2B platform that brings everything together—product catalogs, order automation, basic website functionality, and business communication—all in one place designed for non-technical users.
            </p>
            <div className="bg-gradient-to-br from-purple-600/20 to-transparent border border-purple-500/30 rounded-lg p-6">
              <p className="text-gray-300 italic">
                "Simplify day-to-day operations while keeping the product easy to adopt for business owners and retailers managing products and customers daily."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* My Involvement */}
      <section className="px-6 max-w-6xl mx-auto py-16 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-12">My Involvement</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex gap-4">
            <Users className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Core Product Team</h3>
              <p className="text-gray-300">Part of the core product team from 0→1 through MVP launch to scaling phase, working end-to-end across all product development stages.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Zap className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Cross-functional Collaboration</h3>
              <p className="text-gray-300">Worked closely with designers and engineers to translate product requirements into clear flows and executable sprint plans.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <TrendingUp className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Launch & Iteration</h3>
              <p className="text-gray-300">Supported MVP launch, early user onboarding, and initial GTM execution. Actively iterating on user feedback and usage insights.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <MessageSquare className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Go-to-Market Support</h3>
              <p className="text-gray-300">Worked with business, sales, and BSP partners to support onboarding, distribution, and smoother market execution.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="px-6 max-w-6xl mx-auto py-16 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-12">Approach & Decision-Making</h2>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="w-2 h-2 rounded-full bg-purple-400 mt-3 flex-shrink-0"></div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Clear User Understanding</h3>
              <p className="text-gray-300">Started by clearly defining who the user is and what problems actually matter in their day-to-day work, rather than building for assumptions.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-2 h-2 rounded-full bg-purple-400 mt-3 flex-shrink-0"></div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Simple, Focused Flows</h3>
              <p className="text-gray-300">Broke large requirements into simple, usable product flows instead of building feature-heavy solutions that overwhelm users.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-2 h-2 rounded-full bg-purple-400 mt-3 flex-shrink-0"></div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Early MVP Validation</h3>
              <p className="text-gray-300">Shipped a focused MVP early to validate usage and learnings over waiting for a "perfect" release with all features.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-2 h-2 rounded-full bg-purple-400 mt-3 flex-shrink-0"></div>
            <div>
              <h3 className="text-xl font-semibold mb-2">User-Driven Iteration</h3>
              <p className="text-gray-300">Used early user feedback and real usage patterns to refine flows and improve adoption rather than pushing pre-planned features.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Execution Section */}
      <section className="px-6 max-w-6xl mx-auto py-16 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-12">Execution & Working Style</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-white/10 rounded-lg p-8 bg-gradient-to-br from-white/5 to-transparent">
            <Target className="w-10 h-10 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Requirements to Execution</h3>
            <p className="text-gray-300">Gathered business requirements through direct discussions with stakeholders and early users, translating them into clear BRDs and FRDs suited for fast-moving teams.</p>
          </div>
          <div className="border border-white/10 rounded-lg p-8 bg-gradient-to-br from-white/5 to-transparent">
            <Lightbulb className="w-10 h-10 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Visual Alignment</h3>
            <p className="text-gray-300">Defined product flows and user journeys visually to align everyone early, using simple diagrams and prototypes to reduce confusion during development.</p>
          </div>
        </div>
        <div className="mt-8 border border-white/10 rounded-lg p-8 bg-gradient-to-br from-white/5 to-transparent">
          <TrendingUp className="w-10 h-10 text-purple-400 mb-4" />
          <h3 className="text-xl font-semibold mb-3">Sprint Planning & Delivery</h3>
          <p className="text-gray-300">Planned and tracked sprints using lightweight agile tools, keeping delivery focused while adapting quickly to changes. Supported final releases by coordinating fixes, verifying readiness, and ensuring smooth shipment of updates.</p>
        </div>
      </section>

      {/* Key Deliverables */}
      <section className="px-6 max-w-6xl mx-auto py-16 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-12">Key Deliverables</h2>
        <div className="space-y-6">
          <div className="border border-purple-500/50 rounded-lg p-8 bg-gradient-to-r from-purple-600/10 via-transparent to-transparent">
            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2 text-white">Product Discovery & Prioritization</h3>
                <p className="text-gray-300 text-lg">Identified core user problems and business constraints, then prioritized solutions that could be built and adopted quickly. This foundation guided all downstream decisions and sprint planning.</p>
              </div>
            </div>
          </div>
          <div className="border border-purple-500/50 rounded-lg p-8 bg-gradient-to-r from-purple-600/10 via-transparent to-transparent">
            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2 text-white">Design-Engineering Alignment</h3>
                <p className="text-gray-300 text-lg">Translated requirements into clear flows, bridged gaps between design and development teams, and supported sprint planning and execution to keep teams in sync.</p>
              </div>
            </div>
          </div>
          <div className="border border-purple-500/50 rounded-lg p-8 bg-gradient-to-r from-purple-600/10 via-transparent to-transparent">
            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2 text-white">MVP Launch & Scaling</h3>
                <p className="text-gray-300 text-lg">Led the MVP launch with real users and GTM execution, then iterated based on feedback with continuous scaling and improvement in progress, achieving 4.7-star ratings from early adopters.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="px-6 max-w-6xl mx-auto py-16 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-12">Outcomes & Current State</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="border border-white/10 rounded-lg p-8 bg-gradient-to-br from-white/5 to-transparent text-center">
            <p className="text-purple-400 text-sm font-semibold uppercase tracking-wide mb-3">Product Launch</p>
            <p className="text-3xl font-bold mb-2">Live</p>
            <p className="text-gray-300">Successfully launched with real businesses and paid adoption</p>
          </div>
          <div className="border border-white/10 rounded-lg p-8 bg-gradient-to-br from-white/5 to-transparent text-center">
            <p className="text-purple-400 text-sm font-semibold uppercase tracking-wide mb-3">App Rating</p>
            <p className="text-3xl font-bold mb-2">4.5 ★</p>
            <p className="text-gray-300">From initial Play Store users</p>
          </div>
          <div className="border border-white/10 rounded-lg p-8 bg-gradient-to-br from-white/5 to-transparent text-center">
            <p className="text-purple-400 text-sm font-semibold uppercase tracking-wide mb-3">Focus</p>
            <p className="text-3xl font-bold mb-2">Scale</p>
            <p className="text-gray-300">Active scaling and iteration phase</p>
          </div>
        </div>
        <div className="border border-white/10 rounded-lg p-8 bg-gradient-to-br from-white/5 to-transparent">
          <h3 className="text-xl font-semibold mb-4">Key Metrics Being Tracked</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center gap-2"><span className="text-purple-400">→</span> Daily Active Users (DAU) and Monthly Active Users (MAU)</li>
            <li className="flex items-center gap-2"><span className="text-purple-400">→</span> User engagement patterns and feature adoption</li>
            <li className="flex items-center gap-2"><span className="text-purple-400">→</span> Go-to-market effectiveness with sales and distribution teams</li>
          </ul>
        </div>
      </section>

      {/* Learnings Section */}
      <section className="px-6 max-w-6xl mx-auto py-16 border-t border-white/10">
        <h2 className="text-4xl font-bold mb-12">Learnings & Reflections</h2>
        <div className="space-y-8">
          <div className="flex gap-6">
            <div className="text-5xl font-bold text-purple-400 opacity-20">01</div>
            <div>
              <h3 className="text-2xl font-semibold mb-3">Simplicity Over Features</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Early users value simplicity and clarity more than feature depth, especially in business tools meant for daily use by non-technical operators. A focused, easy-to-understand product beats a feature-rich one that requires training.
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="text-5xl font-bold text-purple-400 opacity-20">02</div>
            <div>
              <h3 className="text-2xl font-semibold mb-3">MVP Validation Is Crucial</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Shipping a focused MVP early helped uncover real problems that would not have surfaced through assumptions or planning alone. Real user feedback trumps theoretical analysis every time.
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="text-5xl font-bold text-purple-400 opacity-20">03</div>
            <div>
              <h3 className="text-2xl font-semibold mb-3">Communication Over Documentation</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Clear communication and shared understanding across teams mattered as much as detailed documentation. Regular sync-ups, visual artifacts, and open dialogue prevent misalignment better than lengthy documents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
       <section className="px-6 max-w-6xl mx-auto py-20 border-t border-white/10">
  <div className="text-center">
    
    <h2 className="text-4xl md:text-5xl font-bold mb-6">
      This Is How I Work
    </h2>

    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
      I'm passionate about building products that solve real problems, scaling teams with clarity, and shipping with confidence. Let's create something great together.
    </p>

    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      
      {/* Primary Button */}
      <Link
        href="/contact"
        className="bg-gradient-to-r from-purple-600 to-purple-700
                   hover:from-purple-500 hover:to-purple-600
                   text-white px-8 py-4 rounded-lg
                   font-semibold text-lg
                   transition-all duration-300
                   flex items-center gap-2"
      >
        Start a Conversation
        <ArrowRight className="w-5 h-5" />
      </Link>

      {/* Secondary Button */}
      <Link
        href="/work/creativegarment"   // Replace with actual next work slug
        className="border border-purple-500/40
                   text-purple-400
                   px-8 py-4 rounded-lg
                   font-semibold text-lg
                   hover:bg-purple-600/10
                   transition-all duration-300"
      >
        View Another Work
      </Link>

    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-12 mt-12">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© 2026 Shivam Somya. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
