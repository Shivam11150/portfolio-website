import Link from "next/link";
export default function SatnamTradersCard() {
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
          ST Brands — B2B Product Showcase &amp; Order Management System
        </h3>

        <p className="text-sm md:text-base text-purple-400 font-medium">
          B2B Solutions Architect&nbsp;&nbsp;
        </p>
      </header>

      {/* Product description */}
      <p className="text-sm md:text-base text-gray-300 leading-relaxed">
        <span className="font-semibold text-purple-500"> Structured B2B product showcasing </span>and order handling for a large sales team, improving visibility and 
        <span className="font-semibold text-purple-500"> reducing missed enquiries</span>.
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
          {/* Top Left: Sales team sync */}
           <div className="space-y-1">
            <p className="text-sm text-gray-300">Potential revenue loss saved </p>
            <p className="text-4xl md:text-5xl font-bold text-white">₹1.5-2 Cr</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-gray-300">Enabled centralized</p>
            <p className="text-2xl md:text-3xl font-bold text-white">Management Oversight</p>
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
                  Catalog centralization &amp; team sync
                </p>
                <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                  <span className="font-semibold text-purple-400">Digitized </span> the full product catalog and ensured all sales employees stayed
                   <span className="font-semibold text-purple-400"> updated </span> through a <span className="font-semibold text-purple-400"> single source of truth.</span>
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
                  Management visibility
                </p>
                <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                  <span className="font-semibold text-purple-400">Designed </span> custom admin dashboard for <span className="font-semibold text-purple-400"> centralized tracking </span>
                   of enquiries, orders, and pendencies with <span className="font-semibold text-purple-400">real-time updates</span>.
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
                  Sales enablement &amp; adoption
                </p>
                <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                  <span className="font-semibold text-purple-400">Built an intuitive </span> mobile
                   and web <span className="font-semibold text-purple-400"> interface</span> for the sales team to manage orders, access catalog, and track enquiries seamlessly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="pt-4 flex justify-center">
  <Link href="/work/satnamtrader">
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
