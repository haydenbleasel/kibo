import { readdirSync } from "node:fs";
import { readFile } from "node:fs/promises";
import path from "node:path";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type * as React from "react";
import { Project } from "ts-morph";
import { processFolderName } from "../../../../../lib/patterns";
import { ComponentPreview } from "./components/preview";

type Props = {
  params: Promise<{
    component: string;
    collection: string;
    comp: string;
  }>;
};

const basePath = path.join(process.cwd(), "../../packages/patterns");
const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
const baseUrl = `${protocol}://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { component, collection, comp } = await params;

  const title = `${processFolderName(component)} / ${processFolderName(collection)} / ${processFolderName(comp)} | Kibo UI`;
  const description = "A pattern from Kibo UI";
  const image = new URL("/patterns.png", baseUrl).toString();

  const metadata: Metadata = {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "Kibo UI Patterns",
        },
      ],
    },
    twitter: {
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
        },
      ],
      card: "summary_large_image",
    }
  };

  return metadata;
};

const ComponentCompPage = async ({ params }: Props) => {
  const { component, collection, comp } = await params;

  // Validate and load the component file
  const filePath = `${basePath}/${component}/${collection}/${comp}.tsx`;

  let content: string;
  let title: string;
  let Component: React.ComponentType;

  try {
    // Read the source code
    content = await readFile(filePath, "utf8");

    // Extract the title using ts-morph
    const project = new Project();
    project.addSourceFileAtPath(filePath);
    const sourceFile = project.getSourceFile(filePath);

    const titleDeclaration = sourceFile
      ?.getVariableDeclaration("title")
      ?.getInitializerOrThrow()
      .getText();

    title = titleDeclaration ? titleDeclaration.replaceAll('"', "") : comp;

    // Dynamically import the component
    const module = await import(
      `@repo/patterns/${component}/${collection}/${comp}`
    );
    Component = module.default;
  } catch {
    notFound();
  }

  return (
    <ComponentPreview
      code={content}
      collection={collection}
      component={component}
      title={title}
    >
      <Component />
    </ComponentPreview>
  );
};

export function generateStaticParams() {
  const componentsDirectory = readdirSync(basePath, {
    withFileTypes: true,
  });
  const components = componentsDirectory.filter((file) => file.isDirectory());

  const params: { component: string; collection: string; comp: string }[] = [];

  for (const component of components) {
    const collectionsDirectory = readdirSync(`${basePath}/${component.name}`, {
      withFileTypes: true,
    });
    const collections = collectionsDirectory.filter((file) =>
      file.isDirectory()
    );

    for (const collection of collections) {
      const files = readdirSync(
        `${basePath}/${component.name}/${collection.name}`,
        {
          withFileTypes: true,
        }
      );
      const componentFiles = files.filter(
        (file) => file.isFile() && file.name.endsWith(".tsx")
      );

      for (const file of componentFiles) {
        params.push({
          component: component.name,
          collection: collection.name,
          comp: file.name.replace(".tsx", ""),
        });
      }
    }
  }

  return params;
}

export default ComponentCompPage;
