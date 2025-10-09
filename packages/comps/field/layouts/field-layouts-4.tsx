import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export const title = "Grid Layout";

const Example = () => (
  <div className="w-full max-w-md">
    <FieldSet>
      <FieldLegend variant="label">Personal Details</FieldLegend>
      <FieldGroup>
        <div className="grid grid-cols-2 gap-4">
          <Field>
            <FieldLabel htmlFor="first-name-grid">First Name</FieldLabel>
            <Input
              className="bg-background"
              id="first-name-grid"
              placeholder="John"
              type="text"
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="last-name-grid">Last Name</FieldLabel>
            <Input
              className="bg-background"
              id="last-name-grid"
              placeholder="Doe"
              type="text"
            />
          </Field>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <Field className="col-span-2">
            <FieldLabel htmlFor="city-grid">City</FieldLabel>
            <Input
              className="bg-background"
              id="city-grid"
              placeholder="New York"
              type="text"
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="state-grid">State</FieldLabel>
            <Input
              className="bg-background"
              id="state-grid"
              placeholder="NY"
              type="text"
            />
          </Field>
        </div>
      </FieldGroup>
    </FieldSet>
  </div>
);

export default Example;
