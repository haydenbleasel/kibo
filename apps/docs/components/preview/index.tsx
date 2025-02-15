import {
  SandboxCodeEditor,
  SandboxConsole,
  SandboxFileExplorer,
  SandboxLayout,
  SandboxPreview,
  SandboxTabs,
  SandboxTabsContent,
  SandboxTabsList,
  SandboxTabsTrigger,
} from '@repo/sandbox';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@repo/shadcn-ui/components/ui/resizable';
import { AppWindowIcon, CodeIcon, TerminalIcon } from 'lucide-react';
import { content } from './content';
import { PreviewProvider } from './provider';
import { tsconfig } from './tsconfig';
import { utils } from './utils';
import { V0Button } from './v0-button';

type ComponentModule = {
  name: string;
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
  files?: { content: string }[];
};

type RegistryItem = {
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
  registryDependencies?: Record<string, string>;
  files?: { path: string; content: string }[];
};

type PreviewProps = {
  name: string;
  code: string;
  dependencies?: Record<string, string>;
};

// Caches to avoid repeated imports
const componentModuleCache = new Map<string, ComponentModule>();
const registryCache = new Map<string, RegistryItem>();

// Regexes to parse dependencies, registry, and components
const dependencyRegex = /^(.+?)(?:@(.+))?$/;
const registryRegex = /@\/registry\/new-york\/ui\//g;
const kiboRegex = /@\/components\/ui\/(?!kibo-ui\/)([^'"\s]+)/g;

const parseDependencyVersion = (dependency: string) => {
  const [name, version] =
    (dependency as string).match(dependencyRegex)?.slice(1) ?? [];
  return { name, version: version ?? 'latest' };
};

const parseContent = (content: string) =>
  content.replace(registryRegex, '@/components/ui/');

const processDependencies = (
  deps: Record<string, string> | undefined,
  target: Record<string, string>
) => {
  if (!deps) {
    return;
  }

  for (const dep of Object.values(deps)) {
    const { name, version } = parseDependencyVersion(dep);
    target[name] = version;
  }
};

const processComponentModule = async (
  mod: ComponentModule,
  files: Record<string, string>,
  dependencies: Record<string, string>,
  devDependencies: Record<string, string>
) => {
  const componentContent = mod.files?.[0]?.content ?? '';
  files[`/components/ui/${mod.name}.tsx`] = parseContent(componentContent);

  // Parse the component content to find additional dependencies
  const nestedComponents = await parseShadcnComponents(componentContent);
  Object.assign(files, nestedComponents.files);
  Object.assign(dependencies, nestedComponents.dependencies);
  Object.assign(devDependencies, nestedComponents.devDependencies);

  processDependencies(mod.dependencies, dependencies);
  processDependencies(mod.devDependencies, devDependencies);
};

const parseShadcnComponents = async (str: string) => {
  const parsedString = parseContent(str);
  const matches = parsedString.match(kiboRegex);

  const result = {
    files: {} as Record<string, string>,
    dependencies: {} as Record<string, string>,
    devDependencies: {} as Record<string, string>,
  };

  if (!matches) {
    return result;
  }

  const components = [
    ...new Set(matches.map((m) => m.replace('@/components/ui/', ''))),
  ];

  await Promise.all(
    components.map(async (component) => {
      try {
        // Check cache first
        let mod = componentModuleCache.get(component);
        if (!mod) {
          mod = (await import(`./shadcn/${component}.json`)) as ComponentModule;
          componentModuleCache.set(component, mod);
        }

        await processComponentModule(
          mod,
          result.files,
          result.dependencies,
          result.devDependencies
        );
      } catch (error) {
        console.warn(`Failed to load shadcn component: ${component}`);
      }
    })
  );

  return result;
};

export const Preview = async ({
  name,
  code,
  dependencies: demoDependencies,
}: PreviewProps) => {
  const [packageName, componentName] = name.split('/');

  let registry = registryCache.get(packageName);
  if (!registry) {
    registry = (await import(
      `../../public/registry/${packageName}.json`
    )) as RegistryItem;
    registryCache.set(packageName, registry);
  }

  const [, initialParsedComponents] = await Promise.all([
    Promise.resolve(registry),
    parseShadcnComponents(code),
  ]);

  const { files, dependencies, devDependencies } = initialParsedComponents;

  // Set up initial files
  Object.assign(files, {
    '/App.tsx': code,
    '/tsconfig.json': tsconfig,
    '/lib/utils.ts': utils,
    '/lib/content.ts': content,
  });

  const selectedFile = registry.files?.find(
    (file) => file.path === `${componentName ?? 'index'}.tsx`
  );
  const selectedComponentContent = parseContent(selectedFile?.content ?? '');

  // Parse the selected component content
  const selectedComponentDeps = await parseShadcnComponents(
    selectedComponentContent
  );
  Object.assign(files, selectedComponentDeps.files);
  Object.assign(dependencies, selectedComponentDeps.dependencies);
  Object.assign(devDependencies, selectedComponentDeps.devDependencies);

  // Process registry dependencies
  if (registry.registryDependencies) {
    await Promise.all(
      Object.values(registry.registryDependencies).map(async (dependency) => {
        let mod = componentModuleCache.get(dependency);
        if (!mod) {
          mod = (await import(
            `./shadcn/${dependency}.json`
          )) as ComponentModule;
          componentModuleCache.set(dependency, mod);
        }

        await processComponentModule(mod, files, dependencies, devDependencies);
      })
    );
  }

  files[`/components/ui/kibo-ui/${name}.tsx`] = parseContent(
    selectedComponentContent
  );

  // Process all dependencies
  for (const deps of [
    registry.dependencies,
    registry.devDependencies,
    demoDependencies,
  ]) {
    processDependencies(deps, dependencies);
  }

  return (
    <PreviewProvider
      template="react-ts"
      options={{
        externalResources: [
          'https://cdn.tailwindcss.com',
          'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
        ],
      }}
      customSetup={{
        dependencies: {
          // shadcn/ui global dependencies
          '@radix-ui/react-icons': 'latest',
          clsx: 'latest',
          'tailwind-merge': 'latest',
          'class-variance-authority': 'latest',

          // Tailwind dependencies
          tailwindcss: 'latest',
          'tailwindcss-animate': 'latest',
          ...dependencies,

          // Common utilities
          'date-fns': 'latest',
        },
        devDependencies: {
          autoprefixer: 'latest',
          postcss: 'latest',
          ...devDependencies,
        },
      }}
      files={files}
      className="not-prose h-[30rem]"
    >
      <SandboxLayout>
        <SandboxTabs defaultValue="preview">
          <SandboxTabsList>
            <SandboxTabsTrigger value="code">
              <CodeIcon size={14} />
              Code
            </SandboxTabsTrigger>
            <SandboxTabsTrigger value="preview">
              <AppWindowIcon size={14} />
              Preview
            </SandboxTabsTrigger>
            <SandboxTabsTrigger value="console">
              <TerminalIcon size={14} />
              Console
            </SandboxTabsTrigger>
          </SandboxTabsList>
          <V0Button name={name} />
          <SandboxTabsContent value="code" className="overflow-hidden">
            <ResizablePanelGroup
              direction="horizontal"
              className="overflow-hidden"
            >
              <ResizablePanel
                className="!overflow-y-auto"
                defaultSize={25}
                minSize={20}
                maxSize={40}
              >
                <SandboxFileExplorer />
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel className="!overflow-y-auto">
                <SandboxCodeEditor />
              </ResizablePanel>
            </ResizablePanelGroup>
          </SandboxTabsContent>
          <SandboxTabsContent value="preview">
            <SandboxPreview />
          </SandboxTabsContent>
          <SandboxTabsContent value="console">
            <SandboxConsole />
          </SandboxTabsContent>
        </SandboxTabs>
      </SandboxLayout>
    </PreviewProvider>
  );
};
