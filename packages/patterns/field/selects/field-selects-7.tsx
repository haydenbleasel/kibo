import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const title = "Select with Default Value";

const Example = () => (
  <div className="w-full max-w-md">
    <Field>
      <FieldLabel>Status</FieldLabel>
      <Select defaultValue="active">
        <SelectTrigger className="bg-background">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="active">Active</SelectItem>
          <SelectItem value="pending">Pending</SelectItem>
          <SelectItem value="suspended">Suspended</SelectItem>
          <SelectItem value="inactive">Inactive</SelectItem>
        </SelectContent>
      </Select>
      <FieldDescription>Current account status.</FieldDescription>
    </Field>
  </div>
);

export default Example;
