import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const title = "Required Textarea";

const Example = () => (
  <div className="flex w-full max-w-md flex-col gap-2">
    <Label htmlFor="message">
      Message <span className="text-destructive">*</span>
    </Label>
    <Textarea
      className="bg-background"
      id="message"
      placeholder="Type your message..."
      required
    />
  </div>
);

export default Example;
