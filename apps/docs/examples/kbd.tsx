"use client";

import { Kbd, KbdKey } from "@repo/kbd";

const Example = () => (
  <Kbd>
    <KbdKey aria-label="Meta">⌘</KbdKey>
    <KbdKey>K</KbdKey>
  </Kbd>
);

export default Example;
