'use client'

import { ArrowRight, Zap, Users, Target, TrendingUp, Lightbulb, MessageSquare } from 'lucide-react'
import Link from 'next/link'

export default function CaseStudy() {
  return (
    <div className="min-h-screen bg-black text-white">
    

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 max-w-6xl mx-auto">
        <div className="mb-8">
          <span className="inline-block bg-purple-600/20 border border-purple-500/50 text-purple-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Case Study
          </span>
          <h1 className="text-6xl font-bold mb-6 leading-tight">
            Creative Garments
            <br />
            <span className="text-gray-400">Workforce Synchronization & Production Visibility system</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed mb-8">
            Built a real-time production tracking system that unified workforce coordination across manufacturing lines, bringing visibility to shop-floor operations while keeping the system simple for non-technical workers.
          </p>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="border border-white/10 rounded-lg p-6 bg-gradient-to-br from-white/5 to-transparent">
            <p className="text-gray-400 text-sm mb-2">Role</p>
            <p className="text-2xl font-bold">Product analyst</p>
          </div>
          <div className="border border-white/10 rounded-lg p-6 bg-gradient-to-br from-white/5 to-transparent">
            <p className="text-gray-400 text-sm mb-2">Stage</p>
            <p className="text-2xl font-bold">Deployed</p>
          </div>
          <div className="border border-white/10 rounded-lg p-6 bg-gradient-to-br from-white/5 to-transparent">
            <p className="text-gray-400 text-sm mb-2">Efficiency Gain</p>
            <p className="text-2xl font-bold">11%</p>
          </div>
          <div className="border border-white/10 rounded-lg p-6 bg-gradient-to-br from-white/5 to-transparent">
            <p className="text-gray-400 text-sm mb-2">Cost Savings</p>
            <p className="text-2xl font-bold">₹25L+/Yr</p>
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
              Creative Garments, an authorized manufacturer for global brands like H&M and Levi's, faced critical operational bottlenecks. With 60 machines per production line and strict sequential workflows, one slow worker directly impacted the entire line. Management had no real-time visibility into where delays occurred, and daily targets were missed without clear insight into root causes.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">•</span>
                <span className="text-gray-300">Hidden bottlenecks in production lines went undetected</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">•</span>
                <span className="text-gray-300">Workers operated at different speeds with no coordination feedback</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">•</span>
                <span className="text-gray-300">Management depended on manual end-of-day reports from site managers</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-purple-400 font-semibold text-sm mb-4 uppercase tracking-wide">The Solution</h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Designed a simple real-time production tracking system that allowed workers to log output with a single tap after each completion, automatically synchronizing the entire line. Paired with an admin dashboard providing live visibility, supervisors could now identify bottlenecks during operations and intervene immediately.
            </p>
            <div className="bg-gradient-to-br from-purple-600/20 to-transparent border border-purple-500/30 rounded-lg p-6">
              <p className="text-gray-300 italic">
                "Enable real-time workforce coordination in complex manufacturing environments without disrupting operations or requiring workers to learn new systems."
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
              <h3 className="text-xl font-semibold mb-2">Operational Requirements Gathering</h3>
              <p className="text-gray-300">Worked directly with site managers and supervisors to understand production workflows, identify pain points, and translate complex manufacturing operations into clear system logic.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <Zap className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Simplicity-Focused Design</h3>
              <p className="text-gray-300">Designed a single-tap interface for workers focused on stitching, ensuring the system added zero friction to their day-to-day work while capturing real-time production data.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <TrendingUp className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Testing & Rollout Coordination</h3>
              <p className="text-gray-300">Coordinated end-to-end testing and deployment across production lines, ensuring smooth adoption without disrupting daily operations or target deadlines.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <MessageSquare className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Live Supervision & Optimization</h3>
              <p className="text-gray-300">Built a dashboard enabling supervisors to see real-time production flow, identify where intervention was needed, and adjust workforce deployment on the fly.</p>
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
              <h3 className="text-xl font-semibold mb-2">Deep User Understanding</h3>
              <p className="text-gray-300">Spent time on the shop floor to understand worker daily experience and supervisor pain points, rather than assuming what the system needed to solve.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-2 h-2 rounded-full bg-purple-400 mt-3 flex-shrink-0"></div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Non-Technical Design Priority</h3>
              <p className="text-gray-300">Built for shop-floor workers focused on stitching, not software. Every interaction designed for minimal learning curve and maximum adoption speed.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-2 h-2 rounded-full bg-purple-400 mt-3 flex-shrink-0"></div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Operations-First Rollout</h3>
              <p className="text-gray-300">Coordinated testing and deployment to run parallel with production, ensuring the system never slowed down operations or impacted daily targets.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-2 h-2 rounded-full bg-purple-400 mt-3 flex-shrink-0"></div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Real-Time Feedback Loop</h3>
              <p className="text-gray-300">Used live production data from the system to optimize workflows and identify opportunities for efficiency gains, continuously improving supervisory decisions.</p>
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
            <p className="text-gray-300">Gathered operational requirements directly from site managers and supervisors, translating manufacturing complexity into clear system specifications that engineering could execute against.</p>
          </div>
          <div className="border border-white/10 rounded-lg p-8 bg-gradient-to-br from-white/5 to-transparent">
            <Lightbulb className="w-10 h-10 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Visual Workflow Design</h3>
            <p className="text-gray-300">Mapped out production flows visually to ensure alignment between operations team and engineering, using simple diagrams to align on system behavior before development began.</p>
          </div>
        </div>
        <div className="mt-8 border border-white/10 rounded-lg p-8 bg-gradient-to-br from-white/5 to-transparent">
          <TrendingUp className="w-10 h-10 text-purple-400 mb-4" />
          <h3 className="text-xl font-semibold mb-3">Phased Testing & Rollout</h3>
          <p className="text-gray-300">Coordinated staged testing across different production lines, collecting feedback from workers and supervisors during each phase. Ensured full parallel operation with existing workflows before final deployment, maintaining production targets throughout.</p>
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
                <h3 className="text-2xl font-semibold mb-2 text-white">Real-Time Production Visibility System</h3>
                <p className="text-gray-300 text-lg">Designed and coordinated a worker-facing interface and management dashboard that brought instant visibility into production line performance, enabling supervisors to identify bottlenecks and intervene during shift operations.</p>
              </div>
            </div>
          </div>
          <div className="border border-purple-500/50 rounded-lg p-8 bg-gradient-to-r from-purple-600/10 via-transparent to-transparent">
            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2 text-white">Workforce Synchronization Framework</h3>
                <p className="text-gray-300 text-lg">Translated complex manufacturing workflows into a simple system logic that automatically synchronized worker output across all production rows, removing manual coordination overhead.</p>
              </div>
            </div>
          </div>
          <div className="border border-purple-500/50 rounded-lg p-8 bg-gradient-to-r from-purple-600/10 via-transparent to-transparent">
            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2 text-white">Zero-Disruption Deployment & Adoption</h3>
                <p className="text-gray-300 text-lg">Coordinated phased rollout and testing that ran parallel with production operations, ensuring worker adoption without impacting daily targets or requiring operational downtime.</p>
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
            <p className="text-purple-400 text-sm font-semibold uppercase tracking-wide mb-3">Efficiency Gain</p>
            <p className="text-3xl font-bold mb-2">11%</p>
            <p className="text-gray-300">Increase in production output</p>
          </div>
          <div className="border border-white/10 rounded-lg p-8 bg-gradient-to-br from-white/5 to-transparent text-center">
            <p className="text-purple-400 text-sm font-semibold uppercase tracking-wide mb-3">Cost Savings</p>
            <p className="text-3xl font-bold mb-2">₹25L+</p>
            <p className="text-gray-300">Annual production cost reduction</p>
          </div>
          <div className="border border-white/10 rounded-lg p-8 bg-gradient-to-br from-white/5 to-transparent text-center">
            <p className="text-purple-400 text-sm font-semibold uppercase tracking-wide mb-3">Operations</p>
            <p className="text-3xl font-bold mb-2">Live</p>
            <p className="text-gray-300">Full centralized supervision achieved</p>
          </div>
        </div>
        <div className="border border-white/10 rounded-lg p-8 bg-gradient-to-br from-white/5 to-transparent">
          <h3 className="text-xl font-semibold mb-4">Key Improvements Realized</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center gap-2"><span className="text-purple-400">→</span> Real-time bottleneck identification eliminated end-of-day surprises</li>
            <li className="flex items-center gap-2"><span className="text-purple-400">→</span> Supervisors now intervene during shift, not after target misses</li>
            <li className="flex items-center gap-2"><span className="text-purple-400">→</span> Centralized visibility reduced dependency on manual site manager updates</li>
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
              <h3 className="text-2xl font-semibold mb-3">Systems Unlock Clarity in Chaos</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Complex, non-digital environments often have problems that seem unsolvable. But structured thinking, simple systems, and real-time visibility can transform operations that were previously flying blind. The answer often isn't technology—it's bringing visibility to what's already happening.
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="text-5xl font-bold text-purple-400 opacity-20">02</div>
            <div>
              <h3 className="text-2xl font-semibold mb-3">Non-Technical Users Demand Simplicity</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Shop-floor workers care about their primary job—stitching—not learning software. Every additional click or training requirement reduces adoption. Systems designed for non-technical users must prioritize friction-free interaction over feature depth.
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="text-5xl font-bold text-purple-400 opacity-20">03</div>
            <div>
              <h3 className="text-2xl font-semibold mb-3">Operational Continuity Is Non-Negotiable</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                In manufacturing, daily targets and production schedules are sacred. Rolling out new systems requires deep respect for operational constraints—testing in parallel, phased adoption, and never putting production at risk for progress. The best system is one that never disrupts operations during deployment.
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
        href="/work/satnamtrader"   // Replace with actual next work slug
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
