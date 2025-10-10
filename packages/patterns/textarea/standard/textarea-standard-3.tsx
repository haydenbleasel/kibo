import { Textarea } from "@/components/ui/textarea";

export const title = "Read-only Textarea";

const Example = () => (
  <Textarea
    className="w-full max-w-md bg-background"
    defaultValue="This content cannot be edited"
    placeholder="This textarea is read-only"
    readOnly
  />
);

export default Example;
