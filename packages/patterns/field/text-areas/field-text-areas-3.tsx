"use client";

import { useState } from "react";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";

export const title = "Textarea with Character Count";

const Example = () => {
  const [value, setValue] = useState("");
  const maxLength = 500;

  return (
    <div className="w-full max-w-md">
      <Field>
        <FieldLabel htmlFor="bio">Bio</FieldLabel>
        <Textarea
          className="bg-background"
          id="bio"
          maxLength={maxLength}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Tell us about yourself..."
          rows={4}
          value={value}
        />
        <FieldDescription>
          {value.length}/{maxLength} characters
        </FieldDescription>
      </Field>
    </div>
  );
};

export default Example;
