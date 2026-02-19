import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { sendTelegramMessage } from "@/lib/telegram";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // 🔎 Basic Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("portfolioDB");

    // 💾 Save to Database
    const result = await db.collection("contacts").insertOne({
      name,
      email,
      message,
      createdAt: new Date(),
    });

    // 📲 Send Telegram Notification (after DB success)
    await sendTelegramMessage(
      `🚀 New Contact Form Submission!

👤 Name: ${name}
📧 Email: ${email}

📝 Message:
${message}

🕒 ${new Date().toLocaleString()}`
    );

    return NextResponse.json(
      { success: true },
      { status: 200 }
    );

  } catch (error) {
    console.error("Contact API Error:", error);

    return NextResponse.json(
      { success: false, error: "Something went wrong" },
      { status: 500 }
    );
  }
}
