import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("portfolioDB");

    const leads = await db
      .collection("contacts")
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json(
      { leads },
      { status: 200 }
    );
  } catch (error) {
    console.error("Admin leads fetch error:", error);

    return NextResponse.json(
      { error: "Failed to fetch leads" },
      { status: 500 }
    );
  }
}
