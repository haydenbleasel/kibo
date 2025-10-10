import { Copy, Facebook, Share2, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";

export const title = "Share Popover";

const Example = () => (
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="outline">
        <Share2 className="h-4 w-4" />
        Share
      </Button>
    </PopoverTrigger>
    <PopoverContent className="w-80">
      <div className="space-y-4">
        <h4 className="font-semibold">Share this page</h4>
        <div className="flex gap-2">
          <Button className="flex-1" variant="outline">
            <Facebook className="h-4 w-4" />
            Facebook
          </Button>
          <Button className="flex-1" variant="outline">
            <Twitter className="h-4 w-4" />
            Twitter
          </Button>
        </div>
        <Separator />
        <div className="space-y-2">
          <p className="text-muted-foreground text-xs">Or copy link</p>
          <div className="flex gap-2">
            <Input readOnly value="https://example.com/share" />
            <Button size="icon" variant="outline">
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </PopoverContent>
  </Popover>
);

export default Example;
