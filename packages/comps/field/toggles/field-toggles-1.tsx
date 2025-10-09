import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldLabel } from "@/components/ui/field";

export const title = "Simple Checkbox";

const Example = () => (
  <div className="w-full max-w-md">
    <Field orientation="horizontal">
      <Checkbox id="terms" />
      <FieldLabel className="font-normal" htmlFor="terms">
        I agree to the terms and conditions
      </FieldLabel>
    </Field>
  </div>
);

export default Example;
