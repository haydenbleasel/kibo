'use client';

import { Kbd, KbdKey } from '@repo/kbd';

const Example = () => (
  <p className="max-w-sm">
    Press{' '}
    <Kbd>
      <KbdKey aria-label="Meta">⌘</KbdKey>
      <KbdKey>K</KbdKey>
    </Kbd>{' '}
    to open the command palette.
  </p>
);

export default Example;
