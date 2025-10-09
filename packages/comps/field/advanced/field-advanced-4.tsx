import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export const title = "Fieldset with Legend";

const Example = () => (
  <div className="w-full max-w-md">
    <FieldSet>
      <FieldLegend>Address Information</FieldLegend>
      <FieldDescription>
        We need your address to deliver your order.
      </FieldDescription>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="street">Street Address</FieldLabel>
          <Input
            className="bg-background"
            id="street"
            placeholder="123 Main St"
            type="text"
          />
        </Field>
        <div className="grid grid-cols-2 gap-4">
          <Field>
            <FieldLabel htmlFor="city">City</FieldLabel>
            <Input
              className="bg-background"
              id="city"
              placeholder="New York"
              type="text"
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="zip">Postal Code</FieldLabel>
            <Input
              className="bg-background"
              id="zip"
              placeholder="90502"
              type="text"
            />
          </Field>
        </div>
      </FieldGroup>
    </FieldSet>
  </div>
);

export default Example;
