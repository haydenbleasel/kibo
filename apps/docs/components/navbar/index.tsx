import path from "node:path";
import { globSync } from "glob";
import Link from "next/link";
import { source } from "../../lib/source";
import { GitHub } from "./github";
import { Links } from "./links";
import { Logo } from "./logo";
import { MobileMenu } from "./mobile-menu";
import { MobileSearch } from "./mobile-search";
import { Search } from "./search";

const componentsCount = source
  .getPages()
  .filter(({ slugs }) => slugs[0] === "components").length;

const blocksCount = source
  .getPages()
  .filter(({ slugs }) => slugs[0] === "blocks").length;

const patternsPath = path.join(process.cwd(), "../../packages/patterns");
const patternsCount = globSync(`${patternsPath}/**/*.tsx`).length;

export const Navbar = () => (
  <div className="fixed inset-x-0 top-(--fd-banner-height) z-40 flex items-center justify-between bg-fd-background/80 px-4 py-3 backdrop-blur-sm transition-colors">
    <div className="flex items-center gap-3">
      <Link
        className="rounded-md px-3 py-1.5 hover:bg-accent hover:text-accent-foreground"
        href="/"
      >
        <Logo />
      </Link>
      <Links
        blocksCount={blocksCount}
        className="hidden gap-1 md:flex"
        componentsCount={componentsCount}
        patternsCount={patternsCount}
      />
    </div>

    <div className="hidden items-center gap-3 md:flex">
      <Search />
      <GitHub />
    </div>

    <div className="flex items-center gap-3 md:hidden">
      <MobileSearch />
      <MobileMenu />
    </div>
  </div>
);
