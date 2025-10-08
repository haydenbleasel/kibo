"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const title = "Search Input";

const Example = () => (
  <div className="w-full max-w-sm space-y-2">
    <Label htmlFor="search-input">Search</Label>
    <div className="relative">
      <Search className="-translate-y-1/2 absolute top-1/2 left-3 h-4 w-4 text-muted-foreground" />
      <Input
        className="bg-background pl-9"
        id="search-input"
        placeholder="Search..."
        type="search"
      />
    </div>
  </div>
);

export default Example;
