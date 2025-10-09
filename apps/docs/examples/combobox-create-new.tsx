"use client";

import {
  Combobox,
  ComboboxContent,
  ComboboxCreateNew,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
} from "@repo/combobox";
import { useState } from "react";

const initialFrameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
  {
    value: "vite",
    label: "Vite",
  },
];

const Example = () => {
  const [frameworks, setFrameworks] = useState(initialFrameworks);
  const [value, setValue] = useState("");

  const handleCreateNew = (newValue: string) => {
    console.log("Creating new framework:", newValue);

    // Add the new framework to the list
    const newFramework = {
      value: newValue.toLowerCase().replace(/\s+/g, "-"),
      label: newValue,
    };

    setFrameworks((prev) => [...prev, newFramework]);
    setValue(newFramework.value);
  };

  return (
    <Combobox
      data={frameworks}
      onValueChange={setValue}
      type="framework"
      value={value}
    >
      <ComboboxTrigger className="w-[300px]" />
      <ComboboxContent>
        <ComboboxInput />
        <ComboboxEmpty>
          <ComboboxCreateNew onCreateNew={handleCreateNew} />
        </ComboboxEmpty>
        <ComboboxList>
          <ComboboxGroup>
            {frameworks.map((framework) => (
              <ComboboxItem key={framework.value} value={framework.value}>
                {framework.label}
              </ComboboxItem>
            ))}
          </ComboboxGroup>
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
};

export default Example;
