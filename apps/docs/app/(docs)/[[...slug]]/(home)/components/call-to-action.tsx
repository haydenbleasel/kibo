import { Installer } from '../../../../../components/installer';

export const CallToAction = () => (
  <div className="grid gap-4 divide-x divide-dotted">
    <h2 className="max-w-lg font-semibold text-3xl">
      Get started with Kibo UI
    </h2>
    <p className="max-w-lg text-balance text-foreground/60 text-lg">
      Install your first component in seconds with the Kibo UI or shadcn CLI.
    </p>
    <Installer packageName="gantt" />
  </div>
);
