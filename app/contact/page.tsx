"use client";

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
}

