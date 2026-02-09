export default function HighOneShopCard() {
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
          HighOneShop — B2B Business Chat &amp; Commerce Platform
        </h3>

        <p className="text-sm md:text-base text-purple-400 font-medium">
          Product Manager&nbsp;&nbsp;|&nbsp;&nbsp;0 → 1 → Scale
        </p>
      </header>

      {/* Product description */}
      <p className="text-sm md:text-base text-gray-300 leading-relaxed">
        Built and scaled a B2B product helping businesses manage operations and
        customer communication — from MVP to real, paid users.
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
          {/* Top Left: Businesses onboarded */}
          <div className="space-y-1">
            <p className="text-sm text-gray-300">Businesses onboarded</p>
            <p className="text-4xl md:text-5xl font-bold text-white">1500+</p>
          </div>

          {/* Top Right: App rating */}
          <div className="space-y-1">
            <p className="text-sm text-gray-300">App rating</p>
            <p className="text-4xl md:text-5xl font-bold text-white">4.7 ⭐</p>
          </div>

          {/* Bottom Left: Available on */}
          <div className="space-y-3">
            <p className="text-sm text-gray-300">Available on</p>
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
                Play Store
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
                <svg className="w-4 h-4 text-purple-600 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.43.07 1.17-.34 2.35-1.04 3.19z" />
                </svg>
                App Store
              </button>
            </div>
          </div>

          {/* Bottom Right: Current status */}
          <div className="space-y-1">
            <p className="text-sm text-gray-300">Current status</p>
            <p className="text-lg md:text-xl font-bold text-purple-400">Scaling &amp; improving 🚀</p>
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
                  Product discovery &amp; prioritization
                </p>
                <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                  Identified core user problems and business constraints, and
                  prioritized solutions that could be built and adopted.
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
                  Design–engineering alignment
                </p>
                <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                  Translated requirements into clear flows, bridged gaps between design
                  and development teams, and supported sprint planning and execution.
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
                  MVP launch &amp; iteration
                </p>
                <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                  Led the MVP launch with real users and GTM execution, then iterated
                  based on feedback with continuous scaling and improvement in progress.
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
