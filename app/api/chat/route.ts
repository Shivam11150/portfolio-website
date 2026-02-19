import OpenAI from "openai";
import { portfolioData } from "@/lib/portfolioData";

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
    lower.includes("project") ||
    lower.includes("hieeoneshop") ||
    lower.includes("creative garments") ||
    lower.includes("kishan mitro") ||
    lower.includes("st brands")
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
// 🧠 Context Builder (Readable Format)
// -----------------------------
function buildContext(intent: string) {
  switch (intent) {

    case "caseStudy":
      return portfolioData.caseStudies
        .map((cs, index) => `
Project ${index + 1}: ${cs.title}

Role: ${cs.role}
Stage: ${cs.stage ?? "N/A"}

Problem:
${cs.problem}

Solution:
${cs.solution}

My Contribution:
- ${cs.myContribution.join("\n- ")}

Key Deliverables:
- ${cs.keyDeliverables.join("\n- ")}

Skills Used:
${cs.skillsUsed.join(", ")}

Outcome:
${cs.outcome}

----------------------------------------
`)
        .join("\n");

    case "jd":
      return `
Candidate Profile:
${portfolioData.about.professionalSummary}

Core Strengths:
${portfolioData.about.coreStrengths?.join(", ") ?? ""}

Skills:
${Object.values(portfolioData.skills)
  .map((section: any) => section.coreCapabilities?.join(", "))
  .join(", ")}

Relevant Case Studies:
${portfolioData.caseStudies
  .map((cs) => `${cs.title} → ${cs.outcome}`)
  .join("\n")}
      `;

    case "bestFit":
      return `
Candidate Profile:
${portfolioData.about.professionalSummary}

Core Strengths:
${portfolioData.about.coreStrengths?.join(", ") ?? ""}

Full Skills:
${Object.values(portfolioData.skills)
  .map((section: any) => section.coreCapabilities?.join(", "))
  .join(", ")}

Project Evidence:
${portfolioData.caseStudies
  .map((cs) => `
${cs.title}
Role: ${cs.role}
Impact: ${cs.outcome}
`)
  .join("\n")}
      `;

    case "contact":
      return `
Contact Information:
${portfolioData.contact.callToAction}
      `;

    default:
      return `
Profile Summary:
${portfolioData.about.professionalSummary}

Core Strengths:
${portfolioData.about.coreStrengths?.join(", ") ?? ""}

Skills Overview:
${Object.values(portfolioData.skills)
  .map((section: any) => section.coreCapabilities?.join(", "))
  .join(", ")}
      `;
  }
}

// -----------------------------
// 🚀 API Route
// -----------------------------
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
- Your role is fixed as portfolio assistant, dont help with anything else.
- Do NOT invent information.
- If information is missing, clearly state that.
- Be structured and professional.
- When explaining case studies, include:
  Problem → Solution → Contribution → Skills → Outcome
- For JD or best-fit queries, explicitly reference relevant experience and measurable impact.
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
