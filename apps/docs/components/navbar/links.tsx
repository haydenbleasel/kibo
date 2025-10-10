"use client";

import { Badge } from "@repo/shadcn-ui/components/ui/badge";
import { navigationMenuTriggerStyle } from "@repo/shadcn-ui/components/ui/navigation-menu";
import { cn } from "@repo/shadcn-ui/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type LinksProps = {
  className: string;
  componentsCount: number;
  blocksCount: number;
  patternsCount: number;
};

export const Links = ({
  className,
  componentsCount,
  blocksCount,
  patternsCount,
}: LinksProps) => {
  const pathname = usePathname();

  const links = [
    {
      label: "Docs",
      href: "/docs",
      active:
        pathname !== "/" &&
        !pathname.startsWith("/components") &&
        !pathname.startsWith("/blocks") &&
        !pathname.startsWith("/patterns"),
    },
    {
      label: "Components",
      href: "/components",
      active: pathname.startsWith("/components"),
      count: componentsCount,
    },
    {
      label: "Blocks",
      href: "/blocks",
      active: pathname.startsWith("/blocks"),
      count: blocksCount,
    },
    {
      label: "Patterns",
      href: "/patterns",
      active: pathname.startsWith("/patterns"),
      count: patternsCount,
    },
  ];

  return (
    <div className={cn("flex items-center gap-1", className)}>
      {links.map((link) => (
        <Link
          className={cn(
            navigationMenuTriggerStyle(),
            "h-auto bg-transparent px-3 py-1.5 shadow-none transition-all",
            link.active && "bg-primary/10 text-primary"
          )}
          href={link.href}
          key={link.href}
        >
          {link.label}
          {Boolean(link.count) && (
            <Badge
              className={cn(
                "ml-1.5 hidden bg-foreground/5 lg:block",
                link.active && "bg-primary text-primary-foreground"
              )}
              variant="secondary"
            >
              {link.count}
            </Badge>
          )}
        </Link>
      ))}
    </div>
  );
};
