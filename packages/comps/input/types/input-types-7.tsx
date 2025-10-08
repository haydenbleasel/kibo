"use client";

import { Link } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const title = "URL Input";

const Example = () => (
  <div className="w-full max-w-sm space-y-2">
    <Label htmlFor="url-input">Website</Label>
    <div className="relative">
      <Link className="-translate-y-1/2 absolute top-1/2 left-3 h-4 w-4 text-muted-foreground" />
      <Input
        className="bg-background pl-9"
        id="url-input"
        placeholder="https://example.com"
        type="url"
      />
    </div>
    <p className="text-muted-foreground text-xs">Include https:// or http://</p>
  </div>
);

export default Example;
