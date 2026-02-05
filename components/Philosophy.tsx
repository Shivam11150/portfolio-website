export default function Philosophy() {
  return (
    <section
      className="relative bg-black"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-purple-950/30 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 py-16 md:py-20">
        <div className="max-w-3xl">
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed">
            I believe good products are built through clear thinking, team collaboration, and thoughtful execution.
          </p>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-400 leading-relaxed">
            Here are a few examples of how I apply that in real work.
          </p>
        </div>
      </div>
    </section>
  );
}
