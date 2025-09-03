"use client";

import { Pill, PillDelta } from "@repo/pill";

const Example = () => (
  <>
    <Pill>
      <PillDelta delta={10} />
      Up 10%
    </Pill>
    <Pill>
      <PillDelta delta={-5} />
      Down 5%
    </Pill>
    <Pill>
      <PillDelta delta={0} />
      No change
    </Pill>
  </>
);

export default Example;
