"use client";

import { useId, useState } from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export const title = "Square Switch with Text";

const Example = () => {
  const id = useId();
  const [checked, setChecked] = useState(true);

  return (
    <div>
      <div className="relative inline-grid h-9 grid-cols-[1fr_1fr] items-center font-medium text-sm">
        <Switch
          checked={checked}
          className="peer [&_span]:data-[state=checked]:rtl:-translate-x-full absolute inset-0 h-[inherit] w-auto rounded-md data-[state=unchecked]:bg-input/50 [&_span]:z-10 [&_span]:h-full [&_span]:w-1/2 [&_span]:rounded-sm [&_span]:transition-transform [&_span]:duration-300 [&_span]:ease-[cubic-bezier(0.16,1,0.3,1)] [&_span]:data-[state=checked]:translate-x-full"
          id={id}
          onCheckedChange={setChecked}
        />
        <span className="peer-data-[state=unchecked]:rtl:-translate-x-full pointer-events-none relative ms-0.5 flex items-center justify-center px-2 text-center transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] peer-data-[state=checked]:invisible peer-data-[state=unchecked]:translate-x-full">
          <span className="font-medium text-[10px] uppercase">Off</span>
        </span>
        <span className="peer-data-[state=checked]:-translate-x-full pointer-events-none relative me-0.5 flex items-center justify-center px-2 text-center transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] peer-data-[state=unchecked]:invisible peer-data-[state=checked]:text-primary-foreground peer-data-[state=checked]:rtl:translate-x-full">
          <span className="font-medium text-[10px] uppercase">On</span>
        </span>
      </div>
      <Label className="sr-only" htmlFor={id}>
        Labeled switch
      </Label>
    </div>
  );
};

export default Example;
