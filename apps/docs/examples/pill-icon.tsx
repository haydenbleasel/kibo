"use client";

import { Pill, PillIcon } from "@repo/pill";
import { UsersIcon } from "lucide-react";

const Example = () => (
  <Pill>
    <PillIcon icon={UsersIcon} />
    17 users
  </Pill>
);

export default Example;
