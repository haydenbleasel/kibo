"use client";

import { useState } from "react";
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

export const title = "Context Menu with Checkboxes";

const Example = () => {
  const [showBookmarks, setShowBookmarks] = useState(true);
  const [showFullUrls, setShowFullUrls] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[200px] w-full max-w-lg items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-56">
        <ContextMenuCheckboxItem
          checked={showBookmarks}
          onCheckedChange={setShowBookmarks}
        >
          Show Bookmarks Bar
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem
          checked={showFullUrls}
          onCheckedChange={setShowFullUrls}
        >
          Show Full URLs
        </ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem
          checked={showSidebar}
          onCheckedChange={setShowSidebar}
        >
          Show Sidebar
        </ContextMenuCheckboxItem>
      </ContextMenuContent>
    </ContextMenu>
  );
};

export default Example;
