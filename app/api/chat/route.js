import OpenAI from "openai";
import { siteData } from "@/lib/siteData";

const groq = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

export async function POST(req) {
  try {
    const body = await req.json();
    const message = body.message;

    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
  {
    role: "system",
    content: `
           You are an AI assistant for Shivam's portfolio website.
           Only answer based on the following data:

          ${siteData}

           If the question is unrelated, politely say you only answer about Shivam and suggest to directly contact to shivam.`
  },
  { role: "user", content: message }
],
    });

    return new Response(
      JSON.stringify({
        reply: completion.choices[0].message.content,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );

  } catch (error) {
    console.error("Groq API Error:", error);

    return new Response(
      JSON.stringify({ reply: "Something went wrong." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
