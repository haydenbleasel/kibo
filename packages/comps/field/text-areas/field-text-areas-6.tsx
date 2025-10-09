import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";

export const title = "Textarea with Detailed Instructions";

const Example = () => (
  <div className="w-full max-w-md">
    <Field>
      <FieldLabel htmlFor="issue">Issue Description</FieldLabel>
      <FieldDescription>
        Describe the issue you're experiencing in detail. Include steps to
        reproduce if applicable. Our team will review within 24 hours.
      </FieldDescription>
      <Textarea
        className="bg-background"
        id="issue"
        placeholder="1. I tried to...&#10;2. Then I..."
        rows={5}
      />
    </Field>
  </div>
);

export default Example;
