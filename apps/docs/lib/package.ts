import { promises as fs, readdirSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export type RegistryItemSchema = {
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  name: string
  type:
    | "registry:lib"
    | "registry:block"
    | "registry:component"
    | "registry:ui"
    | "registry:hook"
    | "registry:theme"
    | "registry:page"
    | "registry:file"
    | "registry:style"
    | "registry:item";
  description: string
  title: string
  author: string
  dependencies?: string[]
  devDependencies?: string[]
  registryDependencies?: string[]
  files: {
    path?: string
    content?: string
    type?:
      | "registry:lib"
      | "registry:block"
      | "registry:component"
      | "registry:ui"
      | "registry:hook"
      | "registry:theme"
      | "registry:page"
      | "registry:file"
      | "registry:style"
      | "registry:item";
    target?: string
  }[]
  tailwind?: {
    config?: {
      content?: string[]
      theme?: Record<string, string>
      plugins?: string[]
    }
  }
  cssVars?: {
    theme?: Record<string, string>
    light?: Record<string, string>
    dark?: Record<string, string>
  }
  css?: Record<string, object>
  envVars?: Record<string, string>
  meta?: Record<string, unknown>
  docs?: string
  categories?: string[]
  extends?: string
}

export const getPackage = async (packageName: string) => {
  const packageDir = join(process.cwd(), '..', '..', 'packages', packageName);
  const packagePath = join(packageDir, 'package.json');
  const packageJson = JSON.parse(await readFile(packagePath, 'utf-8'));

  const kiboDependencies = Object.keys(packageJson.dependencies || {}).filter(
    (dep) => dep.startsWith('@repo') && dep !== '@repo/shadcn-ui'
  );

  const dependencies = Object.keys(packageJson.dependencies || {}).filter(
    (dep) =>
      !['react', 'react-dom', '@repo/shadcn-ui', ...kiboDependencies].includes(
        dep
      )
  );

  const devDependencies = Object.keys(packageJson.devDependencies || {}).filter(
    (dep) =>
      ![
        '@repo/typescript-config',
        '@types/react',
        '@types/react-dom',
        'typescript',
      ].includes(dep)
  );

  const packageFiles = readdirSync(packageDir, { withFileTypes: true });
  const tsxFiles = packageFiles.filter(
    (file) => file.isFile() && file.name.endsWith('.tsx')
  );

  const files: RegistryItemSchema['files'] = [];

  const fileContents = await Promise.all(
    tsxFiles.map(async (file) => {
      const filePath = join(packageDir, file.name);
      const content = await fs.readFile(filePath, 'utf-8');

      const registryFile: RegistryItemSchema['files'][number] = {
        type: 'registry:ui',
        path: file.name,
        content,
        target: `components/ui/kibo-ui/${packageName}/${file.name}`,
      };

      return registryFile;
    })
  );

  files.push(...fileContents);

  const registryDependencies =
    files
      .map((f) => f.content)
      .join('\n')
      .match(/@\/components\/ui\/([a-z-]+)/g)
      ?.map((path) => path.split('/').pop())
      .filter((name): name is string => !!name) || [];

  for (const dep of kiboDependencies) {
    const pkg = dep.replace('@repo/', '');

    registryDependencies.push(
      `https://www.kibo-ui.com/registry/${pkg}.json`
    );
  }

  const response: RegistryItemSchema = {
    "$schema": "https://ui.shadcn.com/schema/registry-item.json",
    name: packageName,
    type: 'registry:ui',
    title: packageName,
    description: packageJson.description,
    author: 'Hayden Bleasel <hello@haydenbleasel.com>',
    dependencies,
    devDependencies,
    registryDependencies,
    files,
  };

  return response;
};
