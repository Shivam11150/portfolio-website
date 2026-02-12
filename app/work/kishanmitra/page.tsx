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
            Kishan Mitro
            <br />
            <span className="text-gray-400">Multi-Branch Inventory & Sales Enablement System</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed mb-8">
            Enabling sales teams to close orders with controlled, real-time inventory visibility across multiple branches while preserving accounting security and central control.
          </p>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="border border-white/10 rounded-lg p-6 bg-gradient-to-br from-white/5 to-transparent">
            <p className="text-gray-400 text-sm mb-2">Role</p>
            <p className="text-2xl font-bold">Product Manager</p>
          </div>
          <div className="border border-white/10 rounded-lg p-6 bg-gradient-to-br from-white/5 to-transparent">
            <p className="text-gray-400 text-sm mb-2">Users</p>
            <p className="text-2xl font-bold">Sales & Branch Teams</p>
          </div>
          <div className="border border-white/10 rounded-lg p-6 bg-gradient-to-br from-white/5 to-transparent">
            <p className="text-gray-400 text-sm mb-2">Branches</p>
            <p className="text-2xl font-bold">4 States</p>
          </div>
          <div className="border border-white/10 rounded-lg p-6 bg-gradient-to-br from-white/5 to-transparent">
            <p className="text-gray-400 text-sm mb-2">Domain</p>
            <p className="text-2xl font-bold">Agricultural Equipment</p>
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
              Kishan Mitro, an agricultural equipment distributor with outlets across four states, operated with centralized accounting and distributed sales teams. Sales executives and branch managers lacked controlled, real-time visibility into inventory, limiting their ability to confidently close orders.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">•</span>
                <span className="text-gray-300">Sales teams lacked real-time stock visibility while inventory was managed centrally</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">•</span>
                <span className="text-gray-300">Direct access to accounting systems posed control and compliance risks</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">•</span>
                <span className="text-gray-300">Inventory updates were delayed across branches after order confirmation</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-purple-400 font-semibold text-sm mb-4 uppercase tracking-wide">The Solution</h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Implemented an access-controlled sales enablement layer using Hiee One Shop for digital catalogs, combined with API contracts to sync structured orders to the central accounting system—providing controlled real-time visibility without exposing sensitive systems.
            </p>
            <div className="bg-gradient-to-br from-purple-600/20 to-transparent border border-purple-500/30 rounded-lg p-6">
              <p className="text-gray-300 italic">
                "Give sales teams the visibility they need to sell confidently while preserving accounting control and compliance."
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
              <h3 className="text-xl font-semibold mb-2">Operational Alignment</h3>
              <p className="text-gray-300">Worked with branch managers and central accounting to define what controlled inventory visibility meant operationally and technically.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Zap className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Catalog Implementation</h3>
              <p className="text-gray-300">Deployed Hiee One Shop across branches to create digital product catalogs for sales teams to use during customer interactions.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <TrendingUp className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">API & Integration</h3>
              <p className="text-gray-300">Defined API contracts to sync sales orders from the sales layer to the accounting system, ensuring accurate inventory reconciliation across branches.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <MessageSquare className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Training & Adoption</h3>
              <p className="text-gray-300">Trained sales executives to nurture leads, showcase products, and place orders digitally while preserving existing workflows.</p>
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
              <h3 className="text-xl font-semibold mb-2">Controlled Visibility</h3>
              <p className="text-gray-300">Designed visibility that limited access to sensitive accounting while surfacing only the inventory data required by sales teams.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-2 h-2 rounded-full bg-purple-400 mt-3 flex-shrink-0"></div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Integration-First</h3>
              <p className="text-gray-300">Prioritized robust API contracts and reconciliation logic to keep branch inventories accurate after order confirmation.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-2 h-2 rounded-full bg-purple-400 mt-3 flex-shrink-0"></div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Operational Respect</h3>
              <p className="text-gray-300">Ensured changes did not disrupt sales velocity or accounting controls during rollout, using staged deployments and close monitoring.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-2 h-2 rounded-full bg-purple-400 mt-3 flex-shrink-0"></div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Feedback-Driven Adjustments</h3>
              <p className="text-gray-300">Used iterative feedback from sales and accounting teams to refine sync behavior and visibility rules.</p>
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
            <h3 className="text-xl font-semibold mb-3">Accounting-Safe Order Flow</h3>
            <p className="text-gray-300">Customized the accounting system to accept structured order intake while preserving internal controls and audit trails.</p>
          </div>
          <div className="border border-white/10 rounded-lg p-8 bg-gradient-to-br from-white/5 to-transparent">
            <Lightbulb className="w-10 h-10 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Catalog Deployment</h3>
            <p className="text-gray-300">Rolled out Hiee One Shop across branches so sales teams could access accurate digital catalogs during client discussions.</p>
          </div>
        </div>
        <div className="mt-8 border border-white/10 rounded-lg p-8 bg-gradient-to-br from-white/5 to-transparent">
          <TrendingUp className="w-10 h-10 text-purple-400 mb-4" />
          <h3 className="text-xl font-semibold mb-3">Sync & Reconciliation</h3>
          <p className="text-gray-300">Defined and implemented reliable sync mechanisms so inventory changes reflected across branches after order confirmation, reducing race conditions and errors.</p>
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
                <h3 className="text-2xl font-semibold mb-2 text-white">Access-Controlled Inventory Visibility</h3>
                <p className="text-gray-300 text-lg">Provided sales teams with the inventory data they needed while restricting access to accounting systems and sensitive data.</p>
              </div>
            </div>
          </div>
          <div className="border border-purple-500/50 rounded-lg p-8 bg-gradient-to-r from-purple-600/10 via-transparent to-transparent">
            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2 text-white">Structured Order Intake</h3>
                <p className="text-gray-300 text-lg">Customized order intake flows that synced securely to accounting, preserving auditability and control.</p>
              </div>
            </div>
          </div>
          <div className="border border-purple-500/50 rounded-lg p-8 bg-gradient-to-r from-purple-600/10 via-transparent to-transparent">
            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2 text-white">API Contracts & Reconciliation</h3>
                <p className="text-gray-300 text-lg">Defined API contracts and reconciliation logic to keep inventory accurate across multiple branches after orders were confirmed.</p>
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
            <p className="text-purple-400 text-sm font-semibold uppercase tracking-wide mb-3">Visibility</p>
            <p className="text-3xl font-bold mb-2">Controlled</p>
            <p className="text-gray-300">Sales teams gained real-time inventory visibility</p>
          </div>
          <div className="border border-white/10 rounded-lg p-8 bg-gradient-to-br from-white/5 to-transparent text-center">
            <p className="text-purple-400 text-sm font-semibold uppercase tracking-wide mb-3">Order Flow</p>
            <p className="text-3xl font-bold mb-2">Structured</p>
            <p className="text-gray-300">Order placement without compromising accounting security</p>
          </div>
          <div className="border border-white/10 rounded-lg p-8 bg-gradient-to-br from-white/5 to-transparent text-center">
            <p className="text-purple-400 text-sm font-semibold uppercase tracking-wide mb-3">Coordination</p>
            <p className="text-3xl font-bold mb-2">Reduced</p>
            <p className="text-gray-300">Less manual coordination between sales and back-office</p>
          </div>
        </div>
        <div className="border border-white/10 rounded-lg p-8 bg-gradient-to-br from-white/5 to-transparent">
          <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center gap-2"><span className="text-purple-400">→</span> Controlled real-time visibility for sales</li>
            <li className="flex items-center gap-2"><span className="text-purple-400">→</span> Secure order flows integrating with accounting</li>
            <li className="flex items-center gap-2"><span className="text-purple-400">→</span> Reduced manual reconciliation across branches</li>
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
              <h3 className="text-2xl font-semibold mb-3">Design for Control</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Thoughtful system design can provide the visibility needed by sales without exposing critical accounting systems—balancing usability with governance.
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="text-5xl font-bold text-purple-400 opacity-20">02</div>
            <div>
              <h3 className="text-2xl font-semibold mb-3">Integration Is Essential</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Robust API contracts and reconciliation logic are necessary to maintain inventory accuracy across branches and prevent race conditions.
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="text-5xl font-bold text-purple-400 opacity-20">03</div>
            <div>
              <h3 className="text-2xl font-semibold mb-3">Respect Operations</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Rollouts must avoid disrupting sales velocity or accounting processes—staged deployments and monitoring preserve continuity while enabling change.
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
