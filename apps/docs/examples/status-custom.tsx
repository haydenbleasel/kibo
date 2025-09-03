"use client";

import { Status, StatusIndicator, StatusLabel } from "@repo/status";

const Example = () => (
  <Status
    className="gap-4 rounded-full px-6 py-2 text-sm"
    status="online"
    variant="outline"
  >
    <StatusIndicator />
    <StatusLabel className="font-mono">Fully operational</StatusLabel>
  </Status>
);

export default Example;
