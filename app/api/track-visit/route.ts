import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { sendTelegramMessage } from "@/lib/telegram";

export async function POST() {
  const headersList = await headers();
  const forwarded = headersList.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0] : "Unknown";

  let locationText = "Location not found";

  try {
    const res = await fetch(`https://ipapi.co/${ip}/json/`);
    const data = await res.json();

    console.log("Location API response:", data); // 👈 Add this

    const city = data.city;
    const country = data.country_name;

    if (city && country) {
      locationText = `${city}, ${country}`;
    }
  } catch (error) {
    console.log("Location fetch error:", error);
  }

  await sendTelegramMessage(
    `👀 New Visitor\nIP: ${ip}\n📍 Location: ${locationText}`
  );

  return NextResponse.json({ success: true });
}


{/*
export async function POST() {
  const headersList = await headers();
  const forwarded = headersList.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0] : "Unknown";

  let locationText = "Location not found";

  try {
    const res = await fetch(`https://ipapi.co/${ip}/json/`);
    const data = await res.json();

    const city = data.city;
    const country = data.country_name;

    locationText = `${city}, ${country}`;
  } catch (error) {
    console.log("Location fetch error:", error);
  }

  await sendTelegramMessage(
    `👀 New Visitor\nIP: ${ip}\n📍 Location: ${locationText}`
  );

  return NextResponse.json({ success: true });
}  */}
