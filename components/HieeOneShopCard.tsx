import Link from "next/link";
import Image from "next/image"

export default function HieeOneShopCard() {
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
      <div className="space-y-2">
        <h3 className="text-xl md:text-2xl font-semibold text-white">
          HieeOneShop — B2B Business Chat &amp; Commerce App
        </h3>

        <p className="text-sm md:text-base text-purple-400 font-medium">
          Product Manager&nbsp;&nbsp;|&nbsp;&nbsp;0 → 1 → Scale
        </p>
      </div>

      {/* Product description */}
      <p className="text-sm md:text-base text-gray-300 leading-relaxed">
        <span className="font-semibold text-white">Built and scaled</span> a B2B product helping businesses manage operations and
        customer communication — from <span className="font-semibold text-purple-500">MVP</span> to real, <span className="font-semibold text-purple-500">paid users</span>.
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
            <p className="text-sm text-gray-300">Play store rating</p>
            <p className="text-4xl md:text-5xl font-bold text-white">4.7 ⭐</p>
          </div>

          {/* Bottom Left: Available on */}
          <div className="space-y-3">
  <p className="text-sm text-gray-300">Available on</p>

  <div className="flex flex-wrap gap-4">

    {/* Play Store */}
    <Link href="https://play.google.com" target="_blank">
      <div className="hover:opacity-80 transition-all duration-200">
        <Image
          src="/images/store/playstore.png"
          alt="Get it on Google Play"
          width={50}
          height={16}
          className="object-contain"
        />
      </div>
    </Link>

    {/* App Store */}
    <Link href="https://apps.apple.com" target="_blank">
      <div className="hover:opacity-80 transition-all duration-200">
        <Image
          src="/images/store/appstore.png"
          alt="Download on the App Store"
          width={50}
          height={16}
          className="object-contain"
        />
      </div>
    </Link>

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
                  Understanding user problems , Business constraints and – <span className="font-semibold text-purple-400"> what to build.</span>
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
                  Translating requirements into clear flows, 
                  how to build <span className="font-semibold text-purple-400">–  and executed building.</span>
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
                  Product launch, GTM execution, User feed back 
                  --<span className="font-semibold text-purple-400"> scaling and improvement in progress.</span> 

                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="pt-4 flex justify-center">
        <Link href="/work/hieeoneshop">
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
