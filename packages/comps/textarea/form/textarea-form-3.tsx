import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const title = "Textarea with Error";

const Example = () => (
  <div className="flex w-full max-w-md flex-col gap-2">
    <Label htmlFor="feedback">Feedback</Label>
    <Textarea
      aria-invalid="true"
      className="bg-background"
      defaultValue="Too short"
      id="feedback"
      placeholder="Share your feedback"
    />
    <p className="text-destructive text-sm">
      Feedback must be at least 10 characters.
    </p>
  </div>
);

export default Example;
