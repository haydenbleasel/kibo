'use client';

import { Kbd, KbdKey } from '@repo/kbd';
import { ChevronRightIcon } from 'lucide-react';

const Example = () => (
  <Kbd
    separator={
      <span className="text-muted-foreground/50">
        <ChevronRightIcon size={12} />
      </span>
    }
  >
    <KbdKey aria-label="Meta">⌘</KbdKey>
    <KbdKey>K</KbdKey>
  </Kbd>
);

export default Example;
