import { readdir } from "node:fs/promises";
import { join } from "node:path";
import { track } from "@vercel/analytics/server";
import { type NextRequest, NextResponse } from "next/server";
import type { Registry } from "shadcn/schema";
import { getPackage } from "../../../lib/package";

const filteredPackages = ["shadcn-ui", "typescript-config", "patterns"];

export const GET = async (_: NextRequest) => {
  if (process.env.NODE_ENV === "production") {
    try {
      await track("Registry download", {
        component: "registry",
      });
    } catch (error) {
      console.error(error);
    }
  }

  const response: Registry = {
    name: "Kibo UI Registry",
    homepage: "https://www.kibo-ui.com/",
    items: [],
  };

  const packagesDir = join(process.cwd(), "..", "..", "packages");
  const packageDirectories = await readdir(packagesDir, { withFileTypes: true });

  const packageNames = packageDirectories
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
    .filter((name) => !filteredPackages.includes(name));

  for (const name of packageNames) {
    try {
      const pkg = await getPackage(name);

      response.items.push(pkg);
    } catch {
      // skip packages that fail
    }
  }

  return NextResponse.json(response);
};
