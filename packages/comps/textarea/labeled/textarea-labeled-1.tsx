import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const title = "Textarea with Label";

const Example = () => (
  <div className="flex w-full max-w-md flex-col gap-2">
    <Label htmlFor="comment">Comment</Label>
    <Textarea
      className="bg-background"
      id="comment"
      placeholder="Add your comment..."
    />
  </div>
);

export default Example;
