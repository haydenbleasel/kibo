import { Field, FieldLabel } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const title = "Simple Select";

const Example = () => (
  <div className="w-full max-w-md">
    <Field>
      <FieldLabel>Country</FieldLabel>
      <Select>
        <SelectTrigger className="bg-background">
          <SelectValue placeholder="Select a country" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="us">United States</SelectItem>
          <SelectItem value="uk">United Kingdom</SelectItem>
          <SelectItem value="ca">Canada</SelectItem>
          <SelectItem value="au">Australia</SelectItem>
          <SelectItem value="de">Germany</SelectItem>
        </SelectContent>
      </Select>
    </Field>
  </div>
);

export default Example;
