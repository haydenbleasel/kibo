import { cn } from '@repo/shadcn-ui/lib/utils';
import Image from 'next/image';
import { env } from '@/env';

type PoweredByProps = {
  packages: { name: string; url: string }[];
};

const getHostname = (url: string) => {
  if (url.startsWith('/')) {
    return new URL(url, 'https://www.kibo-ui.com').hostname.replace('www.', '');
  }

  const parsedUrl = new URL(url);

  return parsedUrl.hostname.replace('www.', '');
};

export const PoweredBy = ({ packages }: PoweredByProps) => (
  <div className="not-prose mb-8 flex flex-col gap-2">
    <p className="text-muted-foreground text-sm">Powered by</p>
    <div className="flex flex-row flex-wrap items-center gap-2">
      {packages.map(({ name, url }) => (
        <a
          className={cn(
            'flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 transition-all',
            'hover:bg-secondary/80'
          )}
          href={url}
          key={name}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image
            alt={name}
            className="h-3.5 w-3.5 overflow-hidden rounded-sm object-cover"
            height={14}
            src={`https://img.logo.dev/${getHostname(url)}?token=${env.NEXT_PUBLIC_LOGO_DEV_TOKEN}`}
            unoptimized
            width={14}
          />
          <p className="text-muted-foreground text-sm">{name}</p>
        </a>
      ))}
    </div>
  </div>
);
