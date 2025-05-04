'use client';

import {
  Announcement,
  AnnouncementTag,
  AnnouncementTitle,
} from '@repo/announcement';
import { Button } from '@repo/shadcn-ui/components/ui/button';
import {
  VideoPlayer,
  VideoPlayerContent,
  VideoPlayerControlBar,
  VideoPlayerMuteButton,
  VideoPlayerPlayButton,
  VideoPlayerSeekBackwardButton,
  VideoPlayerSeekForwardButton,
  VideoPlayerTimeDisplay,
  VideoPlayerTimeRange,
  VideoPlayerVolumeRange,
} from '@repo/video-player';
import Link from 'next/link';

const Example = () => (
  <div className="flex flex-col gap-16 px-8 py-24 text-center">
    <div className="flex flex-col items-center justify-center gap-8">
      <Link href="#">
        <Announcement>
          <AnnouncementTag>Latest</AnnouncementTag>
          <AnnouncementTitle>Introducing blocks by Kibo UI</AnnouncementTitle>
        </Announcement>
      </Link>
      <h1 className="mb-0 text-balance font-medium text-6xl md:text-7xl xl:text-[5.25rem]">
        The best way to build your website
      </h1>
      <p className="mt-0 mb-0 text-balance text-lg text-muted-foreground">
        Kibo UI blocks are a new way to build your website. They are a
        collection of pre-built components that you can use to build your
        website.
      </p>
      <div className="flex items-center gap-2">
        <Button asChild>
          <Link href="#">Get started</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="#" className="no-underline">
            Learn more
          </Link>
        </Button>
      </div>
    </div>
    <VideoPlayer className="overflow-hidden rounded-lg border">
      <VideoPlayerContent
        slot="media"
        src="https://stream.mux.com/DS00Spx1CV902MCtPj5WknGlR102V5HFkDe/high.mp4"
        preload="auto"
        muted
        crossOrigin=""
      />
      <VideoPlayerControlBar>
        <VideoPlayerPlayButton />
        <VideoPlayerSeekBackwardButton />
        <VideoPlayerSeekForwardButton />
        <VideoPlayerTimeRange />
        <VideoPlayerTimeDisplay showDuration />
        <VideoPlayerMuteButton />
        <VideoPlayerVolumeRange />
      </VideoPlayerControlBar>
    </VideoPlayer>
  </div>
);

export default Example;
