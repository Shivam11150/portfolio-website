"use client";

import { useState, useEffect, useRef } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function AIChat() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi 👋 How can I help you today?" }
  ]);
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();

      setMessages(prev => [
        ...prev,
        { role: "assistant", content: data.reply }
      ]);

    } catch (error) {
      setMessages(prev => [
        ...prev,
        { role: "assistant", content: "Something went wrong." }
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col h-full bg-zinc-900 rounded-xl">

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`max-w-[80%] px-4 py-2 rounded-lg text-sm ${
              msg.role === "user"
                ? "ml-auto bg-purple-600 text-white"
                : "bg-zinc-800 text-gray-200"
            }`}
          >
            {msg.content}
          </div>
        ))}

        {loading && (
          <div className="bg-zinc-800 px-4 py-2 rounded-lg text-sm text-gray-400">
            Thinking...
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      <div className="border-t border-zinc-800 p-3 flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 bg-zinc-800 text-white px-3 py-2 rounded-md outline-none text-sm"
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-md text-sm font-semibold"
        >
          Send
        </button>
      </div>
    </div>
  );
}
