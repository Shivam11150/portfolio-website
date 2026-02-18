"use client";

import { useState } from "react";
import AIChat from "./AIChat";
import { MessageCircle, X } from "lucide-react";

export default function ChatWidget() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-full shadow-lg z-50"
        >
          <MessageCircle size={22} />
        </button>
      )}

      {open && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-end md:items-center justify-center z-50">

          <div className="relative w-full md:w-[400px] h-[80vh] md:h-[600px] bg-zinc-900 rounded-t-xl md:rounded-xl shadow-2xl overflow-hidden">

            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              <X size={20} />
            </button>

            <AIChat />
          </div>
        </div>
      )}
    </>
  );
}
