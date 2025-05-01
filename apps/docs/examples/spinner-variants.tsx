'use client';

import { Spinner, type SpinnerProps } from '@repo/spinner';

const variants: SpinnerProps['variant'][] = [
  'default',
  'circle',
  'pinwheel',
  'circle-filled',
  'ellipsis',
  'ring',
  'bars',
  'infinite',
];

const Example = () => (
  <div className="grid h-screen w-full grid-cols-4 items-center justify-center gap-8">
    {variants.map((variant) => (
      <div
        key={variant}
        className="flex flex-col items-center justify-center gap-4"
      >
        <Spinner key={variant} variant={variant} />
        <span className="font-mono text-muted-foreground text-xs">
          {variant}
        </span>
      </div>
    ))}
  </div>
);

export default Example;
