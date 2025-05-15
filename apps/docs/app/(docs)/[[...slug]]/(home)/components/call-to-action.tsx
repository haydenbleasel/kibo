import { Installer } from '../../../../../components/installer';
import GanttExample from '../../../../../examples/gantt';

export const CallToAction = () => (
  <div className="grid grid-cols-3 divide-x divide-dotted">
    <div className="flex flex-col justify-between gap-4 p-8">
      <div className="grid gap-4">
        <h2 className="max-w-lg font-semibold text-3xl">
          Get started with Kibo UI
        </h2>
        <p className="max-w-lg text-balance text-foreground/60 text-lg">
          Install your first component in seconds with the Kibo UI or shadcn
          CLI.
        </p>
      </div>
      <Installer packageName="gantt" />
    </div>
    <div className="col-span-2 aspect-video overflow-hidden p-8">
      <GanttExample />
    </div>
  </div>
);
