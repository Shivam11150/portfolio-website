import Link from "next/link";

export default function KishanMitroCard() {
  return (
    <article
      className="
        relative overflow-hidden
        rounded-2xl border border-white/10
        bg-black/70 backdrop-blur
        p-6 md:p-8 space-y-6
        transition-all duration-200
        hover:scale-101 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]
      "
    >
      {/* Title + role */}
      <header className="space-y-2">
        <h3 className="text-xl md:text-2xl font-semibold text-white">
          Kishan Mitro — Multi-Branch Inventory &amp; Sales Enablement System
        </h3>

        <p className="text-sm md:text-base text-purple-400 font-medium">
         &nbsp;&nbsp;ERP &amp; Sales Ops Integration
        </p>
      </header>

      {/* Product description */}
      <p className="text-sm md:text-base text-gray-300 leading-relaxed">
        <span className="font-semibold text-purple-500">Enabled sales teams </span> across multiple states to <span className="font-semibold text-purple-500">place inventory-aware orders</span> without exposing core accounting systems, improving control and coordination.
      </p>

      {/* Product Impact Box */}
      <section className="
        rounded-xl
        bg-purple-950/25 border border-purple-900/30
        p-6 md:p-8
        space-y-6
      ">
        <h4 className="text-xs font-semibold tracking-wide text-white uppercase">
          PRODUCT IMPACT
        </h4>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Top Left: Centralized accounting */}
          <div className="space-y-1">
            <p className="text-sm text-gray-300">Order Sync</p>
            <p className="text-2xl md:text-3xl font-bold text-white">API-Based</p>
          </div>

          {/* Top Right: Branch inventory sync */}
          <div className="space-y-1">
            <p className="text-sm text-gray-300">Achieved Centralised</p>
            <p className="text-2xl md:text-3xl font-bold text-white">Accounting & Sales</p>
          </div>

        
        </div>
      </section>

      {/* Key Deliverables */}
      <section className="pt-4 border-t border-white/10">
        <h4 className="text-xs font-semibold tracking-wide text-gray-400 uppercase mb-4">
          KEY DELIVERABLES
        </h4>

        <div className="space-y-4">
          {/* Item 1 */}
          <div>
            <div className="flex items-start gap-3">
              <span className="h-2 w-2 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-white mb-2">
                  Access-controlled sales enablement
                </p>
                <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                  <span className="font-semibold text-purple-400">Designed a system</span> where sales teams could place orders without direct core accounting access, <span className="font-semibold text-purple-400">maintaining security and control.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div>
            <div className="flex items-start gap-3">
              <span className="h-2 w-2 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-white mb-2">
                  Inventory visibility across branches
                </p>
                <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                  <span className="font-semibold text-purple-400">Enabled real-time stock awareness</span> aligned with branch-level availability, improving order accuracy and customer fulfillment.
                </p>
              </div>
            </div>
          </div>

          {/* Item 3 */}
          <div>
            <div className="flex items-start gap-3">
              <span className="h-2 w-2 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-white mb-2">
                  API-based order synchronization
                </p>
                <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                  <span className="font-semibold text-purple-400">Built robust API integration</span> between sales platform and core accounting system for seamless, real-time order synchronization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
     <div className="pt-4 flex justify-center">
  <Link href="/work/kishanmitra">
      <button 
            type="button" 
            className="inline-flex items-center justify-center
                  rounded-xl px-5 py-2.5
                  bg-purple-600 text-white text-sm font-semibold
                  hover:bg-purple-800 
                  transition-all duration-200"
          >
            View full case study
          </button>
  </Link>
</div>
    </article>
  );
}
