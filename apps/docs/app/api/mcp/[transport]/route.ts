import { readdir } from "node:fs/promises";
import { join } from "node:path";
import { track } from "@vercel/analytics/server";
import { createMcpHandler } from "mcp-handler";
import { z } from "zod";
import { getPackage } from "../../../../lib/package";

const internalPackages = ["shadcn-ui", "typescript-config"];
const components = (
  await readdir(join(process.cwd(), "..", "..", "packages"), {
    withFileTypes: true,
  })
).filter(
  (component) =>
    component.isDirectory() && !internalPackages.includes(component.name)
);

const componentNames = components.map((c) => c.name);

const handler = createMcpHandler(
  (server) => {
    server.tool(
      "getComponents",
      "Provides a list of all Kibo UI components.",
      {},
      async () => {
        if (process.env.NODE_ENV === "production") {
          try {
            await track("MCP: Get components");
          } catch (error) {
            console.error(error);
          }
        }

        return {
          content: [{ type: "text", text: JSON.stringify(componentNames) }],
        };
      }
    );

    server.tool(
      "getComponent",
      "Provides information about a Kibo UI component.",
      { component: z.enum(componentNames as [string, ...string[]]) },
      async ({ component }) => {
        const file = components.find((c) => c.name === component);

        if (!file) {
          return {
            content: [
              { type: "text", text: `Component ${component} not found` },
            ],
          };
        }

        if (process.env.NODE_ENV === "production") {
          try {
            await track("MCP: Get component", {
              component,
            });
          } catch (error) {
            console.error(error);
          }
        }

        const pkg = await getPackage(component);

        return {
          content: [{ type: "text", text: JSON.stringify(pkg) }],
        };
      }
    );
  },
  {},
  {
    disableSse: true,
    basePath: "/api/mcp",
    maxDuration: 60,
    verboseLogs: true,
  }
);

export { handler as GET, handler as POST };
