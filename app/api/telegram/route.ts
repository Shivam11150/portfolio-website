import { NextResponse } from "next/server";
import { sendTelegramMessage } from "@/lib/telegram";

export async function GET() {
  await sendTelegramMessage("🚀 Telegram Test Successful!");

  return NextResponse.json({ success: true });
}
