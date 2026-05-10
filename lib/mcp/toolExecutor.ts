// lib/mcp/toolExecutor.ts

export async function executeTool(toolName: string, input: any) {
  try {
    if (toolName === "getContactFormStats") {
      const response = await fetch(
        "http://localhost:3000/api/mcp/getContactFormStats",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(input),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Tool execution failed");
      }

      return data;
    }

    throw new Error("Unknown tool");
  } catch (error) {
    console.error("Tool Executor Error:", error);
    throw error;
  }
}