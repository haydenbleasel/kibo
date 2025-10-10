import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export const title = "Simple Input with Label";

const Example = () => (
  <div className="w-full max-w-md">
    <Field>
      <FieldLabel htmlFor="email">Email</FieldLabel>
      <Input
        className="bg-background"
        id="email"
        placeholder="you@example.com"
        type="email"
      />
    </Field>
  </div>
);

export default Example;
