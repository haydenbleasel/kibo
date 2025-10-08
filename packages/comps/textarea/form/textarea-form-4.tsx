import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const title = "Textarea with Hint";

const Example = () => (
  <div className="flex w-full max-w-md flex-col gap-2">
    <div className="flex items-center justify-between">
      <Label htmlFor="description">Description</Label>
      <span className="text-muted-foreground text-sm">Optional</span>
    </div>
    <Textarea
      className="bg-background"
      id="description"
      placeholder="Add a description..."
    />
  </div>
);

export default Example;
