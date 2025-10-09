import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const title = "Mixed Field Types with Separators";

const Example = () => (
  <div className="w-full max-w-md">
    <FieldGroup>
      <FieldSet>
        <FieldLabel>Contact Information</FieldLabel>
        <FieldDescription>
          How should we get in touch with you?
        </FieldDescription>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
            <Input
              className="bg-background"
              id="phone"
              placeholder="+1 (555) 000-0000"
              type="tel"
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="contact-email">Email Address</FieldLabel>
            <Input
              className="bg-background"
              id="contact-email"
              placeholder="you@example.com"
              type="email"
            />
          </Field>
        </FieldGroup>
      </FieldSet>
      <FieldSeparator>Additional Details</FieldSeparator>
      <Field>
        <FieldLabel htmlFor="additional-info">
          Additional Information
        </FieldLabel>
        <Textarea
          className="bg-background"
          id="additional-info"
          placeholder="Any other details you'd like to share..."
          rows={3}
        />
      </Field>
    </FieldGroup>
  </div>
);

export default Example;
