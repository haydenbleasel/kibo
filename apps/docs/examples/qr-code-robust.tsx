"use client";

import { QRCode } from "@repo/qr-code";
import type { ComponentProps } from "react";

const robustnessOptions: ComponentProps<typeof QRCode>["robustness"][] = [
  "L",
  "M",
  "Q",
  "H",
];

const Example = () => (
  <div className="grid grid-cols-4 gap-4">
    {robustnessOptions.map((robustness) => (
      <div className="flex flex-col items-center gap-2" key={robustness}>
        <QRCode data="https://www.haydenbleasel.com/" robustness={robustness} />
        <p className="font-medium text-muted-foreground text-sm">
          {robustness}
        </p>
      </div>
    ))}
  </div>
);

export default Example;
