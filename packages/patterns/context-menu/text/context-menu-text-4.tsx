import { Check } from "lucide-react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

export const title = "Spell Check Menu";

const Example = () => (
  <ContextMenu>
    <ContextMenuTrigger className="flex h-[200px] w-full max-w-lg items-center justify-center rounded-md border border-dashed text-sm">
      Right click misspeled word
    </ContextMenuTrigger>
    <ContextMenuContent className="w-56">
      <ContextMenuLabel>Suggestions</ContextMenuLabel>
      <ContextMenuSeparator />
      <ContextMenuItem>
        <Check />
        <span>misspelled</span>
      </ContextMenuItem>
      <ContextMenuItem>
        <Check />
        <span>misspelled</span>
      </ContextMenuItem>
      <ContextMenuItem>
        <Check />
        <span>missplaced</span>
      </ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuItem>Add to Dictionary</ContextMenuItem>
      <ContextMenuItem>Ignore</ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
);

export default Example;
