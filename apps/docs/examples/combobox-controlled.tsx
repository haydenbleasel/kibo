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
import { useState } from "react";

const plants = [
  {
    value: "monstera-deliciosa",
    label: "Monstera Deliciosa (Swiss Cheese Plant)",
  },
  {
    value: "ficus-lyrata",
    label: "Ficus Lyrata (Fiddle Leaf Fig)",
  },
  {
    value: "sansevieria-trifasciata",
    label: "Sansevieria Trifasciata (Snake Plant)",
  },
  {
    value: "spathiphyllum-wallisii",
    label: "Spathiphyllum Wallisii (Peace Lily)",
  },
  {
    value: "epipremnum-aureum",
    label: "Epipremnum Aureum (Golden Pothos)",
  },
  {
    value: "calathea-orbifolia",
    label: "Calathea Orbifolia (Prayer Plant)",
  },
];

const Example = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(plants[0].value);

  return (
    <Combobox
      data={plants}
      onOpenChange={setOpen}
      onValueChange={setValue}
      open={open}
      type="plant"
      value={value}
    >
      <ComboboxTrigger />
      <ComboboxContent>
        <ComboboxInput />
        <ComboboxEmpty />
        <ComboboxList>
          <ComboboxGroup>
            {plants.map((plant) => (
              <ComboboxItem key={plant.value} value={plant.value}>
                {plant.label}
              </ComboboxItem>
            ))}
          </ComboboxGroup>
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
};

export default Example;
