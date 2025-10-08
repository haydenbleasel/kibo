"use client";

import { CreditCard, LogOut, Settings, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const title = "Profile Dropdown with Status";

const Example = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button className="relative h-10 w-10 rounded-full" variant="ghost">
        <Avatar>
          <AvatarImage
            alt="@haydenbleasel"
            src="https://github.com/haydenbleasel.png"
          />
          <AvatarFallback>HB</AvatarFallback>
        </Avatar>
        <span className="absolute right-0 bottom-0 h-3 w-3 rounded-full bg-green-500 ring-2 ring-background" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" className="w-64">
      <DropdownMenuLabel className="font-normal">
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12">
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
            <Badge className="w-fit text-xs" variant="secondary">
              Pro
            </Badge>
          </div>
        </div>
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <User />
        View Profile
      </DropdownMenuItem>
      <DropdownMenuItem>
        <CreditCard />
        Billing
      </DropdownMenuItem>
      <DropdownMenuItem>
        <Settings />
        Account Settings
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem variant="destructive">
        <LogOut />
        Log out
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

export default Example;
