import OpenAI from "openai";
import { portfolioData } from "@/lib/portfolioData";
import { executeTool } from "@/lib/mcp/toolExecutor";

const groq = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

// -----------------------------
// 🔍 Intent Detection
// -----------------------------
function detectIntent(message: string) {
  const lower = message.toLowerCase();

  if (
    lower.includes("submissions") ||
    lower.includes("contact form") ||
    lower.includes("leads")
  ) {
    return "mcp";
  }

  if (
    lower.includes("job description") ||
    lower.includes("jd") ||
    lower.includes("hiring")
  ) {
    return "jd";
  }

  if (
    lower.includes("best fit") ||
    lower.includes("why should") ||
    lower.includes("hire you")
  ) {
    return "bestFit";
  }

  if (
    lower.includes("case study") ||
    lower.includes("project")
  ) {
    return "caseStudy";
  }

  if (
    lower.includes("contact") ||
    lower.includes("email") ||
    lower.includes("reach")
  ) {
    return "contact";
  }

  return "general";
}

// -----------------------------
// 🧠 Context Builder
// -----------------------------
function buildContext(intent: string) {
  if (intent === "mcp") {
    return `
If the user asks about contact form submissions count,
you must call the tool instead of answering manually.
    `;
  }

  // 🔹 Existing logic preserved
  return `
Profile Summary:
${portfolioData.about.professionalSummary}
  `;
}

// -----------------------------
// 🚀 API Route (MCP Enabled)
// -----------------------------
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const userMessage = body.message;

    const intent = detectIntent(userMessage);
    const context = buildContext(intent);

    // 🔹 Tool Instruction Layer
    const toolInstructions = `
You have access to this tool:

Tool Name: getContactFormStats
Purpose: Fetch total contact form submission count.

If the user asks about submission count,
return ONLY this JSON format:

{
  "tool": "getContactFormStats",
  "input": { "type": "count" }
}

Do NOT explain anything.
If no tool needed, answer normally.
`;

    // 🔹 First AI Call (Tool Decision Stage)
    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        { role: "system", content: toolInstructions },
        { role: "system", content: `Context:\n${context}` },
        { role: "user", content: userMessage },
      ],
    });

    const aiReply = completion.choices[0].message.content ?? "";

    // 🔹 Try parsing tool call
    let parsed;
    try {
      parsed = JSON.parse(aiReply);
    } catch {
      parsed = null;
    }

    // 🔹 If tool call detected
    if (parsed && parsed.tool === "getContactFormStats") {
      const toolResult = await executeTool(parsed.tool, parsed.input);

      // 🔹 Second AI Call (Natural Language Stage)
      const finalCompletion = await groq.chat.completions.create({
        model: "llama-3.1-8b-instant",
        messages: [
          {
            role: "system",
            content:
              "Generate a natural professional answer based on the tool result.",
          },
          {
            role: "user",
            content: `Tool result: ${JSON.stringify(toolResult)}`,
          },
        ],
      });

      return new Response(
        JSON.stringify({
          reply: finalCompletion.choices[0].message.content,
        }),
        { status: 200 }
      );
    }

    // 🔹 Normal reply
    return new Response(
      JSON.stringify({ reply: aiReply }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Chat API Error:", error);

    return new Response(
      JSON.stringify({ reply: "Something went wrong." }),
      { status: 500 }
    );
  }
}




/*
import OpenAI from "openai";
import portfolioData from "@/lib/portfolioData";

const groq = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

// 🔍 Intent Detection
function detectIntent(message: string) {
  const lower = message.toLowerCase();

  if (
    lower.includes("job description") ||
    lower.includes("jd") ||
    lower.includes("hiring")
  ) {
    return "jd";
  }

  if (
    lower.includes("best fit") ||
    lower.includes("why should") ||
    lower.includes("hire you")
  ) {
    return "bestFit";
  }

  if (lower.includes("case study") || 
       lower.includes("work experience") ||
       lower.includes("project")) {
    return "caseStudy";
  }

  if (
    lower.includes("contact") ||
    lower.includes("email") ||
    lower.includes("reach")
  ) {
    return "contact";
  }

  return "general";
}

// 🧠 Context Builder
function buildContext(intent: string) {
  switch (intent) {
    case "jd":
      return `
Candidate Profile:
${JSON.stringify(portfolioData.about)}

Skills:
${JSON.stringify(portfolioData.skills)}

Case Studies:
${JSON.stringify(portfolioData.caseStudies)}
      `;

    case "bestFit":
      return `
Candidate Profile:
${JSON.stringify(portfolioData.about)}

Skills:
${JSON.stringify(portfolioData.skills)}

Key Projects:
${JSON.stringify(portfolioData.caseStudies)}
      `;

    case "caseStudy":
  return portfolioData.caseStudies
    .map((cs, index) => `
Project ${index + 1}: ${cs.title}

Role: ${cs.role}

Problem:
${cs.problem}

Solution:
${cs.solution}

Key Contributions:
${cs.myContribution.join("\n- ")}

Key Deliverables:
${cs.keyDeliverables.join("\n- ")}

Skills Used:
${cs.skillsUsed.join(", ")}

Outcome:
${cs.outcome}
`)
    .join("\n\n");

      return `
Projects:
${JSON.stringify(portfolioData.caseStudies)}
      `;

    case "contact":
      return `
Contact Information:
${JSON.stringify(portfolioData.contact)}
      `;

    default:
      return `
Profile Summary:
${JSON.stringify(portfolioData.about)}

Skills:
${JSON.stringify(portfolioData.skills)}
      `;
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const userMessage = body.message;

    const intent = detectIntent(userMessage);
    const context = buildContext(intent);

    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "system",
          content: `
You are an AI assistant for Shivam's professional portfolio.

Strict Rules:
- Answer ONLY using the provided context.
 When explaining a case study, provide structured explanation including problem, solution, contribution, skills, and outcome.
- Do NOT invent information.
- If information is not available,suggest directly contacting Shivam.
- Be professional, structured, and concise.
- For JD or best-fit queries, explicitly reference relevant experience.
          `,
        },
        {
          role: "system",
          content: `Context:\n${context}`,
        },
        {
          role: "user",
          content: userMessage,
        },
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
}*/
