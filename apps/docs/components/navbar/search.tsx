"use client";

import { Button } from "@repo/shadcn-ui/components/ui/button";
import { Kbd } from "@repo/shadcn-ui/components/ui/kbd";
import { cn } from "@repo/shadcn-ui/lib/utils";
import { useSearchContext } from "fumadocs-ui/provider";
import { SearchIcon } from "lucide-react";

type SearchProps = {
  className?: string;
};

export const Search = ({ className }: SearchProps) => {
  const { setOpenSearch } = useSearchContext();

  return (
    <Button
      className={cn(
        "relative text-muted-foreground has-[>svg]:pr-19",
        className
      )}
      onClick={() => setOpenSearch(true)}
      size="sm"
      variant="secondary"
    >
      <SearchIcon className="size-4" />
      <p className="font-normal">Search documentation...</p>
      <span className="-translate-y-1/2 absolute top-1/2 right-1.5 flex items-center gap-0.5">
        <Kbd className="border bg-background">⌘</Kbd>
        <Kbd className="border bg-background">K</Kbd>
      </span>
    </Button>
  );
};
