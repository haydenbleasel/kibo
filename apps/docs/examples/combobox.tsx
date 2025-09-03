"use client";

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
} from "@repo/combobox";

const frameworks = [
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

const Example = () => (
  <Combobox
    data={frameworks}
    onOpenChange={(open) => console.log("Combobox is open?", open)}
    onValueChange={(newValue) => console.log("Combobox value:", newValue)}
    type="framework"
  >
    <ComboboxTrigger />
    <ComboboxContent>
      <ComboboxInput />
      <ComboboxEmpty />
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

export default Example;
