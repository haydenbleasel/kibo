"use client";

import { Button } from "@repo/shadcn-ui/components/ui/button";
import { useSearchContext } from "fumadocs-ui/provider";
import { SearchIcon } from "lucide-react";

export const MobileSearch = () => {
  const { setOpenSearch } = useSearchContext();

  return (
    <Button
      className="h-8"
      onClick={() => setOpenSearch(true)}
      size="icon"
      variant="ghost"
    >
      <SearchIcon className="size-4" />
    </Button>
  );
};
