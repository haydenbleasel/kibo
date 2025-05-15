'use client';

import { Skeleton } from '@repo/shadcn-ui/components/ui/skeleton';
import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player/youtube'), {
  ssr: false,
  loading: () => (
    <Skeleton className="relative aspect-[3472/2160] w-full overflow-hidden rounded-xl border bg-background" />
  ),
});

type DemoVideoProps = {
  url: string;
};

export const DemoVideo = ({ url }: DemoVideoProps) => (
  <div className="relative aspect-[3472/2160] w-full overflow-hidden rounded-xl">
    <ReactPlayer
      url={url}
      width="100%"
      height="100%"
      controls
      style={{
        position: 'absolute',
        inset: 0,
      }}
    />
  </div>
);
