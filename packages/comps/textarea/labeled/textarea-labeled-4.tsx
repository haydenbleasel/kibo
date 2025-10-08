import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const title = "Textarea with Inline Label";

const Example = () => (
  <div className="flex w-full max-w-md items-center gap-4">
    <Label className="w-20 shrink-0" htmlFor="inline">
      Message
    </Label>
    <Textarea
      className="min-h-0 bg-background"
      id="inline"
      placeholder="Type here..."
      rows={3}
    />
  </div>
);

export default Example;
