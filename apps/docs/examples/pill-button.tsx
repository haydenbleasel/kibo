'use client';

import { Pill, PillButton } from '@repo/pill';
import { XIcon } from 'lucide-react';

const Example = () => (
  <Pill>
    #kibo-ui
    <PillButton variant="ghost" size="icon">
      <XIcon size={12} />
    </PillButton>
  </Pill>
);

export default Example;
