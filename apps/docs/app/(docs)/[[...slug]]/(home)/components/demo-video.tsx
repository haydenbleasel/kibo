'use client';

import { Skeleton } from '@repo/shadcn-ui/components/ui/skeleton';
import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player/youtube'), {
  ssr: false,
  loading: () => (
    <Skeleton className="relative aspect-video w-full overflow-hidden bg-background" />
  ),
});

type DemoVideoProps = {
  url: string;
};

export const DemoVideo = ({ url }: DemoVideoProps) => (
  <div className="pointer-events-none relative aspect-video w-full select-none">
    <ReactPlayer
      url={url}
      width="100%"
      height="100%"
      playing
      loop
      playsinline
      muted
      config={{
        playerVars: {
          rel: 0,
          showinfo: 0,
          controls: 0,
        },
      }}
      style={{
        position: 'absolute',
        inset: 0,
      }}
    />
  </div>
);
