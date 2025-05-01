'use client';

import { Pill, PillStatus } from '@repo/pill';
import { CheckCircleIcon } from 'lucide-react';

const Example = () => (
  <Pill>
    <PillStatus>
      <CheckCircleIcon size={12} className="text-emerald-500" />
      Passed
    </PillStatus>
    Approval Status
  </Pill>
);

export default Example;
