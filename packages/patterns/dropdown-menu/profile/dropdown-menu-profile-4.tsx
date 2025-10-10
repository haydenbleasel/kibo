"use client";

import { Check, ChevronsUpDown, Plus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const title = "Multi-Account Switcher";

const Example = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button className="h-auto w-64 justify-between py-2" variant="outline">
        <div className="flex items-center gap-2">
          <Avatar className="h-6 w-6">
            <AvatarImage
              alt="@haydenbleasel"
              src="https://github.com/haydenbleasel.png"
            />
            <AvatarFallback>HB</AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-start">
            <span className="font-medium text-sm">Personal Account</span>
            <span className="text-muted-foreground text-xs">
              hello@haydenbleasel.com
            </span>
          </div>
        </div>
        <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="start" className="w-64">
      <DropdownMenuLabel>Accounts</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem className="flex items-center gap-2">
        <Avatar className="h-8 w-8">
          <AvatarImage
            alt="@haydenbleasel"
            src="https://github.com/haydenbleasel.png"
          />
          <AvatarFallback>HB</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="font-medium text-sm">Personal Account</span>
          <span className="text-muted-foreground text-xs">
            hello@haydenbleasel.com
          </span>
        </div>
        <Check className="ml-auto h-4 w-4" />
      </DropdownMenuItem>
      <DropdownMenuItem className="flex items-center gap-2">
        <Avatar className="h-8 w-8">
          <AvatarFallback>AC</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="font-medium text-sm">Acme Corp</span>
          <span className="text-muted-foreground text-xs">team@acme.com</span>
        </div>
      </DropdownMenuItem>
      <DropdownMenuItem className="flex items-center gap-2">
        <Avatar className="h-8 w-8">
          <AvatarFallback>ST</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="font-medium text-sm">Startup Inc</span>
          <span className="text-muted-foreground text-xs">
            hello@startup.io
          </span>
        </div>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem>
        <Plus />
        Add Account
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

export default Example;
