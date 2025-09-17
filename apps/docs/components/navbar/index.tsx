import { Separator } from "@repo/shadcn-ui/components/ui/separator";
import Link from "next/link";
import { GitHub } from "./github";
import { Links } from "./links";
import { Logo } from "./logo";
import { MobileMenu } from "./mobile-menu";
import { MobileSearch } from "./mobile-search";
import { Search } from "./search";
import { Theme } from "./theme";

const links = [
  {
    label: "Docs",
    href: "/docs",
  },
  {
    label: "Components",
    href: "/components",
  },
  {
    label: "Blocks",
    href: "/blocks",
  },
];

export const Navbar = () => {
  return (
    <div className="fixed inset-x-0 top-(--fd-banner-height) z-40 flex items-center justify-between bg-fd-background/80 px-4 py-3 backdrop-blur-sm transition-colors">
      <div className="flex items-center gap-3">
        <Link
          className="rounded-md px-3 py-1.5 hover:bg-accent hover:text-accent-foreground"
          href="/"
        >
          <Logo />
        </Link>
        <Links className="hidden md:flex" links={links} />
      </div>

      <div className="hidden items-center gap-3 md:flex">
        <Search />
        <Separator className="hidden h-4! lg:flex" orientation="vertical" />
        <GitHub className="hidden lg:flex" />
        <Separator className="hidden h-4! lg:flex" orientation="vertical" />
        <Theme className="hidden lg:flex" />
      </div>

      <div className="flex items-center gap-3 md:hidden">
        <MobileSearch />
        <MobileMenu links={links} />
      </div>
    </div>
  );
};
