'use client';

import { Pill, PillIndicator } from '@repo/pill';

const Example = () => (
  <>
    <Pill>
      <PillIndicator variant="success" pulse />
      Active
    </Pill>
    <Pill>
      <PillIndicator variant="error" />
      Error
    </Pill>
  </>
);

export default Example;
