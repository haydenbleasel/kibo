import { Field, FieldLabel } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";

export const title = "Simple Textarea";

const Example = () => (
  <div className="w-full max-w-md">
    <Field>
      <FieldLabel htmlFor="message">Message</FieldLabel>
      <Textarea
        className="bg-background"
        id="message"
        placeholder="Type your message here..."
      />
    </Field>
  </div>
);

export default Example;
