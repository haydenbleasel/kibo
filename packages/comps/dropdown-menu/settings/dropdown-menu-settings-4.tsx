"use client";

import { Bell } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const title = "Notification Settings";

const Example = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [comments, setComments] = useState(true);
  const [mentions, setMentions] = useState(true);
  const [updates, setUpdates] = useState(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <Bell className="h-4 w-4" />
          Notifications
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Notification Channels</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={emailNotifications}
          onCheckedChange={setEmailNotifications}
        >
          Email Notifications
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={pushNotifications}
          onCheckedChange={setPushNotifications}
        >
          Push Notifications
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={smsNotifications}
          onCheckedChange={setSmsNotifications}
        >
          SMS Notifications
        </DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Notify Me About</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuCheckboxItem
            checked={comments}
            onCheckedChange={setComments}
          >
            Comments
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={mentions}
            onCheckedChange={setMentions}
          >
            Mentions
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={updates}
            onCheckedChange={setUpdates}
          >
            Product Updates
          </DropdownMenuCheckboxItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Example;
