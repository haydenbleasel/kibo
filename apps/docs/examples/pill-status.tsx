"use client";

import { Pill, PillStatus } from "@repo/pill";
import { CheckCircleIcon } from "lucide-react";

const Example = () => (
  <Pill>
    <PillStatus>
      <CheckCircleIcon className="text-emerald-500" size={12} />
      Passed
    </PillStatus>
    Approval Status
  </Pill>
);

export default Example;
