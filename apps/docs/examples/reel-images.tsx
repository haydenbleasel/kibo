"use client";

import {
  Reel,
  ReelContent,
  ReelControls,
  ReelFooter,
  ReelImage,
  ReelItem,
  type ReelItem as ReelItemType,
  ReelMuteButton,
  ReelNavigation,
  ReelNextButton,
  ReelPlayButton,
  ReelPreviousButton,
  ReelProgress,
} from "@repo/reel";

const reels: ReelItemType[] = [
  {
    id: 1,
    type: "image",
    src: "https://images.unsplash.com/photo-1753731683731-1032f9457b02?w=1080&h=1920&fit=crop",
    alt: "Mountain Adventure",
    title: "Mountain Adventure",
    description: "Exploring the peaks",
    duration: 5,
  },
  {
    id: 2,
    type: "image",
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1080&h=1920&fit=crop",
    alt: "Ocean Waves",
    title: "Ocean Waves",
    description: "Sunset at the beach",
    duration: 5,
  },
  {
    id: 3,
    type: "image",
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1080&h=1920&fit=crop",
    alt: "Forest Trail",
    title: "Forest Trail",
    description: "Into the woods",
    duration: 5,
  },
];

const Example = () => (
  <Reel data={reels}>
    <ReelProgress />
    <ReelContent>
      {(reel) => (
        <ReelItem>
          <ReelImage
            alt={reel.alt ?? ""}
            duration={reel.duration}
            src={reel.src}
          />
          <ReelFooter className="pb-16">
            <div className="text-white">
              <h3 className="font-semibold text-lg">{reel.title}</h3>
              <p className="text-sm opacity-90">{reel.description}</p>
            </div>
          </ReelFooter>
        </ReelItem>
      )}
    </ReelContent>
    <ReelNavigation />
    <ReelControls>
      <ReelPreviousButton />
      <div className="flex gap-2">
        <ReelPlayButton />
        <ReelMuteButton />
      </div>
      <ReelNextButton />
    </ReelControls>
  </Reel>
);

export default Example;
