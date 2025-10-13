import { readdir } from "node:fs/promises";
import { join } from "node:path";
import { track } from "@vercel/analytics/server";
import { notFound } from "next/navigation";
import { type NextRequest, NextResponse } from "next/server";
import { getPackage } from "../../../lib/package";

type RegistryParams = {
  params: Promise<{ component: string }>;
};

const filteredPackages = ["shadcn-ui", "typescript-config", "patterns"];

export const GET = async (_: NextRequest, { params }: RegistryParams) => {
  const { component } = await params;

  if (!component.endsWith(".json")) {
    return NextResponse.json(
      { error: "Component must end with .json" },
      { status: 400 }
    );
  }

  const packageName = component.replace(".json", "");

  if (filteredPackages.includes(packageName)) {
    notFound();
  }

  if (process.env.NODE_ENV === "production") {
    try {
      await track("Registry download", {
        component: packageName,
      });
    } catch (error) {
      console.error(error);
    }
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

export const generateStaticParams = async () => {
  const packagesDir = join(process.cwd(), "..", "..", "packages");
  const packageDirectories = await readdir(packagesDir, {
    withFileTypes: true,
  });

  return packageDirectories
    .map((dirent) => dirent.name)
    .filter((name) => !filteredPackages.includes(name))
    .map((name) => ({ component: name }));
};
