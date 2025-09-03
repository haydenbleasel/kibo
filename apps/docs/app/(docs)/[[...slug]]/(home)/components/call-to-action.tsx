import { TextLoop } from "../../../../../components/motion-primitives/text-loop";
import { source } from "../../../../../lib/source";

const components = source
  .getPages()
  .filter((page) => page.slugs.at(0) === "components")
  .map((page) => page.slugs.at(1))
  .filter((slug) => !slug?.startsWith("ai-"))
  .filter(Boolean) as string[];

const Terminal = () => (
  <div className="w-full overflow-hidden rounded-t-2xl border border-border bg-background shadow-2xl">
    {/* Terminal Header */}
    <div className="flex items-center justify-between border-border border-b bg-muted px-4 py-3">
      <div className="flex items-center gap-2">
        <div className="h-3 w-3 rounded-full bg-destructive" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />
      </div>
      <div className="font-medium text-muted-foreground text-sm">Terminal</div>
      <div className="w-14" /> {/* Spacer for centering */}
    </div>

    {/* Terminal Content */}
    <div className="h-[10rem] bg-background p-6 sm:h-[20rem]">
      <div className="flex items-center font-mono text-base">
        <code className="mr-2 text-blue-600 dark:text-blue-400">$</code>
        <code className="text-muted-foreground">npx kibo-ui add&nbsp;</code>
        <TextLoop>
          {components.map((component) => (
            <span className="text-accent-foreground" key={component}>
              {component}
            </span>
          ))}
        </TextLoop>
        <span className="ml-1 inline-block h-5 w-2 animate-pulse bg-foreground" />
      </div>
    </div>
  </div>
);

export const CallToAction = () => (
  <div className="container mx-auto grid gap-8 rounded-4xl bg-secondary px-8 pt-8 md:px-16 md:pt-16">
    <div className="grid gap-2">
      <h2 className="font-semibold text-3xl text-foreground">
        Get started with Kibo UI
      </h2>
      <p className="text-balance text-lg text-muted-foreground">
        Install your first component in seconds with the Kibo UI or shadcn CLI.
      </p>
    </div>
    <div className="dark">
      <Terminal />
    </div>
  </div>
);
