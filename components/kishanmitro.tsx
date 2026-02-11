export default function KishanMitroCard() {
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
          Kishan Mitro — Multi-Branch Inventory &amp; Sales Enablement System
        </h3>

        <p className="text-sm md:text-base text-purple-400 font-medium">
          Product Manager&nbsp;&nbsp;|&nbsp;&nbsp;ERP &amp; Sales Ops Integration
        </p>
      </header>

      {/* Product description */}
      <p className="text-sm md:text-base text-gray-300 leading-relaxed">
        Enabled sales teams across multiple states to place inventory-aware orders without exposing core accounting systems, improving control and coordination.
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
            <p className="text-sm text-gray-300">Centralized accounting</p>
            <p className="text-4xl md:text-5xl font-bold text-white">100%</p>
          </div>

          {/* Top Right: Branch inventory sync */}
          <div className="space-y-1">
            <p className="text-sm text-gray-300">Real-time visibility</p>
            <p className="text-4xl md:text-5xl font-bold text-white">Multi-state</p>
          </div>

          {/* Bottom Left: Order sync capabilities */}
          <div className="space-y-3">
            <p className="text-sm text-gray-300">Order synchronization</p>
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
                API-based sync
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
                Real-time inventory
              </button>
            </div>
          </div>

          {/* Bottom Right: Current status */}
          <div className="space-y-1">
            <p className="text-sm text-gray-300">Current status</p>
            <p className="text-lg md:text-xl font-bold text-purple-400">Live &amp; integrated 🚀</p>
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
                  Designed a system where sales teams could place orders without direct core accounting access, maintaining security and control.
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
                  Enabled real-time stock awareness aligned with branch-level availability, improving order accuracy and customer fulfillment.
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
                  Built robust API integration between sales platform and core accounting system for seamless, real-time order synchronization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="pt-2">
        <button
          type="button"
          className="
            inline-flex items-center justify-center
            rounded-xl px-5 py-2.5
            bg-purple-600 text-white text-sm font-semibold
            hover:bg-purple-700 hover:shadow-[0_0_18px_rgba(168,85,247,0.45)]
            transition-all duration-200
          "
        >
          View full case study
        </button>
      </div>
    </article>
  );
}
