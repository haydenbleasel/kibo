import { Button } from '@repo/shadcn-ui/components/ui/button';
import { cn } from '@repo/shadcn-ui/lib/utils';
import type { LucideProps } from 'lucide-react';
import { ArrowRightIcon, icons } from 'lucide-react';
import Link from 'next/link';
import { createElement } from 'react';
import type { ComponentType } from 'react';
import AIInputExample from '../../../../../examples/ai-chatbot';
import CollaborativeCanvasExample from '../../../../../examples/collaborative-canvas';
import PricingPageExample from '../../../../../examples/pricing';
import { source } from '../../../../../lib/source';

const aiChatbot = source.getPage(['blocks', 'ai-chatbot']);
const collaborativeCanvas = source.getPage(['blocks', 'collaborative-canvas']);
const pricing = source.getPage(['blocks', 'pricing']);

const examples = [
  {
    icon: aiChatbot?.data.icon,
    name: aiChatbot?.data.title,
    description: aiChatbot?.data.description,
    component: () => (
      <div className="aspect-square overflow-hidden">
        <AIInputExample />
      </div>
    ),
  },
  {
    icon: collaborativeCanvas?.data.icon,
    name: collaborativeCanvas?.data.title,
    description: collaborativeCanvas?.data.description,
    component: () => (
      <div className="aspect-square overflow-hidden">
        <CollaborativeCanvasExample />
      </div>
    ),
  },
  {
    icon: pricing?.data.icon,
    name: pricing?.data.title,
    description: pricing?.data.description,
    component: PricingPageExample,
    className: 'lg:col-span-2',
  },
];

const ExampleCard = ({
  icon,
  name,
  description,
  component: Component,
  className,
}: {
  icon: string | undefined;
  name: string | undefined;
  description: string | undefined;
  component: ComponentType;
  className?: string;
}) => {
  const Icon =
    icon && icon in icons
      ? (props: LucideProps) =>
          createElement(icons[icon as keyof typeof icons], {
            ...props,
          })
      : null;

  return (
    <div
      key={name}
      className={cn(
        'flex h-full flex-col gap-8 rounded-lg bg-secondary p-4 sm:p-8',
        className
      )}
    >
      <div className="grid gap-4">
        <div className="flex items-center gap-2">
          {Icon && <Icon size={16} className="text-muted-foreground" />}
          {name && <p className="font-medium">{name}</p>}
        </div>
        {description && (
          <p className="text-balance text-muted-foreground">{description}</p>
        )}
      </div>
      <div className="overflow-hidden rounded-lg border bg-background text-left">
        <Component />
      </div>
    </div>
  );
};

export const Blocks = () => (
  <>
    <div className="flex w-full flex-col items-start justify-between gap-4 py-16 md:flex-row">
      <div className="grid gap-4">
        <h2 className="max-w-lg font-semibold text-3xl">
          Building blocks for interfaces
        </h2>
        <p className="max-w-lg text-balance text-lg text-muted-foreground">
          Get your apps and websites up and running quickly with precomposed and
          animated blocks.
        </p>
      </div>
      <Button asChild size="lg">
        <Link href="/blocks">
          <span>Explore blocks</span>
          <ArrowRightIcon size={16} />
        </Link>
      </Button>
    </div>
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      {examples.map((example) => (
        <ExampleCard key={example.name} {...example} />
      ))}
    </div>
  </>
);
