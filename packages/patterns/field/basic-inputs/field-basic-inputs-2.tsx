import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export const title = "Input with Description Below";

const Example = () => (
  <div className="w-full max-w-md">
    <Field>
      <FieldLabel htmlFor="username">Username</FieldLabel>
      <Input
        className="bg-background"
        id="username"
        placeholder="johndoe"
        type="text"
      />
      <FieldDescription>
        Choose a unique username for your account.
      </FieldDescription>
    </Field>
  </div>
);

export default Example;
