import path from "node:path";
import { globSync } from "glob";
import Link from "next/link";
import { processFolderName } from "../../lib/comps";
import { source } from "../../lib/source";
import { Logo } from "../navbar/logo";
import { Theme } from "./theme";

const pages = source.getPages();
const docs = pages.filter((page) => page.slugs[0] === "docs");
const components = pages.filter((page) => page.slugs[0] === "components");
const blocks = pages.filter((page) => page.slugs[0] === "blocks");

const compsPath = path.join(process.cwd(), "../../packages/comps");
const compFiles = globSync("*", { cwd: compsPath, withFileTypes: true });
const compFolders = compFiles
  .filter((folder) => folder.isDirectory() && folder.name !== "node_modules")
  .sort((a, b) => a.name.localeCompare(b.name));

const componentsHalf = Math.ceil(components.length / 2);
const componentsLeft = components.slice(0, componentsHalf);
const componentsRight = components.slice(componentsHalf);

const compsHalf = Math.ceil(compFolders.length / 2);
const compsLeft = compFolders.slice(0, compsHalf);
const compsRight = compFolders.slice(compsHalf);

export const Footer = () => (
  <footer className="mt-16 grid gap-8 py-8">
    <div className="container flex items-start justify-between">
      <div className="grid gap-2">
        <Link href="/">
          <Logo />
        </Link>
        <p className="text-muted-foreground text-sm">
          Made with ❤️ and ☕ by{" "}
          <a
            className="text-primary underline"
            href="https://x.com/haydenbleasel"
            rel="noopener"
            target="_blank"
          >
            @haydenbleasel
          </a>
        </p>
      </div>
      <Theme />
    </div>
    <div className="container grid gap-8 md:grid-cols-3 lg:grid-cols-6">
      <div>
        <h3 className="font-medium text-sm">Docs</h3>
        <ul className="mt-2 space-y-1 text-sm">
          {docs.map((page) => (
            <li key={page.url}>
              <Link
                className="text-muted-foreground transition-colors hover:text-primary"
                href={page.url}
              >
                {page.data.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-2">
        <h3 className="font-medium text-sm">Components</h3>
        <div className="grid grid-cols-2 gap-4">
          <ul className="mt-2 space-y-1 text-sm">
            {componentsLeft.map((page) => (
              <li key={page.url}>
                <Link
                  className="text-muted-foreground transition-colors hover:text-primary"
                  href={page.url}
                >
                  {page.data.title}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="mt-2 space-y-1 text-sm">
            {componentsRight.map((page) => (
              <li key={page.url}>
                <Link
                  className="text-muted-foreground transition-colors hover:text-primary"
                  href={page.url}
                >
                  {page.data.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <h3 className="font-medium text-sm">Blocks</h3>
        <ul className="mt-2 space-y-1 text-sm">
          {blocks.map((page) => (
            <li key={page.url}>
              <Link
                className="text-muted-foreground transition-colors hover:text-primary"
                href={page.url}
              >
                {page.data.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-2">
        <h3 className="font-medium text-sm">Comps</h3>
        <div className="grid grid-cols-2 gap-4">
          <ul className="mt-2 space-y-1 text-sm">
            {compsLeft.map((folder) => (
              <li key={folder.name}>
                <Link
                  className="text-muted-foreground transition-colors hover:text-primary"
                  href={folder.name}
                >
                  {processFolderName(folder.name)}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="mt-2 space-y-1 text-sm">
            {compsRight.map((folder) => (
              <li key={folder.name}>
                <Link
                  className="text-muted-foreground transition-colors hover:text-primary"
                  href={folder.name}
                >
                  {processFolderName(folder.name)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </footer>
);
