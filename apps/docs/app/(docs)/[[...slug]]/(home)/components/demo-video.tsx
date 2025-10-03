"use client";

import { Skeleton } from "@repo/shadcn-ui/components/ui/skeleton";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
  loading: () => (
    <Skeleton className="relative aspect-video w-full overflow-hidden bg-background" />
  ),
});

type DemoVideoProps = {
  url: string;
};

export const DemoVideo = ({ url }: DemoVideoProps) => (
  <div className="pointer-events-none relative aspect-video w-full select-none overflow-hidden rounded-t-lg">
    <ReactPlayer
      height="100%"
      loop
      muted
      playing
      playsInline
      src={url}
      style={{
        position: "absolute",
        inset: 0,
      }}
      width="100%"
    />
  </div>
);
