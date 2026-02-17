export default function Footer() {
  return (
    <footer className="border-t border-purple-500/20 bg-black text-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col items-center text-center space-y-6">
        
        <div>
          <h2 className="text-xl font-semibold text-white">
            Shivam Somya<span className="text-purple-500">.</span>
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Building products from idea to impact.
          </p>
        </div>

        <p className="text-sm text-gray-400">
          Let’s connect and build something meaningful.
        </p>

        <div className="flex items-center gap-6 text-sm font-medium">
          <a
            href="https://linkedin.com/in/YOUR-LINK"
            target="_blank"
            className="hover:text-purple-400 transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-gray-600">|</span>
          <a
            href="mailto:your@email.com"
            className="hover:text-purple-400 transition-colors"
          >
            Email
          </a>
        </div>

        <p className="text-xs text-gray-500 pt-6 border-t border-purple-500/10 w-full">
          © 2026 Shivam Somya. Built with clarity and purpose.
        </p>
      </div>
    </footer>
  );
}
