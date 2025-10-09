import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export const title = "Vertical Layout (Default)";

const Example = () => (
  <div className="w-full max-w-md">
    <FieldSet>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="name-vertical">Name</FieldLabel>
          <Input
            className="bg-background"
            id="name-vertical"
            placeholder="Your name"
            type="text"
          />
          <FieldDescription>This will be displayed publicly.</FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="email-vertical">Email</FieldLabel>
          <Input
            className="bg-background"
            id="email-vertical"
            placeholder="you@example.com"
            type="email"
          />
          <FieldDescription>We'll never share your email.</FieldDescription>
        </Field>
      </FieldGroup>
    </FieldSet>
  </div>
);

export default Example;
