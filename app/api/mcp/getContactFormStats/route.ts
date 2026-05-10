// app/api/mcp/getContactFormStats/route.ts

import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { type } = body;

    // 🔐 Strict validation
    if (type !== "count") {
      return NextResponse.json(
        { error: "Invalid operation type" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("portfolioDB");

    // ✅ Read-only query
    const totalSubmissions = await db
      .collection("contacts")
      .countDocuments();

    // ✅ Structured output
    return NextResponse.json({
      totalSubmissions,
    });
  } catch (error) {
    console.error("MCP Tool Error:", error);

    return NextResponse.json(
      { error: "Failed to fetch contact form stats" },
      { status: 500 }
    );
  }
}