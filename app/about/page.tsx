import Link from "next/dist/client/link";
import { ArrowRight } from 'lucide-react'
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-4 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold">
              About <span className="text-purple-400">Me</span>
            </h1>
            <p className="text-base md:text-lg text-gray-300 max-w-2xl leading-relaxed">
              I'm a Product Manager at Macleo Technology, a B2B SaaS startup working on building and scaling real-world products used by businesses. I operate at the intersection of product, technology, and business execution, with hands-on ownership across the product lifecycle.
            </p>
          </div>
        </div>
         
      </section>

      {/* Content Sections */}
      <section className="py-0 ">
        <div className="max-w-5xl mx-auto px-6 space-y-4">
          
          {/* 1. How I Work as a Product Manager */}
          <article className="rounded-2xl border border-white/10 bg-black/70 backdrop-blur p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
              How I Work as a <span className="text-purple-400">Product Manager</span>
            </h2>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-purple-400 flex-shrink-0 mt-1">→</span>
                <span className="text-base text-gray-300">Work closely with cross-functional teams including designers, developers, testers, sales, onboarding, and business stakeholders.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 flex-shrink-0 mt-1">→</span>
                <span className="text-base text-gray-300">Comfortable operating in small teams and constrained environments, where clarity, ownership, and adaptability are critical.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 flex-shrink-0 mt-1">→</span>
                <span className="text-base text-gray-300">Act as a single point of alignment between business requirements and execution teams.</span>
              </li>
            </ul>
          </article>

          {/* 2. Product Ownership & Execution */}
          <article className="rounded-2xl border border-white/10 bg-black/70 backdrop-blur p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
              Product Ownership &amp; <span className="text-purple-400">Execution</span>
            </h2>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-purple-400 flex-shrink-0 mt-1">→</span>
                <span className="text-base text-gray-300">Handle products end-to-end — from product ideation and requirement definition to launch, iteration, and maintenance.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 flex-shrink-0 mt-1">→</span>
                <span className="text-base text-gray-300">Create and maintain BRDs, FRDs, and product flows, ensuring requirements are clear, realistic, and buildable.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 flex-shrink-0 mt-1">→</span>
                <span className="text-base text-gray-300">Manage product execution through sprint planning, prioritization, releases, and ongoing improvements.</span>
              </li>
            </ul>
          </article>

          {/* 3. User, Sales & GTM Collaboration */}
          <article className="rounded-2xl border border-white/10 bg-black/70 backdrop-blur p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
              User, Sales &amp; <span className="text-purple-400">GTM Collaboration</span>
            </h2>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-purple-400 flex-shrink-0 mt-1">→</span>
                <span className="text-base text-gray-300">Work closely with sales and onboarding teams to support lead management, CRM workflows, and smoother customer onboarding.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 flex-shrink-0 mt-1">→</span>
                <span className="text-base text-gray-300">Help sales teams understand how to pitch product features, position value, and communicate effectively with customers.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 flex-shrink-0 mt-1">→</span>
                <span className="text-base text-gray-300">Support go-to-market execution, including launch coordination, distribution planning, and collaboration with BSP and external partners.</span>
              </li>
            </ul>
          </article>

          {/* 4. Decision-Making & Improvement Mindset */}
          <article className="rounded-2xl border border-white/10 bg-black/70 backdrop-blur p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
              Decision-Making &amp; <span className="text-purple-400">Improvement Mindset</span>
            </h2>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-purple-400 flex-shrink-0 mt-1">→</span>
                <span className="text-base text-gray-300">Use user feedback, usage data, and business inputs to guide prioritization and product decisions.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 flex-shrink-0 mt-1">→</span>
                <span className="text-base text-gray-300">Track key product metrics and continuously refine features, flows, and experiences.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 flex-shrink-0 mt-1">→</span>
                <span className="text-base text-gray-300">Comfortable making trade-offs and taking accountability for outcomes, not just tasks.</span>
              </li>
            </ul>
          </article>

          {/* 5. Professional Values */}
          <article className="rounded-2xl border border-white/10 bg-black/70 backdrop-blur p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
              Professional <span className="text-purple-400">Values</span>
            </h2>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-purple-400 flex-shrink-0 mt-1">→</span>
                <span className="text-base text-gray-300">Strong belief in team collaboration, accountability, and clear communication.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 flex-shrink-0 mt-1">→</span>
                <span className="text-base text-gray-300">Maintain a balance of humility and confidence — open to feedback, but decisive when action is needed.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-purple-400 flex-shrink-0 mt-1">→</span>
                <span className="text-base text-gray-300">Continuous learner, adapting quickly across domains like SaaS, manufacturing operations, retail, and distribution systems.</span>
              </li>
            </ul>
          </article>

        </div>
        </section>

       
       <section className="py-16 md:py-24 bg-black">
      <div className="max-w-5xl mx-auto px-6">
        {/* Main Card */}
        <article className="rounded-2xl border border-white/10 bg-gradient-to-br from-purple-950/10 to-transparent backdrop-blur p-8 md:p-12 text-center space-y-8">
          
          {/* Content */}
          <div className="space-y-6">
           
   
            <div className="space-y-4 max-w-2xl mx-auto">
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
               I’m someone who's eager to learn, adapts to new environments, and believes improvement never stops.
              </p>
              
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
               If you value growth and collaboration, I’d be happy to connect.
               </p>
            </div>

    
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      
      {/* Primary Button */}
      <Link
        href="/contact"
        className="bg-gradient-to-r from-purple-600 to-purple-700
                   hover:from-purple-500 hover:to-purple-600
                   active:scale-95 
                         active:bg-purple-500/20
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
        href="/#work"   
        className="border border-purple-500/40
                   text-purple-400
                   px-8 py-4 rounded-lg
                   font-semibold text-lg
                   hover:bg-purple-600/10
                   active:scale-95 
                         active:bg-purple-500/20
                   transition-all duration-300"
      >
        Explore My Works
      </Link>

    </div>
        </article>
      </div>
    
      </section>

    </main>
  );
}
