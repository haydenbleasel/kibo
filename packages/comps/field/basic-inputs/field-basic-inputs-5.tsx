import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export const title = "Horizontal Layout Input";

const Example = () => {
  return (
    <div className="w-full max-w-md">
      <Field orientation="horizontal">
        <FieldLabel htmlFor="display-name">Display Name</FieldLabel>
        <Input
          className="bg-background"
          id="display-name"
          placeholder="John D."
          type="text"
        />
      </Field>
    </div>
  );
};

export default Example;
