import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";

export const title = "Textarea with Helper Text Above";

const Example = () => (
  <div className="w-full max-w-md">
    <Field>
      <FieldLabel htmlFor="description">Description</FieldLabel>
      <FieldDescription>
        Provide a detailed description. Markdown is supported.
      </FieldDescription>
      <Textarea
        className="bg-background"
        id="description"
        placeholder="# Heading&#10;&#10;Your description here..."
        rows={6}
      />
    </Field>
  </div>
);

export default Example;
