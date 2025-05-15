'use client';

import {
  SiLucide,
  SiReact,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
} from '@icons-pack/react-simple-icons';
import { Button } from '@repo/shadcn-ui/components/ui/button';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const ReactPlayer = dynamic(() => import('react-player/youtube'), {
  ssr: false,
});

export const Hero = () => (
  <div className="grid grid-cols-2 items-center gap-16 px-8 py-16">
    <div className="flex max-w-3xl flex-col gap-6">
      <h1 className="mb-0 text-balance font-semibold text-6xl">
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
        {/* <GitHubButton /> */}
      </div>
      <div className="mt-8 flex items-center gap-12 text-muted-foreground">
        <SiReact />
        <SiShadcnui />
        <SiTypescript />
        <SiTailwindcss />
        <SiLucide />
      </div>
    </div>
    <div>
      <div className="relative aspect-[3472/2160] w-full overflow-hidden rounded-xl">
        <ReactPlayer
          url="https://youtu.be/uld_n8UH3EE"
          width="100%"
          height="100%"
          controls
          style={{
            position: 'absolute',
            inset: 0,
          }}
        />
      </div>
    </div>
  </div>
);
