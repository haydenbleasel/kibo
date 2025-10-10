import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export const title = "Horizontal Layout Input";

const Example = () => (
  <div className="w-full max-w-md">
    <Field orientation="horizontal">
      <FieldLabel className="w-32" htmlFor="display-name">
        Display Name
      </FieldLabel>
      <Input
        className="bg-background"
        id="display-name"
        placeholder="John D."
        type="text"
      />
    </Field>
  </div>
);

export default Example;
