import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { Project } from "ts-morph";
import { processFolderName } from "../../../lib/patterns";
import { CompsSidebarClient } from "./client";

const basePath = path.join(process.cwd(), "../../packages/patterns");

const directory = readdirSync(basePath, {
  withFileTypes: true,
});
const components = directory.filter(
  (file) => file.isDirectory() && file.name !== "node_modules"
);

const pages: {
  name: string;
  items?: {
    name: string;
    url: string;
    content: string;
  }[];
  subgroups?: {
    name: string;
    items: {
      name: string;
      url: string;
      content: string;
    }[];
  }[];
}[] = [];

for (const component of components) {
  const files = readdirSync(`${basePath}/${component.name}`, {
    withFileTypes: true,
  });

  const subdirectories = files.filter((file) => file.isDirectory());
  const componentFiles = files.filter(
    (file) => file.isFile() && file.name.endsWith(".tsx")
  );

  // If there are subdirectories, create subgroups
  if (subdirectories.length > 0) {
    const subgroups: {
      name: string;
      items: {
        name: string;
        url: string;
        content: string;
      }[];
    }[] = [];

    for (const subdir of subdirectories) {
      const subItems: {
        name: string;
        url: string;
        content: string;
      }[] = [];

      const subFiles = readdirSync(
        `${basePath}/${component.name}/${subdir.name}`,
        { withFileTypes: true }
      );
      const subComponentFiles = subFiles.filter(
        (file) => file.isFile() && file.name.endsWith(".tsx")
      );

      for (const file of subComponentFiles) {
        const content = readFileSync(
          `${basePath}/${component.name}/${subdir.name}/${file.name}`,
          "utf8"
        );

        const project = new Project();
        project.addSourceFileAtPath(
          `${basePath}/${component.name}/${subdir.name}/${file.name}`
        );

        const title = project
          .getSourceFile(
            `${basePath}/${component.name}/${subdir.name}/${file.name}`
          )
          ?.getVariableDeclaration("title")
          ?.getInitializerOrThrow()
          .getText();

        subItems.push({
          name: title ? title.replaceAll('"', "") : file.name,
          url: `/patterns/${component.name}/${subdir.name}/${file.name.replace(".tsx", "")}`,
          content,
        });
      }

      subgroups.push({
        name: processFolderName(subdir.name),
        items: subItems,
      });
    }

    pages.push({
      name: processFolderName(component.name),
      subgroups,
    });
  } else {
    // Flat structure
    const items: {
      name: string;
      url: string;
      content: string;
    }[] = [];

    for (const file of componentFiles) {
      const content = readFileSync(
        `${basePath}/${component.name}/${file.name}`,
        "utf8"
      );

      const project = new Project();
      project.addSourceFileAtPath(`${basePath}/${component.name}/${file.name}`);

      const title = project
        .getSourceFile(`${basePath}/${component.name}/${file.name}`)
        ?.getVariableDeclaration("title")
        ?.getInitializerOrThrow()
        .getText();

      items.push({
        name: title ? title.replaceAll('"', "") : file.name,
        url: `/patterns/${component.name}/${file.name.replace(".tsx", "")}`,
        content,
      });
    }

    pages.push({
      name: component.name,
      items,
    });
  }
}

export const CompsSidebar = () => <CompsSidebarClient pages={pages} />;
