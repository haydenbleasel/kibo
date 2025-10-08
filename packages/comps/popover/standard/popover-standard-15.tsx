import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";

export const title = "Feedback Popover";

const Example = () => (
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="outline">
        <MessageSquare className="h-4 w-4" />
        Feedback
      </Button>
    </PopoverTrigger>
    <PopoverContent className="w-80">
      <div className="space-y-4">
        <div>
          <h4 className="mb-1 font-semibold">Send Feedback</h4>
          <p className="text-muted-foreground text-xs">
            We'd love to hear your thoughts!
          </p>
        </div>
        <Textarea placeholder="Share your feedback..." rows={4} />
        <Button className="w-full">Submit Feedback</Button>
      </div>
    </PopoverContent>
  </Popover>
);

export default Example;
