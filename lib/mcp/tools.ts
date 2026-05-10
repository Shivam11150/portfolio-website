// lib/mcp/tools.ts

export type MCPTool = {
  name: string;
  description: string;
  inputSchema: any;
  outputSchema: any;
};

export const tools: MCPTool[] = [
  {
    name: "getContactFormStats",
    description:
      "Use this tool when the user asks about contact form submissions count or statistics.",
    inputSchema: {
      type: "object",
      properties: {
        type: {
          type: "string",
          enum: ["count"],
          description: "Specify the type of stats required. Only 'count' is supported.",
        },
      },
      required: ["type"],
    },
    outputSchema: {
      type: "object",
      properties: {
        totalSubmissions: {
          type: "number",
          description: "Total number of contact form submissions.",
        },
      },
    },
  },
];