import { ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export const title = "Sidebar with Counts";

const Example = () => (
  <div className="w-full max-w-lg space-y-1">
    <Collapsible>
      <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md px-3 py-2 font-medium text-sm hover:bg-muted">
        <div className="flex items-center gap-2">
          <ChevronRight className="h-4 w-4" />
          <span>Inbox</span>
        </div>
        <Badge variant="secondary">12</Badge>
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-1 ml-6 space-y-1 border-l pl-3">
        <div className="flex items-center justify-between rounded-md px-2 py-1.5 text-sm hover:bg-muted">
          <span>Unread</span>
          <Badge variant="outline">8</Badge>
        </div>
        <div className="flex items-center justify-between rounded-md px-2 py-1.5 text-sm hover:bg-muted">
          <span>Starred</span>
          <Badge variant="outline">4</Badge>
        </div>
      </CollapsibleContent>
    </Collapsible>
  </div>
);

export default Example;
