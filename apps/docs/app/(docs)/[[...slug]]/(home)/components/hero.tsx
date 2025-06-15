import {
  SiLucide,
  SiRadixui,
  SiReact,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
} from '@icons-pack/react-simple-icons';
import { Button } from '@repo/shadcn-ui/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@repo/shadcn-ui/components/ui/tooltip';
import Link from 'next/link';
import { DemoVideo } from './demo-video';
import { GitHubButton } from './github-button';

const icons = [
  {
    icon: SiReact,
    name: 'React',
  },
  {
    icon: SiShadcnui,
    name: 'shadcn/ui',
  },
  {
    icon: SiTypescript,
    name: 'TypeScript',
  },
  {
    icon: SiTailwindcss,
    name: 'Tailwind CSS',
  },
  {
    icon: SiLucide,
    name: 'Lucide',
  },
  {
    icon: SiRadixui,
    name: 'Radix UI',
  },
];

export const Hero = () => (
  <div className="grid gap-8 xl:grid-cols-[28rem_1fr]">
    <div className="flex max-w-3xl flex-col justify-center gap-6 py-4 sm:py-8">
      <h1 className="mb-0 text-balance font-semibold text-3xl xl:text-4xl 2xl:text-5xl">
        The best way to build your website
      </h1>
      <p className="mt-0 mb-0 text-balance text-muted-foreground xl:text-lg 2xl:text-xl">
        Kibo UI is a custom registry of composable, accessible and open source
        components designed for use with shadcn/ui.
      </p>
      <div className="flex items-center gap-2">
        <Button asChild size="lg">
          <Link href="/components">Browse components</Link>
        </Button>
        <GitHubButton />
      </div>
      <div className="mt-4 flex items-center gap-4 text-muted-foreground">
        <p className="text-muted-foreground text-sm">Built with</p>
        {icons.map((icon) => (
          <Tooltip key={icon.name}>
            <TooltipTrigger asChild>
              <icon.icon size={16} />
            </TooltipTrigger>
            <TooltipContent>{icon.name}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </div>
    <div className="flex">
      <DemoVideo url="https://youtu.be/FqQ9j6bqtf0" />
    </div>
  </div>
);
