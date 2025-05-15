'use client';

import {
  SiAmazon,
  SiApple,
  SiFacebook,
  SiGithub,
  SiGoogle,
  SiInstagram,
  SiLucide,
  SiReact,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
  SiYoutube,
} from '@icons-pack/react-simple-icons';
import {
  Announcement,
  AnnouncementTag,
  AnnouncementTitle,
} from '@repo/announcement';
import {} from '@repo/marquee';
import { Button } from '@repo/shadcn-ui/components/ui/button';
import {} from '@repo/video-player';
import Link from 'next/link';

const logos = [
  {
    name: 'GitHub',
    icon: SiGithub,
    url: 'https://github.com',
  },
  {
    name: 'Facebook',
    icon: SiFacebook,
    url: 'https://facebook.com',
  },
  {
    name: 'Google',
    icon: SiGoogle,
    url: 'https://google.com',
  },
  {
    name: 'Amazon',
    icon: SiAmazon,
    url: 'https://amazon.com',
  },
  {
    name: 'Apple',
    icon: SiApple,
    url: 'https://apple.com',
  },
  {
    name: 'Instagram',
    icon: SiInstagram,
    url: 'https://instagram.com',
  },
  {
    name: 'YouTube',
    icon: SiYoutube,
    url: 'https://youtube.com',
  },
];

export const Hero = () => (
  <div className="flex flex-col gap-16 px-8 py-24 text-center">
    <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-8">
      <Link href="https://producthunt.com/">
        <Announcement>
          <AnnouncementTag>News</AnnouncementTag>
          <AnnouncementTitle>We're live on ProductHunt!</AnnouncementTitle>
        </Announcement>
      </Link>
      <h1 className="mb-0 text-balance font-semibold text-6xl md:text-7xl xl:text-[5.25rem]">
        The best way to build your website
      </h1>
      <p className="mt-0 mb-0 text-balance text-foreground/80 text-xl">
        Kibo UI is a custom registry of composable, accessible and open source
        components designed for use with shadcn/ui.
      </p>
      <div className="flex items-center gap-2">
        <Button asChild size="lg">
          <Link href="/docs/components">Browse components</Link>
        </Button>
        <Button variant="outline" asChild size="lg">
          <Link href="#" className="no-underline">
            Learn more
          </Link>
        </Button>
      </div>
      <div className="mt-8 flex items-center gap-12 text-muted-foreground">
        <SiReact />
        <SiShadcnui />
        <SiTypescript />
        <SiTailwindcss />
        <SiLucide />
      </div>
    </div>
  </div>
);
