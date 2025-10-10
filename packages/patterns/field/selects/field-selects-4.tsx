import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const title = "Multiple Selects";

const Example = () => (
  <div className="w-full max-w-md">
    <FieldSet>
      <FieldGroup>
        <Field>
          <FieldLabel>Language</FieldLabel>
          <Select defaultValue="en">
            <SelectTrigger className="bg-background">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="es">Spanish</SelectItem>
              <SelectItem value="fr">French</SelectItem>
              <SelectItem value="de">German</SelectItem>
            </SelectContent>
          </Select>
        </Field>
        <Field>
          <FieldLabel>Currency</FieldLabel>
          <Select defaultValue="usd">
            <SelectTrigger className="bg-background">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="usd">USD ($)</SelectItem>
              <SelectItem value="eur">EUR (€)</SelectItem>
              <SelectItem value="gbp">GBP (£)</SelectItem>
              <SelectItem value="jpy">JPY (¥)</SelectItem>
            </SelectContent>
          </Select>
        </Field>
      </FieldGroup>
    </FieldSet>
  </div>
);

export default Example;
