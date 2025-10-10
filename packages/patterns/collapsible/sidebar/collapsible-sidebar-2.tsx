import { Bell, ChevronDown, Lock, Settings, User } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export const title = "Settings Menu";

const Example = () => (
  <div className="w-full max-w-lg rounded-lg border bg-card">
    <Collapsible>
      <CollapsibleTrigger className="flex w-full items-center justify-between p-3 font-medium text-sm hover:bg-muted">
        <div className="flex items-center gap-2">
          <Settings className="h-4 w-4" />
          <span>Preferences</span>
        </div>
        <ChevronDown className="h-4 w-4" />
      </CollapsibleTrigger>
      <CollapsibleContent className="border-t bg-muted/50">
        <div className="space-y-1 p-2">
          <div className="flex items-center gap-2 rounded-md px-2 py-2 text-sm hover:bg-background">
            <User className="h-4 w-4" />
            <span>Profile</span>
          </div>
          <div className="flex items-center gap-2 rounded-md px-2 py-2 text-sm hover:bg-background">
            <Bell className="h-4 w-4" />
            <span>Notifications</span>
          </div>
          <div className="flex items-center gap-2 rounded-md px-2 py-2 text-sm hover:bg-background">
            <Lock className="h-4 w-4" />
            <span>Privacy</span>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  </div>
);

export default Example;
