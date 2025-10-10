import {
  Field,
  FieldDescription,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export const title = "Radio Buttons";

const Example = () => (
  <div className="w-full max-w-md">
    <FieldSet>
      <FieldLabel>Notification Method</FieldLabel>
      <FieldDescription>Choose how you want to be notified.</FieldDescription>
      <RadioGroup defaultValue="email">
        <Field orientation="horizontal">
          <RadioGroupItem id="notify-email" value="email" />
          <FieldLabel className="font-normal" htmlFor="notify-email">
            Email
          </FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem id="notify-sms" value="sms" />
          <FieldLabel className="font-normal" htmlFor="notify-sms">
            SMS
          </FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem id="notify-push" value="push" />
          <FieldLabel className="font-normal" htmlFor="notify-push">
            Push Notification
          </FieldLabel>
        </Field>
      </RadioGroup>
    </FieldSet>
  </div>
);

export default Example;
