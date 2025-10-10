import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";

export const title = "Textarea with Label";

const Example = () => (
  <div className="flex w-full max-w-sm flex-col gap-6">
    <InputGroup className="bg-background">
      <InputGroupTextarea
        className="min-h-[100px]"
        id="comment"
        placeholder="Share your thoughts..."
      />
      <InputGroupAddon align="block-start" className="border-b">
        <Label className="text-foreground" htmlFor="comment">
          Comment
        </Label>
      </InputGroupAddon>
      <InputGroupAddon align="block-end">
        <InputGroupButton className="ml-auto" size="sm" variant="default">
          Post Comment
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  </div>
);

export default Example;
