import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const title = "Textarea with Helper Text";

const Example = () => (
  <div className="flex w-full max-w-md flex-col gap-2">
    <Label htmlFor="bio">Bio</Label>
    <Textarea
      className="bg-background"
      id="bio"
      placeholder="Tell us about yourself"
    />
    <p className="text-muted-foreground text-sm">
      This will be displayed on your public profile.
    </p>
  </div>
);

export default Example;
