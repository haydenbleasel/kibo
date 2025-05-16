import { Installer } from '../../../../../components/installer';

export const CallToAction = () => (
  <div className="px-4 py-16 sm:px-8">
    <div className="mx-auto grid w-full max-w-2xl gap-4 text-center">
      <h2 className="font-semibold text-3xl">Get started with Kibo UI</h2>
      <p className="text-balance text-lg text-muted-foreground">
        Install your first component in seconds with the Kibo UI or shadcn CLI.
      </p>
      <div className="w-full text-left">
        <Installer packageName="gantt" />
      </div>
    </div>
  </div>
);
