import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const title = "Horizontal Layout";

const Example = () => (
  <div className="w-full max-w-md">
    <FieldSet>
      <FieldGroup>
        <Field orientation="horizontal">
          <FieldLabel htmlFor="username-h">Username</FieldLabel>
          <Input
            className="bg-background"
            id="username-h"
            placeholder="johndoe"
            type="text"
          />
        </Field>
        <Field orientation="horizontal">
          <FieldLabel>Language</FieldLabel>
          <Select defaultValue="en">
            <SelectTrigger className="bg-background">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="es">Spanish</SelectItem>
              <SelectItem value="fr">French</SelectItem>
            </SelectContent>
          </Select>
        </Field>
      </FieldGroup>
    </FieldSet>
  </div>
);

export default Example;
