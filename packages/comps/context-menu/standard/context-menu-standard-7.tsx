import { Mail, MessageSquare, Plus, UserPlus } from "lucide-react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

export const title = "Context Menu with Submenus";

const Example = () => (
  <ContextMenu>
    <ContextMenuTrigger className="flex h-[200px] w-full max-w-lg items-center justify-center rounded-md border border-dashed text-sm">
      Right click here
    </ContextMenuTrigger>
    <ContextMenuContent className="w-56">
      <ContextMenuItem>
        <UserPlus />
        <span>Invite User</span>
      </ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuSub>
        <ContextMenuSubTrigger>
          <div className="flex items-center gap-2">
            <Mail />
            <span>Share via Email</span>
          </div>
        </ContextMenuSubTrigger>
        <ContextMenuSubContent className="w-48">
          <ContextMenuItem>
            <Mail />
            <span>Gmail</span>
          </ContextMenuItem>
          <ContextMenuItem>
            <Mail />
            <span>Outlook</span>
          </ContextMenuItem>
          <ContextMenuItem>
            <Mail />
            <span>Yahoo Mail</span>
          </ContextMenuItem>
        </ContextMenuSubContent>
      </ContextMenuSub>
      <ContextMenuSub>
        <ContextMenuSubTrigger>
          <div className="flex items-center gap-2">
            <MessageSquare />
            <span>Share via Message</span>
          </div>
        </ContextMenuSubTrigger>
        <ContextMenuSubContent className="w-48">
          <ContextMenuItem>
            <MessageSquare />
            <span>WhatsApp</span>
          </ContextMenuItem>
          <ContextMenuItem>
            <MessageSquare />
            <span>Telegram</span>
          </ContextMenuItem>
          <ContextMenuItem>
            <MessageSquare />
            <span>Slack</span>
          </ContextMenuItem>
        </ContextMenuSubContent>
      </ContextMenuSub>
      <ContextMenuSeparator />
      <ContextMenuItem>
        <Plus />
        <span>More Options...</span>
      </ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
);

export default Example;
