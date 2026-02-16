

"use client";

import { useState } from "react";
import { Mail, Linkedin, ArrowRight } from "lucide-react";
import Image from "next/image";
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
    <main className="bg-black text-white min-h-screen w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-4 md:py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
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
      <section className="py-4 md:py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8">
            
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
                    placeholder="Hi ! What should I call you?"
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
                    placeholder="Drop your email — I’ll reply here"
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
                    placeholder="Tell me how I can help..."
                    rows={5}
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 
                  active:scale-95 
                         active:bg-purple-500/20
                  disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
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
                Here are some other ways to reach me..!!
              </p>

              {/* Email Contact */}
    <div className="flex items-center gap-3 mt-2">
  <Image
      src="/images/gmail.png"
      alt="Gmail"
      width={36}
      height={36}
      className="object-contain"
    />

  <a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=shivamsomya.pm@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
    className="font-medium text-sm sm:text-base text-white hover:text-purple-400
    active:scale-95 
    
    transition-colors break-all"
  >
    
    shivamsomya.pm@gmail.com
  </a>
</div>



              {/* LinkedIn Contact */}
  <div className="flex items-center gap-3 mt-2">
  <Image
      src="/images/linkedin.png"
      alt="LinkedIn"
      width={36}
      height={36}
      className="object-contain"
    />

  <a
    href= "https://www.linkedin.com/in/shivamsomya?utm_source=share_via&utm_content=profile&utm_medium=member_android"
    target="_blank"
    rel="noopener noreferrer"
    className="font-medium text-sm sm:text-base text-white hover:text-purple-400 
    active:scale-95 
     transition-colors break-all"
  >
    
    linkedin.com/in/shivamsomya
  </a>
</div>


              {/* Quick response note */}
              <div className="border-t border-white/10 pt-6">
                <p className="text-sm text-gray-400">
                  💡 <span className="text-gray-300"> It was a pleasure connecting with you — looking forward to staying in touch. I typically respond ASAP.</span>
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
