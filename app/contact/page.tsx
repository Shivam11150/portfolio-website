/*"use client";

import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();

  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      message,
    }),
  });

  if (response.ok) {
    alert("Message sent successfully!");
    setName("");
    setEmail("");
    setMessage("");
  } else {
    alert("Something went wrong.");
  }
}


  return (
    <main className="max-w-5xl mx-auto px-6 py-24">
      <h1 className="text-3xl font-bold">Contact</h1>

      <p className="mt-4 text-gray-600 max-w-2xl">
        Leave your details and I’ll get back to you.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-8 max-w-md space-y-4"
      >
        <div>
          <label className="block text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 w-full border px-3 py-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full border px-3 py-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">
            Message
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-1 w-full border px-3 py-2 rounded"
            rows={4}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded"
        >
          Send
        </button>
      </form>
      <p className="mt-4 text-gray-600 max-w-2xl">
        If you’d like to discuss a product problem, collaboration, or opportunity,
        feel free to reach out.
      </p>

      <div className="mt-8 space-y-2">
        <p>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:your@email.com"
            className="text-blue-600 underline"
          >
            your@email.com
          </a>
        </p>

        <p>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://linkedin.com"
            target="_blank"
            className="text-blue-600 underline"
          >
            linkedin.com/in/yourprofile
          </a>
        </p>
      </div>
    </main>
  );
}*/

"use client";

import { useState } from "react";
import { Mail, Linkedin, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    if (response.ok) {
      alert("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      alert("Something went wrong.");
    }
    setIsSubmitting(false);
  }

  return (
    <main className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              Get in <span className="text-purple-400">Touch</span>
            </h1>
            <p className="text-base md:text-lg text-gray-300 max-w-2xl">
              I'd love to hear from you. Whether you have a product idea, collaboration opportunity, or just want to chat about building products — reach out.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-8 md:py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Form Card */}
            <div className="rounded-2xl border border-white/10 bg-black/70 backdrop-blur p-8 space-y-6">
              <h2 className="text-2xl font-semibold text-white mb-6">
                Send a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Input */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-purple-950/20 border border-purple-900/30 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 focus:bg-purple-950/40 transition-all duration-200"
                    placeholder="Your name"
                    required
                  />
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-purple-950/20 border border-purple-900/30 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 focus:bg-purple-950/40 transition-all duration-200"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                {/* Message Textarea */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-purple-950/20 border border-purple-900/30 text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 focus:bg-purple-950/40 transition-all duration-200 resize-none"
                    placeholder="Tell me more about your idea or opportunity..."
                    rows={5}
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {!isSubmitting && <ArrowRight size={18} />}
                </button>
              </form>
            </div>

            {/* Contact Info Card */}
            <div className="rounded-2xl border border-white/10 bg-black/70 backdrop-blur p-8 space-y-8">
              <h2 className="text-2xl font-semibold text-white">
                Other Ways to Connect
              </h2>

              {/* Descriptive text */}
              <p className="text-base text-gray-300 leading-relaxed">
                If you'd prefer a direct line, here are other ways to reach me:
              </p>

              {/* Email Contact */}
              <a
                href="mailto:your@email.com"
                className="flex items-center gap-4 p-4 rounded-lg border border-white/10 hover:bg-purple-950/20 hover:border-purple-900/50 transition-all duration-200 group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-purple-950/25 flex items-center justify-center border border-purple-900/30 group-hover:bg-purple-950/40">
                  <Mail size={24} className="text-purple-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">Email</p>
                  <p className="text-base font-semibold text-white hover:text-purple-400 transition-colors">
                    your@email.com
                  </p>
                </div>
              </a>

              {/* LinkedIn Contact */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg border border-white/10 hover:bg-purple-950/20 hover:border-purple-900/50 transition-all duration-200 group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-purple-950/25 flex items-center justify-center border border-purple-900/30 group-hover:bg-purple-950/40">
                  <Linkedin size={24} className="text-purple-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">LinkedIn</p>
                  <p className="text-base font-semibold text-white hover:text-purple-400 transition-colors">
                    linkedin.com/in/yourprofile
                  </p>
                </div>
              </a>

              {/* Quick response note */}
              <div className="border-t border-white/10 pt-6">
                <p className="text-sm text-gray-400">
                  💡 <span className="text-gray-300">I typically respond within 24-48 hours. Looking forward to connecting!</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer spacing */}
      <div className="py-12" />
    </main>
  );
}
