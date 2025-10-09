import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";

export const title = "Textarea with Description";

const Example = () => (
  <div className="w-full max-w-md">
    <Field>
      <FieldLabel htmlFor="feedback">Feedback</FieldLabel>
      <Textarea
        className="bg-background"
        id="feedback"
        placeholder="Your feedback helps us improve..."
        rows={4}
      />
      <FieldDescription>
        Share your thoughts about our service.
      </FieldDescription>
    </Field>
  </div>
);

export default Example;
