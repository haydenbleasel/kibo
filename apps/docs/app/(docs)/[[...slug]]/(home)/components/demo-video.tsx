"use client";

import { Skeleton } from "@repo/shadcn-ui/components/ui/skeleton";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player/youtube"), {
  ssr: false,
  loading: () => (
    <Skeleton className="relative aspect-video w-full overflow-hidden bg-background" />
  ),
});

type DemoVideoProps = {
  url: string;
};

export const DemoVideo = ({ url }: DemoVideoProps) => (
  <div className="pointer-events-none relative aspect-video w-full select-none overflow-hidden sm:ring-1 sm:ring-border">
    <ReactPlayer
      config={{
        playerVars: {
          rel: 0,
          showinfo: 0,
          controls: 0,
        },
      }}
      height="100%"
      loop
      muted
      playing
      playsinline
      style={{
        position: "absolute",
        inset: 0,
      }}
      url={url}
      width="100%"
    />
  </div>
);
