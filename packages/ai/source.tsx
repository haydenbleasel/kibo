'use client';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { cn } from '@/lib/utils';
import { BookIcon, ChevronDownIcon } from 'lucide-react';
import type { ComponentProps } from 'react';

export type AISourcesProps = ComponentProps<'div'>;

export const AISources = ({ className, ...props }: AISourcesProps) => (
  <Collapsible
    className={cn('not-prose mb-4 text-primary text-xs', className)}
    {...props}
  />
);

export type AISourcesTriggerProps = ComponentProps<
  typeof CollapsibleTrigger
> & {
  count: number;
};

export const AISourcesTrigger = ({
  className,
  count,
  children,
  ...props
}: AISourcesTriggerProps) => (
  <CollapsibleTrigger className="flex items-center gap-2" {...props}>
    {children ?? (
      <>
        <p className="font-medium">Used {count} sources</p>
        <ChevronDownIcon className="h-4 w-4" />
      </>
    )}
  </CollapsibleTrigger>
);

export type AISourcesContentProps = ComponentProps<typeof CollapsibleContent>;

export const AISourcesContent = ({
  className,
  ...props
}: AISourcesContentProps) => (
  <CollapsibleContent
    className={cn('mt-3 flex flex-col gap-2', className)}
    {...props}
  />
);

export type AISourceProps = ComponentProps<'a'>;

export const AISource = ({
  href,
  title,
  children,
  ...props
}: AISourceProps) => (
  <a
    href={href}
    className="flex items-center gap-2"
    target="_blank"
    rel="noreferrer"
    {...props}
  >
    {children ?? (
      <>
        <BookIcon className="h-4 w-4" />
        <span className="block font-medium">{title}</span>
      </>
    )}
  </a>
);
