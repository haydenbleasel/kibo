import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const title = "Select with Helper Text Above";

const Example = () => (
  <div className="w-full max-w-md">
    <Field>
      <FieldLabel>Priority Level</FieldLabel>
      <FieldDescription>
        Higher priority items will be processed first.
      </FieldDescription>
      <Select>
        <SelectTrigger className="bg-background">
          <SelectValue placeholder="Select priority" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="low">Low</SelectItem>
          <SelectItem value="medium">Medium</SelectItem>
          <SelectItem value="high">High</SelectItem>
          <SelectItem value="urgent">Urgent</SelectItem>
        </SelectContent>
      </Select>
    </Field>
  </div>
);

export default Example;
