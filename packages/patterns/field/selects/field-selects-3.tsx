import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const title = "Select with Groups";

const Example = () => (
  <div className="w-full max-w-md">
    <Field>
      <FieldLabel>Timezone</FieldLabel>
      <Select>
        <SelectTrigger className="bg-background">
          <SelectValue placeholder="Select timezone" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>North America</SelectLabel>
            <SelectItem value="est">Eastern Time</SelectItem>
            <SelectItem value="cst">Central Time</SelectItem>
            <SelectItem value="mst">Mountain Time</SelectItem>
            <SelectItem value="pst">Pacific Time</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>Europe</SelectLabel>
            <SelectItem value="gmt">London</SelectItem>
            <SelectItem value="cet">Central Europe</SelectItem>
            <SelectItem value="eet">Eastern Europe</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <FieldDescription>Choose your local timezone.</FieldDescription>
    </Field>
  </div>
);

export default Example;
