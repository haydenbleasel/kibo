'use client';

import { ThemeSwitcher } from '@repo/theme-switcher';
import { useState } from 'react';

const Example = () => {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system');

  return (
    <ThemeSwitcher defaultValue="system" value={theme} onChange={setTheme} />
  );
};

export default Example;
