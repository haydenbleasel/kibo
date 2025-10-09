import { Field, FieldLabel } from "@/components/ui/field";
import { Switch } from "@/components/ui/switch";

export const title = "Simple Switch";

const Example = () => (
  <div className="w-full max-w-md">
    <Field orientation="horizontal">
      <FieldLabel htmlFor="airplane-mode">Airplane Mode</FieldLabel>
      <Switch id="airplane-mode" />
    </Field>
  </div>
);

export default Example;
