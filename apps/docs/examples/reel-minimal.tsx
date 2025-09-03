"use client";

import {
  Reel,
  ReelContent,
  ReelItem,
  ReelNavigation,
  ReelProgress,
  ReelVideo,
} from "@repo/reel";

const reels: ReelItem[] = [
  {
    id: 1,
    type: "video",
    src: "https://wajxiz6qhqyqkm0o.public.blob.vercel-storage.com/grok-imagine-1.mp4",
    duration: 6,
    title: "Grok Imagine Demo 1",
    description: "First demo video",
  },
  {
    id: 2,
    type: "video",
    src: "https://wajxiz6qhqyqkm0o.public.blob.vercel-storage.com/grok-imagine-2.mp4",
    duration: 6,
    title: "Grok Imagine Demo 2",
    description: "Second demo video",
  },
  {
    id: 3,
    type: "video",
    src: "https://wajxiz6qhqyqkm0o.public.blob.vercel-storage.com/grok-imagine-3.mp4",
    duration: 6,
    title: "Grok Imagine Demo 3",
    description: "Third demo video",
  },
];

const Example = () => (
  <Reel data={reels}>
    <ReelProgress />
    <ReelContent>
      {(reel) => (
        <ReelItem>
          <ReelVideo src={reel.src} />
        </ReelItem>
      )}
    </ReelContent>
    <ReelNavigation />
  </Reel>
);

export default Example;
