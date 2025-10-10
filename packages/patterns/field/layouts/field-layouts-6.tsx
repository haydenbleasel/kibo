import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

export const title = "Mixed Orientations";

const Example = () => (
  <div className="w-full max-w-md">
    <FieldSet>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="project-name">Project Name</FieldLabel>
          <Input
            className="bg-background"
            id="project-name"
            placeholder="My Project"
            type="text"
          />
          <FieldDescription>
            This will be visible to all team members.
          </FieldDescription>
        </Field>
        <Field orientation="horizontal">
          <FieldContent>
            <FieldLabel htmlFor="public">Make project public</FieldLabel>
            <FieldDescription>
              Anyone on the internet can see this project.
            </FieldDescription>
          </FieldContent>
          <Switch id="public" />
        </Field>
        <Field orientation="horizontal">
          <Checkbox id="archive" />
          <FieldLabel className="font-normal" htmlFor="archive">
            Archive this project when complete
          </FieldLabel>
        </Field>
      </FieldGroup>
    </FieldSet>
  </div>
);

export default Example;
