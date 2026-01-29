import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    const client = await clientPromise;
    const db = client.db("portfolioDB");

    await db.collection("contacts").insertOne({
      name,
      email,
      message,
      createdAt: new Date(),
    });

    return NextResponse.json(
      { success: true },
      { status: 200 }
    );
  } catch (error) {
    console.error("Database error:", error);

    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}
