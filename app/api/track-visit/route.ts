export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { sendTelegramMessage } from "@/lib/telegram";

export async function POST() {
  const headersList = await headers();

  let ip =
    headersList.get("x-forwarded-for") ||
    headersList.get("x-real-ip") ||
    "Unknown";

  if (ip.includes(",")) {
    ip = ip.split(",")[0].trim();
  }

  if (ip.startsWith("::ffff:")) {
    ip = ip.replace("::ffff:", "");
  }

  let locationText = "Location not found";

  try {
    const res = await fetch(`https://ipwho.is/${ip}`);
    const data = await res.json();

    if (data.success) {
      locationText = `${data.city}, ${data.country}`;
    }
  } catch (error) {
    console.log("Location fetch error:", error);
  }

  await sendTelegramMessage(
    `👀 Koi aaya \nIP: ${ip}\n📍 Location: ${locationText}`
  );

  return NextResponse.json({ success: true });
}
