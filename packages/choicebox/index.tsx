'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { RadioGroup } from '@repo/shadcn-ui/components/ui/radio-group';
import { cn } from '@repo/shadcn-ui/lib/utils';
import { CircleIcon } from 'lucide-react';
import { RadioGroup as RadioGroupPrimitive } from 'radix-ui';
import type { ComponentProps, HTMLAttributes } from 'react';

export type ChoiceboxProps = ComponentProps<typeof RadioGroup>;

export const Choicebox = ({ className, ...props }: ChoiceboxProps) => (
  <RadioGroup className={cn('w-full', className)} {...props} />
);

export type ChoiceboxItemProps = RadioGroupPrimitive.RadioGroupItemProps;

export const ChoiceboxItem = ({
  className,
  children,
  ...props
}: ChoiceboxItemProps) => (
  <RadioGroupPrimitive.Item
    className={cn(
      'text-left',
      '[&[data-state="checked"]]:border-primary',
      '[&[data-state="checked"]]:bg-primary-foreground'
    )}
    asChild
    {...props}
  >
    <Card
      className={cn(
        'flex cursor-pointer flex-row items-start justify-between rounded-md p-4 shadow-none transition-all',
        className
      )}
    >
      {children}
    </Card>
  </RadioGroupPrimitive.Item>
);

export type ChoiceboxItemHeaderProps = ComponentProps<typeof CardHeader>;

export const ChoiceboxItemHeader = ({
  className,
  ...props
}: ComponentProps<typeof CardHeader>) => (
  <CardHeader className={cn('flex-1 p-0', className)} {...props} />
);

export type ChoiceboxItemTitleProps = ComponentProps<typeof CardTitle>;

export const ChoiceboxItemTitle = ({
  className,
  ...props
}: ChoiceboxItemTitleProps) => (
  <CardTitle
    className={cn('flex items-center gap-2 text-sm', className)}
    {...props}
  />
);

export type ChoiceboxItemSubtitleProps = HTMLAttributes<HTMLSpanElement>;

export const ChoiceboxItemSubtitle = ({
  className,
  ...props
}: ChoiceboxItemSubtitleProps) => (
  <span
    className={cn('font-normal text-muted-foreground text-xs', className)}
    {...props}
  />
);

export type ChoiceboxItemDescriptionProps = ComponentProps<
  typeof CardDescription
>;

export const ChoiceboxItemDescription = ({
  className,
  ...props
}: ChoiceboxItemDescriptionProps) => (
  <CardDescription className={cn('text-sm', className)} {...props} />
);

export type ChoiceboxItemContentProps = ComponentProps<typeof CardContent>;

export const ChoiceboxItemContent = ({
  className,
  ...props
}: ChoiceboxItemContentProps) => (
  <CardContent
    className={cn(
      'flex aspect-square size-4 shrink-0 items-center justify-center rounded-full border border-input p-0 text-primary shadow-xs outline-none transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:bg-input/30 dark:aria-invalid:ring-destructive/40',
      className
    )}
    {...props}
  />
);

export type ChoiceboxItemIndicatorProps = ComponentProps<
  typeof RadioGroupPrimitive.RadioGroupIndicator
>;

export const ChoiceboxItemIndicator = ({
  className,
  ...props
}: ChoiceboxItemIndicatorProps) => (
  <RadioGroupPrimitive.Indicator asChild {...props}>
    <CircleIcon className={cn('size-2 fill-primary', className)} />
  </RadioGroupPrimitive.Indicator>
);
