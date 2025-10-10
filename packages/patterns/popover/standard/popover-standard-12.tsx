import { Bell } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";

export const title = "Notifications Popover";

const Example = () => (
  <Popover>
    <PopoverTrigger asChild>
      <Button className="relative" size="icon" variant="ghost">
        <Bell className="h-5 w-5" />
        <Badge className="-right-1 -top-1 absolute h-5 w-5 items-center justify-center rounded-full p-0 text-xs">
          3
        </Badge>
      </Button>
    </PopoverTrigger>
    <PopoverContent className="w-80">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold">Notifications</h4>
          <Button size="sm" variant="ghost">
            Mark all as read
          </Button>
        </div>
        <Separator />
        <div className="space-y-2">
          <div className="text-sm">
            <p className="font-medium">New comment</p>
            <p className="text-muted-foreground text-xs">2 minutes ago</p>
          </div>
          <div className="text-sm">
            <p className="font-medium">New follower</p>
            <p className="text-muted-foreground text-xs">1 hour ago</p>
          </div>
          <div className="text-sm">
            <p className="font-medium">Update available</p>
            <p className="text-muted-foreground text-xs">3 hours ago</p>
          </div>
        </div>
      </div>
    </PopoverContent>
  </Popover>
);

export default Example;
