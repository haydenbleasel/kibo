"use client";

import { useId } from "react";
import { Switch } from "@/components/ui/switch";

export const title = "Square Switch";

const Example = () => {
  const id = useId();

  return <Switch className="rounded-sm [&_span]:rounded" id={id} />;
};

export default Example;
