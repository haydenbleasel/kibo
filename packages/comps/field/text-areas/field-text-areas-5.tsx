import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";

export const title = "Multiple Textareas - Different Sizes";

const Example = () => (
  <div className="w-full max-w-md">
    <FieldSet>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="short-note">Short Note</FieldLabel>
          <Textarea
            className="bg-background"
            id="short-note"
            placeholder="Brief note..."
            rows={2}
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="medium-comment">Comment</FieldLabel>
          <Textarea
            className="bg-background"
            id="medium-comment"
            placeholder="Your comment..."
            rows={4}
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="long-essay">Essay</FieldLabel>
          <Textarea
            className="bg-background"
            id="long-essay"
            placeholder="Write your essay..."
            rows={8}
          />
        </Field>
      </FieldGroup>
    </FieldSet>
  </div>
);

export default Example;
