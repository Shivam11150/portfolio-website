
"use client";

import { useState } from "react";
import AIChat from "./AIChat";
import { Sparkles, X } from "lucide-react";

export default function ChatWidget() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      {/* Floating Button */}
    {!open && (
  <button
    onClick={() => setOpen(true)}
    className="
      fixed bottom-6 right-6
      flex items-center gap-2
      bg-cyan-500
      hover:bg-cyan-400
      text-black
      px-6 py-3
      rounded-full
      z-50
      font-semibold
      text-sm
      animate-aiGlow
      active:scale-95
      transition-all
    "
  >
    <Sparkles size={18}  />
    Ask AI
  </button>
)}
      {/* Modal Overlay */}
      <div
        className={`
          fixed inset-0 
          bg-black/60 backdrop-blur-sm 
          flex items-end md:items-center justify-center 
          z-50 transition-all duration-300
          ${open ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      >
        {/* Modal Container */}
        <div
          className={`
            relative
            w-full
            sm:w-[480px]
            md:w-[550px]
            lg:w-[650px]
            h-[85vh]
            md:h-[75vh]
            bg-zinc-900
            rounded-t-2xl md:rounded-2xl
            shadow-2xl
            overflow-hidden
            transform transition-all duration-300
            ${open ? "translate-y-0 scale-100" : "translate-y-5 scale-95"}
          `}
        >
          {/* Close Button */}
          <button
            onClick={() => setOpen(false)}
            className="
              absolute top-3 right-3 
              text-gray-400 hover:text-white 
              transition-colors
            "
          >
            <X size={20} />
          </button>

          <AIChat />
        </div>
      </div>
    </>
  );
}
