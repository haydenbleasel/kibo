"use client";

import {
  Reel,
  ReelContent,
  ReelFooter,
  ReelHeader,
  ReelItem,
  ReelProgress,
  ReelVideo,
} from "@repo/reel";
import { Button } from "@repo/shadcn-ui/components/ui/button";
import { Heart, MessageCircle, Share } from "lucide-react";
import Image from "next/image";

type CustomReelItem = ReelItem & {
  author: string;
  avatar: string;
  description: string;
  likes: string;
  comments: string;
};
const reels: CustomReelItem[] = [
  {
    id: 1,
    type: "video",
    author: "Alex Johnson",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    description: "Check out this amazing view! #travel #adventure",
    likes: "12.5K",
    comments: "234",
    duration: 6,
    src: "https://wajxiz6qhqyqkm0o.public.blob.vercel-storage.com/grok-imagine-1.mp4",
  },
  {
    id: 2,
    type: "video",
    author: "Sarah Chen",
    avatar:
      "https://images.unsplash.com/photo-1659691349345-f9e2e17248cb?w=40&h=40&fit=crop&crop=face",
    description: "Living my best life 🌟 #happy #vibes",
    likes: "8.3K",
    comments: "156",
    duration: 6,
    src: "https://wajxiz6qhqyqkm0o.public.blob.vercel-storage.com/grok-imagine-2.mp4",
  },
  {
    id: 3,
    type: "video",
    author: "Mike Davis",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
    description: "Creating magic every day ✨ #creativity",
    likes: "15.2K",
    comments: "412",
    duration: 6,
    src: "https://wajxiz6qhqyqkm0o.public.blob.vercel-storage.com/grok-imagine-3.mp4",
  },
];

const Example = () => (
  <Reel data={reels}>
    <ReelProgress />
    <ReelContent>
      {(reel) => (
        <ReelItem>
          <ReelVideo src={reel.src} />

          <ReelHeader>
            <div className="flex items-center gap-2">
              <Image
                alt={(reel as CustomReelItem).author}
                className="h-6 w-6 rounded-full border-2 border-white"
                height={24}
                src={(reel as CustomReelItem).avatar}
                unoptimized
                width={24}
              />
              <span className="font-medium text-sm text-white">
                {(reel as CustomReelItem).author}
              </span>
              <Button className="ml-auto rounded-full bg-white/20 px-3 py-1 text-sm text-white backdrop-blur-sm transition-colors hover:bg-white/30">
                Follow
              </Button>
            </div>
          </ReelHeader>

          <ReelFooter>
            <div className="flex flex-col gap-2">
              <p className="text-sm text-white">{reel.description}</p>

              <div className="flex gap-2">
                <Button
                  className="h-auto p-2 text-white hover:bg-white/10 hover:text-white"
                  variant="ghost"
                >
                  <Heart className="h-6 w-6" />
                  <span className="text-xs">
                    {(reel as CustomReelItem).likes}
                  </span>
                </Button>
                <Button
                  className="h-auto p-2 text-white hover:bg-white/10 hover:text-white"
                  variant="ghost"
                >
                  <MessageCircle className="h-6 w-6" />
                  <span className="text-xs">
                    {(reel as CustomReelItem).comments}
                  </span>
                </Button>
                <Button
                  className="h-auto p-2 text-white hover:bg-white/10 hover:text-white"
                  variant="ghost"
                >
                  <Share className="h-6 w-6" />
                  <span className="sr-only text-xs">Share</span>
                </Button>
              </div>
            </div>
          </ReelFooter>
        </ReelItem>
      )}
    </ReelContent>
  </Reel>
);

export default Example;
