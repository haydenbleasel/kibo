import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const title = "Complex Multi-Field Form";

const Example = () => (
  <div className="w-full max-w-md space-y-6">
    <FieldSet>
      <FieldLegend>Personal Information</FieldLegend>
      <FieldGroup>
        <div className="grid grid-cols-2 gap-4">
          <Field>
            <FieldLabel htmlFor="first">First Name</FieldLabel>
            <Input
              className="bg-background"
              id="first"
              placeholder="John"
              type="text"
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="last">Last Name</FieldLabel>
            <Input
              className="bg-background"
              id="last"
              placeholder="Doe"
              type="text"
            />
          </Field>
        </div>
        <Field>
          <FieldLabel htmlFor="email-complex">Email</FieldLabel>
          <Input
            className="bg-background"
            id="email-complex"
            placeholder="john@example.com"
            type="email"
          />
        </Field>
        <Field>
          <FieldLabel>Country</FieldLabel>
          <Select>
            <SelectTrigger className="bg-background">
              <SelectValue placeholder="Select country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="us">United States</SelectItem>
              <SelectItem value="uk">United Kingdom</SelectItem>
              <SelectItem value="ca">Canada</SelectItem>
            </SelectContent>
          </Select>
        </Field>
      </FieldGroup>
    </FieldSet>
  </div>
);

export default Example;
