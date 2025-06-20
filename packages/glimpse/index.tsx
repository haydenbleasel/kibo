'use client';

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { cn } from '@repo/shadcn-ui/lib/utils';
import type { ComponentProps } from 'react';

export type GlimpseProps = ComponentProps<typeof HoverCard>;

export const Glimpse = (props: GlimpseProps) => {
  return <HoverCard {...props} />;
};

export type GlimpseContentProps = ComponentProps<typeof HoverCardContent>;

export const GlimpseContent = (props: GlimpseContentProps) => (
  <HoverCardContent {...props} />
);

export type GlimpseTriggerProps = ComponentProps<typeof HoverCardTrigger>;

export const GlimpseTrigger = (props: GlimpseTriggerProps) => (
  <HoverCardTrigger {...props} />
);

export type GlimpseTitleProps = ComponentProps<'p'>;

export const GlimpseTitle = ({ className, ...props }: GlimpseTitleProps) => {
  return (
    <p className={cn('truncate font-semibold text-sm', className)} {...props} />
  );
};

export type GlimpseDescriptionProps = ComponentProps<'p'>;

export const GlimpseDescription = ({
  className,
  ...props
}: GlimpseDescriptionProps) => {
  return (
    <p
      className={cn('line-clamp-2 text-muted-foreground text-sm', className)}
      {...props}
    />
  );
};

export type GlimpseImageProps = ComponentProps<'img'>;

export const GlimpseImage = ({
  className,
  alt,
  ...props
}: GlimpseImageProps) => {
  return (
    // biome-ignore lint/nursery/noImgElement: "Kibo UI is framework agnostic"
    // biome-ignore lint/a11y/useAltText: "IDK"
    <img
      alt=""
      className={cn(
        'mb-4 aspect-[120/63] w-full rounded-md border object-cover',
        className
      )}
      {...props}
    />
  );
};
