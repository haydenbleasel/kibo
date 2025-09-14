import { readdir } from "node:fs/promises";
import { join } from "node:path";
import { track } from "@vercel/analytics/server";
import { type NextRequest, NextResponse } from "next/server";
import type { Registry } from "shadcn/schema";
import { getPackage } from "../../../lib/package";

type RegistryParams = {
  params: Promise<{ component: string }>;
};

export const GET = async (_: NextRequest, { params }: RegistryParams) => {
  const { component } = await params;

  if (!component.endsWith(".json")) {
    return NextResponse.json(
      { error: "Component must end with .json" },
      { status: 400 }
    );
  }

  const packageName = component.replace(".json", "");

  if (process.env.NODE_ENV === "production") {
    try {
      await track("Registry download", {
        component: packageName,
      });
    } catch (error) {
      console.error(error);
    }
  }

  if (packageName === "registry") {
    const response: Registry = {
      name: "registry",
      homepage: "https://www.kibo-ui.com/",
      items: [],
    };

    const packagesDir = join(process.cwd(), "..", "..", "packages");
    const packageDirectories = await readdir(packagesDir, {
      withFileTypes: true,
    });

    const packageNames = packageDirectories
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name)
      .filter((name) => name !== "shadcn-ui" && name !== "typescript-config");

    for (const name of packageNames) {
      try {
        const pkg = await getPackage(name);
        
        response.items.push(pkg);
      } catch {
        // skip packages that fail
      }
    }

    return NextResponse.json(response);
  }

  try {
    const pkg = await getPackage(packageName);

    return NextResponse.json(pkg);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to get package", details: error },
      { status: 500 }
    );
  }
};
