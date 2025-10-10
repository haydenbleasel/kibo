import { Field, FieldLabel } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const title = "Select in Horizontal Layout";

const Example = () => (
  <div className="w-full max-w-md">
    <Field orientation="horizontal">
      <FieldLabel>Theme</FieldLabel>
      <Select defaultValue="system">
        <SelectTrigger className="bg-background">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
    </Field>
  </div>
);

export default Example;
