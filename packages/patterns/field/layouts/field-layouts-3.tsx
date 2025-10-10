import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export const title = "Responsive Layout";

const Example = () => (
  <div className="w-full max-w-md">
    <FieldSet>
      <FieldGroup>
        <Field orientation="responsive">
          <FieldLabel htmlFor="display-name-r">Display Name</FieldLabel>
          <Input
            className="bg-background"
            id="display-name-r"
            placeholder="John Doe"
            type="text"
          />
        </Field>
        <Field orientation="responsive">
          <FieldLabel htmlFor="username-r">Username</FieldLabel>
          <Input
            className="bg-background"
            id="username-r"
            placeholder="@johndoe"
            type="text"
          />
        </Field>
      </FieldGroup>
    </FieldSet>
  </div>
);

export default Example;
