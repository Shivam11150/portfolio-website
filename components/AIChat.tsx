"use client";

import { useState, useEffect, useRef } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function AIChat() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi I'm shivam's AI assistant👋 How can I help you today?" }
  ]);

  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const bottomRef = useRef<HTMLDivElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  // 🔹 Auto scroll on new message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // 🔹 Auto resize textarea
  const autoResize = () => {
    const el = textareaRef.current;
    if (!el) return;

    el.style.height = "auto";
    el.style.height = el.scrollHeight + "px";
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    // Reset textarea height after sending
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }

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
    <div className="flex flex-col h-full bg-zinc-900">

      {/* 🔥 Messages Area */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">

        {messages.map((msg, index) => (
          <div
            key={index}
            className={`max-w-[85%] px-4 py-2 rounded-2xl text-sm leading-relaxed ${
              msg.role === "user"
                ? "ml-auto bg-purple-600 text-white"
                : "bg-zinc-800 text-gray-200"
            }`}
          >
            {msg.content}
          </div>
        ))}

        {loading && (
          <div className="bg-zinc-800 px-4 py-2 rounded-2xl text-sm text-gray-400 w-fit animate-pulse">
            Thinking...
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* 🔥 Input Section */}
      <div className="border-t border-zinc-800 p-3">

        <div className="flex items-end gap-2">

          <textarea
  ref={textareaRef}
  value={input}
  onChange={(e) => {
    setInput(e.target.value);
    autoResize();
  }}
  placeholder="Ask about Shivam’s Projects, leadership style, or paste a job requirements to check fit…"
  className="
    flex-1
    bg-zinc-800
    text-white
    px-4
    py-3
    rounded-xl
    outline-none
    text-sm
    resize-none
    min-h-[60px]
    max-h-48
    overflow-y-auto
  "
  onKeyDown={(e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
            }}
          />

          <button
            onClick={sendMessage}
            className="
              bg-purple-600 hover:bg-purple-700
              px-4 py-2
              rounded-xl
              text-sm font-semibold
              transition-all
              active:scale-95
              h-fit
            "
          >
            Send
          </button>

        </div>
      </div>
    </div>
  );
}
