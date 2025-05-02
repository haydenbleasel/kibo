'use client';

import { useTheme } from 'next-themes';
import type { CSSProperties, ReactNode } from 'react';

type PreviewRenderProps = {
  children: ReactNode;
};

export const PreviewRender = ({ children }: PreviewRenderProps) => {
  const { resolvedTheme } = useTheme();

  return (
    <div
      className="relative flex size-full flex-col items-center justify-center gap-4 overflow-hidden p-8"
      style={
        {
          '--primary':
            resolvedTheme === 'dark' ? 'oklch(0.985 0 0)' : 'oklch(0.205 0 0)',
          '--primary-foreground':
            resolvedTheme === 'dark' ? 'oklch(0.205 0 0)' : 'oklch(0.985 0 0)',
        } as CSSProperties
      }
    >
      <div className="-translate-y-px absolute top-8 right-0 left-0 border border-border/50 border-dashed" />
      <div className="absolute right-0 bottom-8 left-0 translate-y-px border border-border/50 border-dashed" />
      <div className="-translate-x-px absolute top-0 bottom-0 left-8 border border-border/50 border-dashed" />
      <div className="absolute top-0 right-8 bottom-0 translate-x-px border border-border/50 border-dashed" />
      {children}
    </div>
  );
};
