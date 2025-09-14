import { promises as fs, readdirSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import postcss from "postcss";
import postcssNested from "postcss-nested";
import type { RegistryItem } from 'shadcn/schema';

export const getPackage = async (packageName: string) => {
  const packageDir = join(process.cwd(), "..", "..", "packages", packageName);
  const packagePath = join(packageDir, "package.json");
  const packageJson = JSON.parse(await readFile(packagePath, "utf-8"));

  const kiboDependencies = Object.keys(packageJson.dependencies || {}).filter(
    (dep) => dep.startsWith("@repo") && dep !== "@repo/shadcn-ui"
  );

  const dependencies = Object.keys(packageJson.dependencies || {}).filter(
    (dep) =>
      !["react", "react-dom", "@repo/shadcn-ui", ...kiboDependencies].includes(
        dep
      )
  );

  const devDependencies = Object.keys(packageJson.devDependencies || {}).filter(
    (dep) =>
      ![
        "@repo/typescript-config",
        "@types/react",
        "@types/react-dom",
        "typescript",
      ].includes(dep)
  );

  const packageFiles = readdirSync(packageDir, { withFileTypes: true });
  const tsxFiles = packageFiles.filter(
    (file) => file.isFile() && file.name.endsWith(".tsx")
  );

  const cssFiles = packageFiles.filter(
    (file) => file.isFile() && file.name.endsWith(".css")
  );

  const files: RegistryItem["files"] = [];

  for (const file of tsxFiles) {
    const filePath = join(packageDir, file.name);
    const content = await fs.readFile(filePath, "utf-8");

    files.push({
      type: "registry:ui",
      path: file.name,
      content,
      target: `components/ui/kibo-ui/${packageName}/${file.name}`,
    });
  }

  const registryDependencies =
    files
      .map((f) => f.content)
      .join("\n")
      .match(/@\/components\/ui\/([a-z-]+)/g)
      ?.map((path) => path.split("/").pop())
      .filter((name): name is string => !!name) || [];

  for (const dep of kiboDependencies) {
    const pkg = dep.replace("@repo/", "");

    registryDependencies.push(`https://www.kibo-ui.com/r/${pkg}.json`);
  }

  const css: RegistryItem["css"] = {};

  for (const file of cssFiles) {
    const contents = await fs.readFile(join(packageDir, file.name), "utf-8");

    // Process CSS with PostCSS to handle nested selectors
    const processed = await postcss([postcssNested]).process(contents, {
      from: undefined,
    });

    // Parse the processed CSS and convert to JSON structure
    const ast = postcss.parse(processed.css);

    ast.walkAtRules("layer", (atRule) => {
      const layerName = `@layer ${atRule.params}`;
      css[layerName] = {};

      // First pass: process non-media rules
      atRule.walkRules((rule) => {
        // Skip rules that are inside media queries
        if (rule.parent && rule.parent.type === 'atrule' && (rule.parent as any).name === 'media') {
          return;
        }

        const selector = rule.selector;
        const ruleObj: Record<string, string> = {};

        // Process all declarations
        rule.walkDecls((decl) => {
          ruleObj[decl.prop] = decl.value;
        });

        if (Object.keys(ruleObj).length > 0) {
          css[layerName][selector] = ruleObj;
        }
      });

      // Second pass: process media query rules as top-level entries
      atRule.walkAtRules("media", (mediaRule) => {
        const mediaQuery = `@media ${mediaRule.params}`;

        // Create a top-level media query entry if it doesn't exist
        if (!css[layerName][mediaQuery]) {
          css[layerName][mediaQuery] = {};
        }

        mediaRule.walkRules((rule) => {
          const selector = rule.selector;
          const mediaObj: Record<string, string> = {};

          rule.walkDecls((decl) => {
            mediaObj[decl.prop] = decl.value;
          });

          if (Object.keys(mediaObj).length > 0) {
            // Store the selector inside the media query
            css[layerName][mediaQuery][selector] = mediaObj;
          }
        });
      });
    });
  }

  let type: RegistryItem["type"] = "registry:ui";

  if (!Object.keys(files).length && Object.keys(css).length) {
    type = "registry:style";
  }

  const response: RegistryItem = {
    $schema: "https://ui.shadcn.com/schema/registry-item.json",
    name: packageName,
    type,
    title: packageName,
    description: packageJson.description,
    author: "Hayden Bleasel <hello@haydenbleasel.com>",
    dependencies,
    devDependencies,
    registryDependencies,
    files,
    css,
  };

  return response;
};
