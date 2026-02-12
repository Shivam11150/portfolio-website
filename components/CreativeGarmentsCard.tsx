import Link from "next/link";
export default function CreativeGarmentsCard() {
  return (
    <article
      className="
        relative overflow-hidden
        rounded-2xl border border-white/10
        bg-black/70 backdrop-blur
        p-6 md:p-8 space-y-6
      "
    >
      {/* Title + role */}
      <header className="space-y-2">
        <h3 className="text-xl md:text-2xl font-semibold text-white">
          Creative Garments pvt Ltd — Workforce &amp; Production Efficiency System
        </h3>

        <p className="text-sm md:text-base text-purple-400 font-medium">
          Product Analyst / System Designer&nbsp;&nbsp;|&nbsp;&nbsp;Design → Implementation → Adoption
        </p>
      </header>

      {/* Product description */}
      <p className="text-sm md:text-base text-gray-300 leading-relaxed">
        Designed a real-time production tracking system that helped management identify bottlenecks, sync the workforce, and improve visibility across garment production lines.
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
          {/* Top Left: Efficiency improved */}
          <div className="space-y-1">
            <p className="text-sm text-gray-300">Efficiency improved</p>
            <p className="text-4xl md:text-5xl font-bold text-white">11%</p>
          </div>

          {/* Top Right: Annual cost savings */}
          <div className="space-y-1">
            <p className="text-sm text-gray-300">Annual cost savings</p>
            <p className="text-4xl md:text-5xl font-bold text-white">₹2M+</p>
          </div>

          {/* Bottom Left: Production visibility */}
          <div className="space-y-3">
            <p className="text-sm text-gray-300">Production visibility</p>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                className="
                  inline-flex items-center gap-2
                  px-4 py-2
                  bg-white border border-purple-500
                  text-purple-600 text-sm font-semibold
                  rounded-lg
                  hover:bg-purple-50 hover:border-purple-600
                  transition-all duration-200
                "
              >
                <div className="w-4 h-4 bg-purple-600 rounded-sm" />
                Real-time tracking
              </button>
              <button
                type="button"
                className="
                  inline-flex items-center gap-2
                  px-4 py-2
                  bg-white border border-purple-500
                  text-purple-600 text-sm font-semibold
                  rounded-lg
                  hover:bg-purple-50 hover:border-purple-600
                  transition-all duration-200
                "
              >
                <div className="w-4 h-4 bg-purple-600 rounded-sm" />
                Centralized monitoring
              </button>
            </div>
          </div>

          {/* Bottom Right: Current status */}
          <div className="space-y-1">
            <p className="text-sm text-gray-300">Current status</p>
            <p className="text-lg md:text-xl font-bold text-purple-400">Live &amp; scaling 🚀</p>
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
                  Problem analysis &amp; system design
                </p>
                <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                  Mapped production flow, identified gaps, and designed a solution aligned with shop-floor realities.
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
                  Operational visibility &amp; workforce sync
                </p>
                <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                  Enabled real-time tracking at each machine level to surface delays and balance workload dynamically.
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
                  Execution &amp; adoption
                </p>
                <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                  Built a lightweight employee interface and an admin dashboard to ensure ease of use and daily adoption.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="pt-2">
  <Link href="/work/creativegarment">
    <button 
      type="button" 
      className=" inline-flex items-center justify-center
            rounded-xl px-5 py-2.5
            bg-purple-600 text-white text-sm font-semibold
            hover:bg-purple-700 hover:shadow-[0_0_18px_rgba(168,85,247,0.45)]
            transition-all duration-200"
    >
      View full case study
    </button>
  </Link>
</div>
    </article>
  );
}
