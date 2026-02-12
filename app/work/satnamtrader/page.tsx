'use client'

import { ArrowRight, Zap, Users, Target, TrendingUp, Lightbulb, MessageSquare } from 'lucide-react'
import Link from 'next/link'

export default function CaseStudy() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Shivam Somya</h1>
          <div className="flex items-center gap-8">
            <a href="#" className="text-gray-400 hover:text-white transition">Home</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Work</a>
            <a href="#" className="text-gray-400 hover:text-white transition">About</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Contact</a>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition">
              Let's Talk
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <span className="inline-block bg-purple-600/20 border border-purple-500/50 text-purple-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Case Study
          </span>
          <h1 className="text-6xl font-bold mb-6 leading-tight">
            ST Brands
            <br />
            <span className="text-gray-400">B2B Product Showcase & Order Management System</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed mb-8">
            Digitizing product discovery and enquiry handling for a large-format footwear importer, improving consistency across sales teams and providing management with centralized visibility into orders and follow-ups.
          </p>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="border border-white/10 rounded-lg p-6 bg-gradient-to-br from-white/5 to-transparent">
            <p className="text-gray-400 text-sm mb-2">Role</p>
            <p className="text-2xl font-bold">Product Manager</p>
          </div>
          <div className="border border-white/10 rounded-lg p-6 bg-gradient-to-br from-white/5 to-transparent">
            <p className="text-gray-400 text-sm mb-2">Domain</p>
            <p className="text-2xl font-bold">Footwear Import & Retail</p>
          </div>
          <div className="border border-white/10 rounded-lg p-6 bg-gradient-to-br from-white/5 to-transparent">
            <p className="text-gray-400 text-sm mb-2">Customers</p>
            <p className="text-2xl font-bold">6,000+</p>
          </div>
          <div className="border border-white/10 rounded-lg p-6 bg-gradient-to-br from-white/5 to-transparent">
            <p className="text-gray-400 text-sm mb-2">Location</p>
            <p className="text-2xl font-bold">Karol Bagh, Delhi</p>
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
              ST Brands, a footwear importer and large-format retailer, relied heavily on WhatsApp for product discovery and order handling. Sales were relationship-driven across field and inside teams, causing inconsistent product sharing, missed enquiries, and limited managerial visibility as the B2B customer base scaled.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">•</span>
                <span className="text-gray-300">Product images and prices were shared over WhatsApp without a structured catalog</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">•</span>
                <span className="text-gray-300">Enquiries got lost in chat threads and follow-ups were hard to track</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">•</span>
                <span className="text-gray-300">Management lacked visibility into enquiries, orders, and employee follow-ups</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-purple-400 font-semibold text-sm mb-4 uppercase tracking-wide">The Solution</h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Implemented a centralized product showcase and order management system that worked alongside existing sales behaviors. Centralized product uploads ensured all sales staff had instant access to the full catalog, while a management dashboard surfaced enquiries, orders, and pending follow-ups.
            </p>
            <div className="bg-gradient-to-br from-purple-600/20 to-transparent border border-purple-500/30 rounded-lg p-6">
              <p className="text-gray-300 italic">
                "Provide consistent product visibility across sales teams while preserving relationship-led sales workflows and minimizing adoption friction."
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
              <h3 className="text-xl font-semibold mb-2">Customer & Sales Alignment</h3>
              <p className="text-gray-300">Engaged with field and inside sales teams to understand their workflows and constraints, ensuring the solution complemented existing relationship-driven sales behaviors.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Zap className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Centralized Catalog Design</h3>
              <p className="text-gray-300">Designed a central product upload system so updates propagated instantly to all sales staff, removing inconsistencies and outdated information during client interactions.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <TrendingUp className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Enquiry & Order Flow</h3>
              <p className="text-gray-300">Built streamlined enquiry tracking and order management flows to reduce manual effort and improve lead conversion across teams.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <MessageSquare className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Management Dashboards</h3>
              <p className="text-gray-300">Delivered a custom admin dashboard to surface enquiries, pending follow-ups, and order metrics for supervisory oversight and decision-making.</p>
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
              <h3 className="text-xl font-semibold mb-2">Design for Existing Behavior</h3>
              <p className="text-gray-300">Focused on solutions that worked alongside WhatsApp-driven workflows, reducing resistance and enabling gradual adoption rather than forcing a sudden change.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-2 h-2 rounded-full bg-purple-400 mt-3 flex-shrink-0"></div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Quick Update Propagation</h3>
              <p className="text-gray-300">Ensured product updates could be centrally uploaded and immediately available to all sales staff, maintaining consistency across regions and teams.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-2 h-2 rounded-full bg-purple-400 mt-3 flex-shrink-0"></div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Visibility-First Metrics</h3>
              <p className="text-gray-300">Prioritized management visibility into enquiries, conversions, and pending actions so supervisors could make informed decisions and coach teams effectively.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-2 h-2 rounded-full bg-purple-400 mt-3 flex-shrink-0"></div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Minimal Adoption Friction</h3>
              <p className="text-gray-300">Kept interactions simple for sales staff so the system complemented their workflows rather than replacing them, enabling faster uptake.</p>
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
            <h3 className="text-xl font-semibold mb-3">Product Visibility First</h3>
            <p className="text-gray-300">Focused initial efforts on digitizing the product catalog and making it instantly accessible to all sales employees, rather than rebuilding the entire sales process at once.</p>
          </div>
          <div className="border border-white/10 rounded-lg p-8 bg-gradient-to-br from-white/5 to-transparent">
            <Lightbulb className="w-10 h-10 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Centralized Content Management</h3>
            <p className="text-gray-300">Implemented a centralized product upload system so updates were immediately available across teams, ensuring consistent product information during client interactions.</p>
          </div>
        </div>
        <div className="mt-8 border border-white/10 rounded-lg p-8 bg-gradient-to-br from-white/5 to-transparent">
          <TrendingUp className="w-10 h-10 text-purple-400 mb-4" />
          <h3 className="text-xl font-semibold mb-3">Dashboard & Supervision</h3>
          <p className="text-gray-300">Delivered a custom admin dashboard to surface enquiries, orders, and pending follow-ups across employees, enabling management to supervise sales activity at scale.</p>
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
                <h3 className="text-2xl font-semibold mb-2 text-white">Central Product Showcase</h3>
                <p className="text-gray-300 text-lg">Built a centralized catalog for the full product range, making it simple for sales teams to find and share accurate product information with buyers.</p>
              </div>
            </div>
          </div>
          <div className="border border-purple-500/50 rounded-lg p-8 bg-gradient-to-r from-purple-600/10 via-transparent to-transparent">
            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2 text-white">Enquiry Tracking & Order Flow</h3>
                <p className="text-gray-300 text-lg">Designed streamlined enquiry management and order handling to reduce missed leads and improve conversion for relationship-driven sales teams.</p>
              </div>
            </div>
          </div>
          <div className="border border-purple-500/50 rounded-lg p-8 bg-gradient-to-r from-purple-600/10 via-transparent to-transparent">
            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2 text-white">Management Dashboard</h3>
                <p className="text-gray-300 text-lg">Delivered a custom admin dashboard to monitor enquiries, orders, and pending follow-ups across employees, enabling supervisors to act and coach teams effectively.</p>
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
            <p className="text-purple-400 text-sm font-semibold uppercase tracking-wide mb-3">Sales Lift</p>
            <p className="text-3xl font-bold mb-2">13%</p>
            <p className="text-gray-300">Increase in sales</p>
          </div>
          <div className="border border-white/10 rounded-lg p-8 bg-gradient-to-br from-white/5 to-transparent text-center">
            <p className="text-purple-400 text-sm font-semibold uppercase tracking-wide mb-3">Recovered Opportunity</p>
            <p className="text-3xl font-bold mb-2">₹50L - ₹1Cr</p>
            <p className="text-gray-300">Annual value of previously lost sales attended</p>
          </div>
          <div className="border border-white/10 rounded-lg p-8 bg-gradient-to-br from-white/5 to-transparent text-center">
            <p className="text-purple-400 text-sm font-semibold uppercase tracking-wide mb-3">Visibility</p>
            <p className="text-3xl font-bold mb-2">Centralized</p>
            <p className="text-gray-300">Management visibility into enquiries and orders</p>
          </div>
        </div>
        <div className="border border-white/10 rounded-lg p-8 bg-gradient-to-br from-white/5 to-transparent">
          <h3 className="text-xl font-semibold mb-4">Key Improvements Realized</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center gap-2"><span className="text-purple-400">→</span> Structured product showcasing across all sales teams</li>
            <li className="flex items-center gap-2"><span className="text-purple-400">→</span> Improved enquiry handling and reduced missed leads</li>
            <li className="flex items-center gap-2"><span className="text-purple-400">→</span> Centralized visibility for management to monitor and act on sales activity</li>
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
              <h3 className="text-2xl font-semibold mb-3">Visibility & Consistency Win</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                In B2B sales, visibility and consistent product presentation matter as much as speed. Structuring how products are showcased reduces friction and increases conversion.
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="text-5xl font-bold text-purple-400 opacity-20">02</div>
            <div>
              <h3 className="text-2xl font-semibold mb-3">Dashboards Must Reflect Reality</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Management dashboards are powerful only when they reflect ground reality, not vanity metrics. Supervisors must see actionable signals tied to real sales behavior.
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="text-5xl font-bold text-purple-400 opacity-20">03</div>
            <div>
              <h3 className="text-2xl font-semibold mb-3">Complement, Don't Replace</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Solutions that work alongside existing tools (like WhatsApp) and gradually shift behavior see higher adoption and better results than forced replacements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 max-w-6xl mx-auto py-20 border-t border-white/10">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">This Is How I Work</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            I'm passionate about building products that solve real problems, scaling teams with clarity, and shipping with confidence. Let's create something great together.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition flex items-center gap-2 mx-auto">
            Start a Conversation
            <ArrowRight className="w-5 h-5" />
          </button>
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
