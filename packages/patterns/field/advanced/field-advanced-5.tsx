import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";

export const title = "Field Group with Separator";

const Example = () => (
  <div className="w-full max-w-md">
    <FieldGroup>
      <FieldSet>
        <FieldLabel>Responses</FieldLabel>
        <FieldDescription>
          Get notified when ChatGPT responds to requests that take time, like
          research or image generation.
        </FieldDescription>
        <FieldGroup data-slot="checkbox-group">
          <Field orientation="horizontal">
            <Checkbox defaultChecked disabled id="push" />
            <FieldLabel className="font-normal" htmlFor="push">
              Push notifications
            </FieldLabel>
          </Field>
        </FieldGroup>
      </FieldSet>
      <FieldSeparator />
      <FieldSet>
        <FieldLabel>Tasks</FieldLabel>
        <FieldDescription>
          Get notified when tasks you've created have updates.{" "}
          <a href="#">Manage tasks</a>
        </FieldDescription>
        <FieldGroup data-slot="checkbox-group">
          <Field orientation="horizontal">
            <Checkbox id="push-tasks" />
            <FieldLabel className="font-normal" htmlFor="push-tasks">
              Push notifications
            </FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <Checkbox id="email-tasks" />
            <FieldLabel className="font-normal" htmlFor="email-tasks">
              Email notifications
            </FieldLabel>
          </Field>
        </FieldGroup>
      </FieldSet>
    </FieldGroup>
  </div>
);

export default Example;
