import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { sendTelegramMessage } from "@/lib/telegram";

export async function POST() {
  console.log("TRACK VISIT HIT");

  const headersList = await headers();
  const forwarded = headersList.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0] : "Unknown";

  await sendTelegramMessage(`👀 New Visitor\nIP: ${ip}`);

  return NextResponse.json({ success: true });
}
