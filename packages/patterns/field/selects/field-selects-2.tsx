import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const title = "Select with Description";

const Example = () => (
  <div className="w-full max-w-md">
    <Field>
      <FieldLabel>Department</FieldLabel>
      <Select>
        <SelectTrigger className="bg-background">
          <SelectValue placeholder="Choose department" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="engineering">Engineering</SelectItem>
          <SelectItem value="design">Design</SelectItem>
          <SelectItem value="marketing">Marketing</SelectItem>
          <SelectItem value="sales">Sales</SelectItem>
          <SelectItem value="support">Customer Support</SelectItem>
          <SelectItem value="hr">Human Resources</SelectItem>
        </SelectContent>
      </Select>
      <FieldDescription>
        Select your department or area of work.
      </FieldDescription>
    </Field>
  </div>
);

export default Example;
