import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const title = "Textarea with Description";

const Example = () => (
  <div className="flex w-full max-w-md flex-col gap-2">
    <div className="flex flex-col gap-1">
      <Label htmlFor="notes">Notes</Label>
      <p className="text-muted-foreground text-sm">
        Add any additional notes here
      </p>
    </div>
    <Textarea className="bg-background" id="notes" placeholder="Type here..." />
  </div>
);

export default Example;
