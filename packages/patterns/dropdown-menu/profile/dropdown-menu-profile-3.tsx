"use client";

import {
  Bell,
  CreditCard,
  Lock,
  LogOut,
  Mail,
  User,
  Users,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const title = "Account Settings Dropdown";

const Example = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button className="gap-2" variant="outline">
        <Avatar className="h-6 w-6">
          <AvatarImage
            alt="@haydenbleasel"
            src="https://github.com/haydenbleasel.png"
          />
          <AvatarFallback>HB</AvatarFallback>
        </Avatar>
        <span>Hayden Bleasel</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" className="w-64">
      <DropdownMenuLabel className="font-normal">
        <div className="flex items-center gap-3 pb-2">
          <Avatar className="h-10 w-10">
            <AvatarImage
              alt="@haydenbleasel"
              src="https://github.com/haydenbleasel.png"
            />
            <AvatarFallback>HB</AvatarFallback>
          </Avatar>
          <div className="flex flex-col space-y-1">
            <p className="font-medium text-sm leading-none">Hayden Bleasel</p>
            <p className="text-muted-foreground text-xs leading-none">
              hello@haydenbleasel.com
            </p>
          </div>
        </div>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuLabel>Account</DropdownMenuLabel>
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <User />
          Profile Settings
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Mail />
          Email Preferences
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Bell />
          Notifications
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Lock />
          Privacy & Security
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuLabel>Billing</DropdownMenuLabel>
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <CreditCard />
          Payment Methods
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Users />
          Team Subscription
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem variant="destructive">
        <LogOut />
        Log out
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

export default Example;
