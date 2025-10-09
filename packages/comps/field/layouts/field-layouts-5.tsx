import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export const title = "Nested Fields";

const Example = () => (
  <div className="w-full max-w-md">
    <FieldSet>
      <FieldLegend>Shipping Address</FieldLegend>
      <FieldDescription>Where should we send your order?</FieldDescription>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="street-nested">Street Address</FieldLabel>
          <Input
            className="bg-background"
            id="street-nested"
            placeholder="123 Main St"
            type="text"
          />
        </Field>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="apt-nested">Apartment, suite, etc.</FieldLabel>
            <Input
              className="bg-background"
              id="apt-nested"
              placeholder="Apt 4B"
              type="text"
            />
          </Field>
        </FieldGroup>
        <div className="grid grid-cols-2 gap-4">
          <Field>
            <FieldLabel htmlFor="city-nested">City</FieldLabel>
            <Input
              className="bg-background"
              id="city-nested"
              placeholder="New York"
              type="text"
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="zip-nested">ZIP Code</FieldLabel>
            <Input
              className="bg-background"
              id="zip-nested"
              placeholder="10001"
              type="text"
            />
          </Field>
        </div>
      </FieldGroup>
    </FieldSet>
  </div>
);

export default Example;
