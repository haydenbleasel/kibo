import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field";

export const title = "Checkbox with Description";

const Example = () => (
  <div className="w-full max-w-md">
    <Field orientation="horizontal">
      <Checkbox defaultChecked id="sync-folders" />
      <FieldContent>
        <FieldLabel htmlFor="sync-folders">
          Sync Desktop & Documents folders
        </FieldLabel>
        <FieldDescription>
          Your Desktop & Documents folders are being synced with iCloud Drive.
          You can access them from other devices.
        </FieldDescription>
      </FieldContent>
    </Field>
  </div>
);

export default Example;
