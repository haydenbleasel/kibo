import { LibraryIcon } from "lucide-react";
import Image from "next/image";

type PoweredByProps = {
  packages: string[];
};

const getHostname = (url: string) => {
  if (url.startsWith("/")) {
    return new URL(url, "https://www.kibo-ui.com").hostname.replace("www.", "");
  }

  const parsedUrl = new URL(url);

  return parsedUrl.hostname.replace("www.", "");
};

const getPackageName = (url: string) => {
  if (url.startsWith("/")) {
    return url.replace("/components/", "");
  }

  return new URL(url).hostname.replace("www.", "");
};

export const PoweredBy = ({ packages }: PoweredByProps) => (
  <div className="not-prose mt-6 flex flex-col gap-2">
    <div className="flex items-center gap-2">
      <LibraryIcon className="size-4 text-muted-foreground" />
      <p className="text-muted-foreground text-sm">Powered by</p>
    </div>
    <div className="flex flex-col gap-2 pl-[14px]">
      {packages.map((url) => (
        <a
          className="inline-flex items-center gap-1.5 text-muted-foreground text-sm transition-all hover:text-primary"
          href={url}
          key={url}
          rel="noopener"
          target="_blank"
        >
          <Image
            alt=""
            className="h-3.5 w-3.5 overflow-hidden rounded-sm object-cover"
            height={14}
            src={`https://img.logo.dev/${getHostname(url)}?token=${process.env.NEXT_PUBLIC_LOGO_DEV_TOKEN}&size=14&retina=true`}
            width={14}
          />
          <span>{getPackageName(url)}</span>
        </a>
      ))}
    </div>
  </div>
);
